import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js'
import Logo from './Components/Logo/Logo.js'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js'
import FaceRecognition from './Components/FaceRecognition/FaceRecognition.js'
import Rank from './Components/Rank/Rank.js'
import Register from './Components/Register/Register.js'
import SignIn from './Components/SignIn/SignIn.js'
//import Particles from 'react-particles-js';
import Clarifai from 'clarifai';



//const part = {particles: {number:{value:80,density:{enable:true,value_area:395}},line_linked: {shadow: {enable: true,   color: "#3CA9D1",blur: 5}},move:{enable:true,speed:17.6},},interactivity:{onhover:{enable:true,mode:"repulse"}}      }
    
const app = new Clarifai.App({
 apiKey: '6aa7306f3268422daedae4c2d343b342'
});


const initial_state={
    input:'',
    imageUrl:'',
    box:{},
    route:'SignIn',
    isSignedIn:false,
    user:{
  id:'',
  name:'',
  email:'',
  entries:0,
  joined:''
 
}

class App extends Component {
  
constructor()
{
  super();
  this.state= {
    input:'',
    imageUrl:'',
    box:{},
    route:'SignIn',
    isSignedIn:false,
    user:{
  id:'',
  name:'',
  email:'',
  entries:0,
  joined:''
    }
  }
}

// componentDidMount()
// {
//   fetch('http://localhost:3001').then(res => res.json()).then(console.log);
// }

calculateFaceLocation = (data) => {
const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
const image= document.getElementById('img');
const width=Number(image.width);
const height=Number(image.height);
return {
  leftCol: clarifaiFace.left_col * width,
  topRow:clarifaiFace.top_row * height,
  rightCol: width-(clarifaiFace.right_col * width),
  bottomRow: height-(clarifaiFace.bottom_row * height)
}
}

LoadUser = (data) =>{
this.setState({user:{
  id:data.id,
  name:data.name,
  email:data.email,
  entries:data.entries,
  joined:data.joined
 }   })
}

displayFaceBox = (box) =>
{
  this.setState({box:box});
}

onInputChange = (event) => {
console.log(event.target.value);
this.setState({input:event.target.value})
}
  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => {
        if (response) {
          fetch('http://localhost:3001/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count}))
            }).catch(console.log)

        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }

onRouteChange = (route) => {
if(route=== 'signout')
{
 this.setState(initial_state);
}
else if(route === 'home')
{
  this.setState({isSignedIn:true});

}

else if(route === 'SignIn')
{
  this.setState({isSignedIn:false});
}

else if(route === 'register')
{
  this.setState({isSignedIn:false});
}

  this.setState({route:route});
}
render(){
  return (
    <div className="App">
      
      <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
      { this.state.route=== "home" 
         ? <div>
      <Logo />
      <Rank name={this.state.user.name} entries={this.state.user.entries}/>
      <ImageLinkForm 
      onInputChange={this.onInputChange}
      onSubmitChange={this.onButtonSubmit}
      />
      <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box}/>
       {/* 
      <Particles className="particles"
              params={part}
            />
     */}
     </div>

      : ( this.state.route=== "SignIn"  ?
        <SignIn LoadUser={this.LoadUser} onRouteChange={this.onRouteChange}/>
      : 
      <Register LoadUser={this.LoadUser} onRouteChange={this.onRouteChange}/>
)}
    </div>
  );
}
}

export default App;
