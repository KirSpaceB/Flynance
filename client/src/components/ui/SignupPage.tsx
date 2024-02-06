import signUpPageBackgroundImage from "../../assets/signup_page_leftimg.png"
import { useFormik } from "formik";
import * as Yup from "yup";

// Yup validation schema
const validationSchema = Yup.object({
  userName: Yup.string().required('Required'),
  userEmail: Yup.string().email('Invalid email address').required('Required'),
  userPassword: Yup.string().required('Required'),
});

export default function SignupPage() {

  // Formik hook for form handling
  const formikHandler = useFormik({
    initialValues: {
      userName: "",
      userEmail: "",
      userPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log("Sending to database these values:", values);

      try {
        const response = await fetch('http://localhost:5194/UserSignUp', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(values)
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
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
              type="text" 
              name="userName" 
              placeholder="Name" 
              className="lg:w-[345px] h-[54px] bg-white rounded-xl" 
              onChange={formikHandler.handleChange} 
              onBlur={formikHandler.handleBlur} 
              value={formikHandler.values.userName}
            />
            {formikHandler.touched.userName && formikHandler.errors.userName ? (
              <div>{formikHandler.errors.userName}</div>
            ) : null}
            <input 
              type="text" 
              name="userEmail" 
              placeholder="Email" 
              className="lg:w-[345px] h-[54px] bg-white rounded-xl" 
              onChange={formikHandler.handleChange}
              onBlur={formikHandler.handleBlur} 
              value={formikHandler.values.userEmail}
            />
            {formikHandler.touched.userName && formikHandler.errors.userEmail ? (
              <div>{formikHandler.errors.userEmail}</div>
            ) : null}
            <input 
              type="password" 
              name="userPassword" 
              placeholder="Password" 
              className="lg:w-[345px] h-[54px] bg-white rounded-xl" 
              onChange={formikHandler.handleChange}
              onBlur={formikHandler.handleBlur} 
              value={formikHandler.values.userPassword}
            />
            {formikHandler.touched.userName && formikHandler.errors.userPassword ? (
              <div>{formikHandler.errors.userPassword}</div>
            ) : null}
              <button className="rounded-full bg-black lg:w-[230px] lg:h-[54px] lg:text-[32px] font-medium w-auto h-auto text-white text-lg" >Sign up</button>
          </form>

        </div>
      </div>
    </div>
  )
}
