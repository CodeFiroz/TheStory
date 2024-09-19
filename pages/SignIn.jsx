import React from 'react'

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
        Don't have an account <a href="#">Register Here</a>
    </p>

        </form>

    </div>
  )
}

export default SignIn
