import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../actions/authActions";
import signUpPageBackgroundImage from "../../assets/signup_page_leftimg.png"
import * as Yup from "yup";

interface ILoginResponse {
  userName: string,
  isLoggedIn: boolean,
}

const loginValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
})

export default function LoginPage() {
  const dispatch = useDispatch();

  const formikHandler = useFormik({
    initialValues: {
      email:"",
      password:"",
    },
    validationSchema:loginValidationSchema,
    onSubmit: async (values) => {
      try {
        const request = await fetch('http://localhost:5194/api/UserLogin/login', {
          method:"POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(values)
        });
        const response:ILoginResponse = await request.json();
        console.log(response.userName)
        // it works but is isLoggedIn is True even tho its suppose to be false when trying to log in with a user thats not in the database
        dispatch(login(response.userName))
      } catch(error) {
        console.log(error);
      }
    },
  })

  return (
    <div className="w-screen h-screen flex flex-row bg-[#A46766]">
      <div className="lg:w-[580px] lg:h-screen">
        <img src={signUpPageBackgroundImage} alt="" className="w-full h-full"/>
      </div>
      <div className="lg:w-2/3 w-2/3 lg:min-h-screen bg-[#A46766]">
        <div className="flex flex-col justify-center items-center h-screen space-y-10">
          <h1>Hi There!</h1>
          <button>Sign up with google</button>
          <form action="" className="flex flex-col space-y-10" onSubmit={formikHandler.handleSubmit}>
            <input
              type="email" 
              name="email" 
              placeholder="Email" 
              className="lg:w-[345px] h-[54px] bg-white rounded-xl" 
              onChange={formikHandler.handleChange} 
              onBlur={formikHandler.handleBlur} 
              value={formikHandler.values.email}
            />
            {formikHandler.touched.email && formikHandler.errors.email ? (
              <div>{formikHandler.errors.email}</div>
            ) : null}
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              className="lg:w-[345px] h-[54px] bg-white rounded-xl" 
              onChange={formikHandler.handleChange}
              onBlur={formikHandler.handleBlur} 
              value={formikHandler.values.password}
            />
            {formikHandler.touched.password && formikHandler.errors.password ? (
              <div>{formikHandler.errors.password}</div>
            ) : null}

            <button className="rounded-full bg-black lg:w-[230px] lg:h-[54px] lg:text-[32px] font-medium w-auto h-auto text-white text-lg" >Sign up</button>
          </form>

        </div>
      </div>
    </div>
  )
}
