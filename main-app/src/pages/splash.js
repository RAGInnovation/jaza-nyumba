import { login, signup } from './account';
import '../App.css';

function splash() {
    return (
    <div>


    <h2>What is Jaza Nyumba!</h2>
    <p>Descrition...</p>
    
    <br/>

    <h2>Wow to play</h2>
    <p>Descreption...</p>

    <button className='button' onClick={login}>Login</button>
    <br/><br/>
    <button className='button' onClick={signup}>Sign up</button>

    </div>
    );
}

export default splash;
