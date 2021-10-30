import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const SignUP = () => {
    const {signInUsingGoogle,
        error,
        handleNameChange,
        handleEmailChange,
        handleRegistration,
        handlePasswordChange} = useAuth();
    return (
        <div>
             <>
        <div className="mb-5 mt-5">
        <h1 className="text-info">WelCome To Tour Hobe</h1>
        <p className="text-danger">TourHobe is the country’s first and leading online travel booking platform</p>
        <br />
           <h2 className="mb-5 text-primary">Please Register</h2>
          
           <form action="" onSubmit={handleRegistration}>

               <input type="text" onBlur={handleNameChange} name="Name" id=""  placeholder="Mr.jhon" required/>
               <br />
               <br />
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
               <Link to="/login">Already Registered?</Link>
               
           </form>
       </div>
        <div className="mb-5">
         <hr />
          <button onClick={signInUsingGoogle} className="btn btn-warning mb-5 mt-">Google SignUP</button>
        </div>
      </>
            
        </div>
    );
};

export default SignUP;