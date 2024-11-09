import { useEffect, useRef } from "react";

const RefForm = () => {
   //   step 1 

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
   
       // CARSER POINTR AR JONNO 

       useEffect(() =>{
        nameRef.current.focus();
       },[]);


      // step 2
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)

    }
    return (
        <div>
             <form onSubmit={ handleSubmit}>
                <input ref={nameRef} type="text"name="name" />
                <br />

                <input ref={emailRef} type="email"name="email" />
                <br />
                <input  ref={passwordRef} type="password" name="Password"/>
                <br />

                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefForm;
