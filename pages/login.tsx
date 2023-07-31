import React from 'react'
import Heading from './components/Heading';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

function login() {
  return (
    <>
    <Navbar />
      <Heading />
      <h1 className='form_head'>Login</h1>
      <LoginForm />
      <p className='center'>Not Signup? <a href='/signup'>signup</a></p>
      <div className="gap1"></div>
      <Footer />
    </>
  )
}

export default login