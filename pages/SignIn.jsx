import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <div className="container sign-in">

        <h1>Sign in</h1>

        <form action="#">

            <input type="text" name='userid' placeholder='Enter User ID' />
            <input type="password" name='password' placeholder='Password' />

            <div>
                <input type="checkbox" name="passeye" id="passeye" />
                <label htmlFor="passeye">Show Password</label>
            </div>

            <button>Login</button>

    <p>
        Don't have an account <Link to="/register">Register Here</Link>
    </p>

        </form>

    </div>
  )
}

export default SignIn
