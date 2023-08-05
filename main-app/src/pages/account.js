//import react from 'react';
import '../App.css';
//import Home from './pages/Home';

function login() {
  return (
<div>
    <div className='email'>
        <h3><b>Sign In</b></h3>
        
        <form>
            <label>Username</label>
            <input size="38"/>
            <hr/>
            <label type="password">Password</label>
            <input size="38"/>
            <hr/>
            <input type="checkbox" id="remember"/>
            <label for="remember"> Remember Me</label>
        
            <button type="button"><b>Sign up</b></button>
        </form>

        <p>
            Dont have an account? <a href="#">sign in</a> 
        </p>
    </div>
    

 <div class="media">
        <button class="google"><b>Sign in with Google</b></button>
        <br/><br/>
        <button class="facebook"><b>Sign in with Facebook</b></button>
        <p>Or signup using 
        <a href="#"> phone number</a>
        </p>
        <p>By signing up you agree to our 
            <a href="#"> terms of service</a>
        </p>
    </div>
</div>
  );
}

function signup () {
    return(
    <div>sigh up</div>
    );
}

export { login, signup };
