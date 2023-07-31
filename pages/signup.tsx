import React from 'react'
import Heading from './components/Heading';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignupForm from './components/SignupForm';

function signup() {
  return (
    <>
    <Navbar />
      <Heading />
      <h1 className='form_head'>Signup</h1>
      <SignupForm />
      <p className='center'>Already Signup? <a href='/login'>Login</a></p>
      <div className="gap"></div>
      <Footer />
    </>
  )
}

export default signup