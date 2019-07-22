import React from 'react';


class Register extends React.Component {

constructor(props)
{
  super(props);
  this.state={
    register_email:'',
    register_pass:'',
    name:''
  }
}

onNameChange=(event) =>{
  this.setState({name:event.target.value});
}

onEmailChange=(event) =>{
  this.setState({register_email:event.target.value});
}

onPassChange=(event) =>{
  this.setState({register_pass:event.target.value});
}

onSubmit = () => {
fetch('http://localhost:3001/register',{
method:'post',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
email:this.state.register_email,
name:this.state.name,
password:this.state.register_pass
})
}).then(res => res.json())
.then(data=>{
  if(data)
  {
    this.props.LoadUser(data);
this.props.onRouteChange('home');
    
  }
})
}
render(){
	return (
		<article className="br3 shadow-5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
		<div className='m'>
	<main className="pa4 black-80">
  <form className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 mh0">Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
        <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
      </div>
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
  </form>
</main>
</div>
</article>
		);
}
}
export default Register;