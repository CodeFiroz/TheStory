import React, { useState } from 'react'

const Register = () => {


    const [passfield, setPassfield] = useState("password");
    const [passfieldtext, setPassfieldText] = useState("Show Password");

    const togglePassword = ()=>{
        if(passfield == "password") {
            setPassfield("text")
        }else{
            setPassfield("password")
        }
    }

  return (
    <div className="container sign-in">

        <h1>Register</h1>

        <form action="#">

            <input type="text" name='name' placeholder='Enter Name' />
            <input type="text" name='username' placeholder='Create an username' />
            <input type="email" name='email' placeholder='Enter Email Address' />
            <input type={passfield} name='password' placeholder='Password' />

            <div>
                <input type="checkbox" name="passeye" id="passeye" onChange={togglePassword} />
                <label htmlFor="passeye">{passfieldtext}</label>
            </div>

            <button>Register</button>

    <p>
        Already registred <a href="#">Login Here</a>
    </p>

        </form>

    </div>
  )
}

export default Register
