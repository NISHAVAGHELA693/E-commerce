import '../e-commerce/index.css'
function SignUp(){
    return(
        <div className='maindiv'>
            <h2>New User</h2>
        <label>Enter your FullName : </label>
        <input type="text" className="FullName"/><br/><br/>
        <label>Enter your Email :    </label>
        <input type="text" className="email"/><br/>
        <label>Enter your Password :    </label>
        <input type="text" className="email"/><br/>
        <button type="submit" className="button" onClick='submit'>signUp</button>
        </div>
    )
}
export default SignUp;