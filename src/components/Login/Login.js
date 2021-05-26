import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from "../../App";
import { useHistory, useLocation } from "react-router";
firebase.initializeApp(firebaseConfig);

function Login() {
const [loggedInUser,setLoggedInUser]=useContext(userContext)
let history = useHistory();
let location = useLocation();
let { from } = location.state || { from: { pathname: "/" } };
const [newUser,setNewUser]=useState(false)
 const [user,setUser]= useState({
   isSignIn:false,
   name:'',
   password:'',
   photo:'',
   email:'',
   error:'',
  //  success:false
 })
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn=()=>{
    firebase.auth().signInWithPopup(provider)
    .then(res=>{
      const {displayName,email,photoURL}=res.user;
      const isSign={
        isSignIn:true,
        name:displayName,
        photo:photoURL,
        email:email,
        success:false
      }
    setUser(isSign)
    setLoggedInUser(isSign)
          history.replace(from)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  const handleSignOut =()=>{
    firebase.auth().signOut()
    .then(res=>{
      const signOut ={
        isSignIn:false,
        name:'',
        email:'',
        photo:''
      }
      setUser(signOut)
    })
  }
  const handleSubmit =(e)=>{
    if(newUser && user.email && user.password){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
  .then((res) => {
    const newUserInfo ={...user}
    newUserInfo.success=true;
    newUserInfo.error='';
    setUser(newUserInfo)
    updatedUserName(user.name)
  })
  .catch((error) => {
      const newUserInfo ={...user}
    newUserInfo.error=error.message;
    newUserInfo.success=false;
    setUser(newUserInfo)
  });

    }
    if(!newUser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then((res) => {
      const newUserInfo ={...user}
      newUserInfo.success=true;
      newUserInfo.error='';
      setUser(newUserInfo)
      setLoggedInUser(newUserInfo)
      history.replace(from);
     
  })
  .catch((error) => {
    const newUserInfo ={...user}
    newUserInfo.error=error.message;
    newUserInfo.success=false;
    setUser(newUserInfo)
  });

    }
    e.preventDefault()
  }
  const handleOnBlur =(e)=>{
    let isFormValid =true;
    if(e.target.name==='email'){
      isFormValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
    }
    if(e.target.name==='password'){
      isFormValid =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(e.target.value);
    }
    if(isFormValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name]=e.target.value;
      setUser(newUserInfo)
    }
  }
const updatedUserName =(name)=>{
  var user = firebase.auth().currentUser;

user.updateProfile({
  displayName: name,
}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});
}
return (
    <div style={{textAlign:"center"}}>
       {
         user.isSignIn ?  <button onClick={handleSignOut}>Sign Out</button> :  <button onClick={handleSignIn}>Sign In With Google</button>
       }
        {/* {
          user.isSignIn && <div>
            <h1>Welcome Mr. <span style={{color:"tomato"}}> {user.name}</span></h1>
            <p>Email: {user.email}</p>
            <img src={user.photo} alt="" />
          </div>
        } */}
        <h1>Our Own Authentication</h1>
        <input type="checkbox" name="newUser" onChange={()=>setNewUser(!newUser)}/>
          <label htmlFor="newUser">New User Sign Up</label>
        <form onSubmit={handleSubmit}>
         {newUser && <input type="text" onBlur={handleOnBlur} name="name" placeholder="Enter Your Name" required/> } <br />
          <input type="text" name="email" onBlur={handleOnBlur} placeholder="Enter Your Email" required/> <br />
          <input type="password" name="password" onBlur={handleOnBlur} placeholder="Enter Your Passwrod" required/> <br />
          <input type="submit" value="Submit"/>
        </form>
        <p style={{color:'red'}}>{user.error}</p>
       {
         user.success && <p style={{color:"green"}}>User {newUser ? "Created " : "Logged In"} SuccesFully</p>
       }
        
    </div>
  );
}

export default Login;
