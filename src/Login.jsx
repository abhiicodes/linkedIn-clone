import React,{useState} from 'react'
import { auth } from './firebase'
import "./Login.css"
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';


function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [name, setName] = useState("")
  const [profilePic, setProfilePic] = useState("")
const dispatch = useDispatch();



const register = () =>{
if(!name){
    return alert("Please enter a full name")
}

auth.createUserWithEmailAndPassword(email,password)
.then((userAuth)=>{
    // console.log(userAuth)
    userAuth.user.updateProfile({
        displayName:name,
        photoURL:profilePic
    }).then(()=>{
        // console.log(userAuth)
        dispatch(login({
            email:userAuth.user.email,
            uid: userAuth.user.uid,
            displayName:name,
            photoUrl:profilePic
        }))
})
}).catch((err)=>console.log(err))


}

const loginToApp = (e) =>{

e.preventDefault();
auth.signInWithEmailAndPassword(email,password).then(userAuth=>{
    dispatch(login({
        email:userAuth.user.email,
        uid: userAuth.user.uid,
        displayName:userAuth.user.displayName,
        photoUrl:userAuth.user.photoUrl,
    }))
}).catch((err)=>alert(err))

}




  return (
    <div className='login'>

       <img src="https://assets.website-files.com/5e9e1ab03f01965d368f432a/6109a9de367fcc091a4f965a_linkedin-336x14-logo.png" alt="" />

       <form action="">


        <input type="text" placeholder='Full name' value={name} onChange={(e)=>{
            setName(e.target.value);
        }} />
        <input type="text" placeholder='Profile pic url' value={profilePic} onChange={(e)=>{
            setProfilePic(e.target.value);
        }} />

        <input type="email" placeholder='Email'  value={email} onChange={(e)=>{
            setEmail(e.target.value);
        }} />

        <input type="password" placeholder='Password'  value={password} onChange={(e)=>{
            setPassword(e.target.value);
        }} />
<button onClick={loginToApp}>Sign In</button>

       </form>

       <p>Not a member? {"  "}
        <span className='login__register' onClick={register} >Register Now</span>
       </p>
    </div>
  )
}

export default Login