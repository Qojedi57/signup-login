import { useState } from 'react'
import reactLogo from './assets/react.svg'
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

function App() {
  return (
      <div className="app">
        <div className="nav">
          <Nav />
        </div>
        <div className="content">
          <Sidebar />
          <Main>
            <p>Hello world</p>
          </Main>
        </div>
        {/* <Footer /> */}
      </div>
  )
}

export default App
