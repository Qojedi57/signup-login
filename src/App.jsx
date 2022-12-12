import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Button, Form} from "react-bootstrap";
import './App.css'

const Nav = () => {
  return (
    <div className="navlinks">
      <a href="">1sadsadsad</a>
      <a href="">2sadsadsad</a>
      <a href="">3sadsadsad</a>
    </div>
  )
}

function Sidebar() {
  return (
    <div className="sidebar">
      <a href="">2sadsadsad</a>
      <a href="">3sadsadsad</a>
    </div>
  )
}

function Main(props) {
  return (
    <div className='main'>
     {props.children}
      </div>
  )
}

function Footer() {
  return (
    <>
    <p>hello world</p>
    </>
  )

}

function Login(props){
const [username, setUsername] = useState("");
const [password, setPassword]= useState("");
const [error, setError] = useState(false);

const handleLogin=(e) => {
  e.preventDefault();

if(username == "user123" && password == "password123"){
  console.log("logged in");
  props.setLoginUser(true);
  setError(false);
  } else {
    setError(true);
  }
}


  return (
    <div>
      {error ? <div>That was the wrong username and/or password</div>: <div>Welcome to the app</div>
    }
      <form onSubmit={(e) => handleLogin(e)}>
        <input onChange={(e) =>setUsername(e.target.value)} type="text" name="username"/>
        <input onChange={(e) =>setPassword(e.target.value)} type="password" name="password"/>
        <input type="submit" value="Already a User" />
      </form>
    </div>
  )
}

function Signup(props) {
  return (
    <div className="Signup-page">
      <div>
        {/* <form onSubmit={(e) => handleLogin(e)}>
          <label htmlFor="user">First Name</label>
          <input onChange={(e) => setUsername(e.target.value)}/>
        </form> */}
        <Form onSubmit={(e) => handleLogin(e)}>
      <Form.Group className="mb-3" controlId="formSignup">
        <Form.Label>Sign Up</Form.Label>
        <Form.Control type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
        placeholder="Enter your password"/>
        </Form.Group>
        <div className="d-grid gap-2">
          <Button type="submit">Sign Up</Button>
        </div>
      </Form>
        </div>
        </div>
  )
}

function App() {
const [isuserLoggedIn, setUserLoggedIn ]=useState(false);
const [showLogin, setShowLogin] = useState(true);

  return (
   
          <div className="app">
            {
              isuserLoggedIn?
              <>
            <div className="navbar-box">
              <Nav /> 
            </div>
            <div className="content">
              <Sidebar />
              <Main>
                <p>Hello world</p>
                </Main>
              </div>
              </>
              :
              <>
              {
                showLogin?
              <Login setLoginUser={setUserLoggedIn} />
              :
              <Signup isSignedUp ={showLogin} setShowLogin={setShowLogin} />
          }
          <button onClick={()=> setShowLogin((previousState) => !previousState )}>New User</button>
          </>
    }</div>
    )
    }

export default App
