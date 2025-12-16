import { useState, useRef} from "react"
import Header from "./Header"
import { checkValidateData } from "../utils/validate"

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errormessage, Seterrormessage] = useState(null)

  const email = useRef()
  const password = useRef()
  const Name = useRef()

     const handleButtonClick = () => {
    
   

      const message = checkValidateData(
        email.current.value,
        password.current.value,
       
      ) 
      Seterrormessage(message)
     

    }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
 
  }
  return (
    <div className="">
      <Header />


      <div className="absolute w-full h-screen">
        <img
          className="w-full h-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
      </div>


      <form onSubmit={(e) => {e.preventDefault()}} className="absolute w-3/12 py-12 px-10 bg-black text-white my-36 
                       right-0 left-1/2 transform -translate-x-1/2 bg-opacity-50 z-20">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && <input
        ref={Name}
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-[#333333] rounded-lg focus:outline-none"
        />}

        <input
        ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-[#333333] rounded-lg focus:outline-none"
        />

        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-[#333333] rounded-lg focus:outline-none"
        />
        <p className="text-red-500 font-bold py-2 text-lg">{errormessage}</p>

        <button onClick={handleButtonClick} className="p-4 my-6 bg-red-800 text-white rounded-lg w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="font-bold cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now." : "Already have an account? Sign in."}</p>
      </form>
    </div>
  )
}

export default Login
