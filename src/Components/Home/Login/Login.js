import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const location=useLocation();
    const history=useHistory();
    const redirectUrl=location.state?.from || "/home" ;
    const {signInUsingGoogle,
        error,
        setIsLogin,
        handleEmailChange,
        handleLogin,
        handlePasswordChange} = useAuth();

        const handleGooglelogin=()=>{
            signInUsingGoogle()
            .then(res =>{
                history.push(redirectUrl);
            })
            .finally(() =>  setIsLogin(false));
        }
    return (
        
        <>
        <div className="mb-5 mt-5">
           
          
           <h2 className="mb-5 text-primary">Please Login</h2>
           <form action="" onSubmit={handleLogin}>

               <input type="email" onBlur={handleEmailChange} name="email" id=""  placeholder="example@email.com" required/>
               <br />
               <br />
               <input type="password" onBlur={handlePasswordChange} name="password" id=""  placeholder="please Input Your Password" required/>
               <br />
               <p>{error}</p>
               <br />
               <input type="submit" value="Submit" className="btn btn-secondary"/>
               <br />
               <br />
               <Link to="/signup">New Member ?</Link>
               
           </form>
       </div>
        <div className="mb-5">
         <hr />
          <button onClick={handleGooglelogin} className="btn btn-warning mb-5 mt-">Google Sign in</button>
        </div>
      </>
    );
};

export default Login;