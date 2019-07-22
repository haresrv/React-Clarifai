import React from 'react';


class SignIn extends React.Component{

constructor(props)
{
  super(props);
  this.state={
    signin_email:'',
    signin_pass:''
  }
}

onEmailChange=(event) =>{
  this.setState({signin_email:event.target.value});
}

onPassChange=(event) =>{
  this.setState({signin_pass:event.target.value});
}

onSubmit = () => {
fetch('http://localhost:3001/signin',{
method:'post',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
email:this.state.signin_email,
password:this.state.signin_pass
})
}).then(res => res.json())
.then(data=>{
  if(data)
  {
    this.props.LoadUser(data);
this.props.onRouteChange('home');
    console.log("Success");
  }
})
}

render(){
	return (
<div>
		<article className="br3 shadow-5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
		<div className='m'>
	<main className="pa4 black-80">
  <form className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input onChange={this.onPassChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>
    </fieldset>
    <div className="">
      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Sign in"
			onClick={this.onSubmit}
      />
    </div>
    <div className="lh-copy mt3">
      <p onClick={() => this.props.onRouteChange('register')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">Register</p>
    </div>
  </form>
</main>
</div>
</article>
</div>		);
}}

export default SignIn;