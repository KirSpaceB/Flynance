import signUpPageBackgroundImage from "../../assets/signup_page_leftimg.png"
import { ChangeEvent, FormEvent, useState } from "react"
import validator from 'validator';

export default function SignupPage() {
  const [userData, setUserData] = useState({
    userName:'',
    userEmail:'',
    userPassword:''
  })

  const userNameHandler = (e:ChangeEvent<HTMLInputElement>) => {
    // The reason we put parenthesis is to return an object, due to ambiguity can use parenthesis instead of double curly brackets
    setUserData(prevState => ({
      ...prevState,
      userName: e.target.value
    }))
  }

  const userEmailHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setUserData(prevState => ({
      ...prevState,
      userEmail: e.target.value
    }))
  }
  // I worry about the password being incorrectly encrypted here on the client side. Can't someone console log the password before being sent to the server?
  const userPasswordHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setUserData(prevState => ({
      ...prevState,
      userPassword: e.target.value
    }))
  }
  //SubmitEvent is not a generic. So whats the difference between a generic and a non-generic?
  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
      // Assuming userData.userEmail contains the email to be validated
    const isValidEmail = validator.isEmail(userData.userEmail);

    if (!isValidEmail) {
      alert("invalid email")
      return; // Prevent further processing if the email is invalid
    } else if (userData.userName === '') {
      alert("please input username")
    } else if (userData.userPassword === '') {
      alert("please input user password")
    } else {
      const response = await fetch('http://localhost:5194/UserSignUp', {
        method:"POST",
        mode:"cors",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(userData)
      })
      const weatherData = await response.json();
      console.log(weatherData)
      console.log("Sending to database: ", userData)
    }

  }

  return (
    <div className="w-screen h-screen flex flex-row bg-[#A46766]">
      <div className="lg:w-[580px] lg:h-screen">
        <img src={signUpPageBackgroundImage} alt="" className="w-full h-full"/>
      </div>
      <div className="lg:w-2/3 w-2/3 lg:min-h-screen bg-[#A46766]">
        <div className="flex flex-col justify-center items-center h-screen space-y-10">
          <h1>Hi There!</h1>
          <button>Sign up with google</button>
          <form action="" className="flex flex-col space-y-10" onSubmit={(e) => handleSubmit(e)}>
            <input type="text" name="" id="" placeholder="Name" className="lg:w-[345px] h-[54px] bg-white rounded-xl" onChange={(e) => userNameHandler(e)}/>
            <input type="text" name="" id="" placeholder="Email" className="lg:w-[345px] h-[54px] bg-white rounded-xl" onChange={userEmailHandler}/>
            <input type="text" name="" id="" placeholder="Password" className="lg:w-[345px] h-[54px] bg-white rounded-xl" onChange={userPasswordHandler}/>
            <button className="rounded-full bg-black lg:w-[230px] lg:h-[54px] lg:text-[32px] font-medium w-auto h-auto text-white text-lg" >Sign up</button>
          </form>

        </div>
      </div>
    </div>
  )
}
