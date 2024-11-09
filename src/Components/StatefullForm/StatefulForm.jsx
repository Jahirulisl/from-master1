import { useState } from "react";


const StatefulForm = () => {
       //  stp 1 
     const [name,setName] =useState('md ') 

    const [email,setEmail] = useState(null);

    const [password,setPassword] = useState(null);

    const [error,setError] = useState('');

        //  stp 2
    const handleSubmit = e =>{
      e.preventDefault();
      if(password.length < 6){
        setError('password must be 6 characters or longer')
      }
      else{
        setError('');
      }
      console.log(email,password,name);

    };

    const handleEmailChange = e =>{
        console.log(e.target.value);
        setEmail(e.target.value);
    };

    const handlePasswordChange = e => {
        setPassword(e.target.value);

    };
     const handleNameChange = e => {
        setName(e.target.value);
     }

     


                 //    stp 3
    return (
        <div>
             <form onSubmit={ handleSubmit}>
                <input value={name} onChange={handleNameChange}
                 type="text"name="name" />
                <br />

                <input onChange={handleEmailChange}
                 type="email"name="email" required />
                <br />

                <input onChange={ handlePasswordChange}
                 type="password" name="password" required />
                <br />

                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;
