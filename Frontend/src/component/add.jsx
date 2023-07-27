import axios from "axios";
import { useFormik } from "formik";
import {toast,ToastContainer} from "react-toastify"
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate()


  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      dob: "",
      address: "",
    },
    validate: (values) => {
      const errors = {};
    
      if (!values.firstname.trim()) {
        errors.firstname = "Name is required.";
      } else if (values.firstname.length < 2) {
        errors.firstname = "Name should be at least 2 characters long.";
      }
    
      if (!values.lastname.trim()) {
        errors.lastname = "Last Name is required.";
      } else if (values.lastname.length < 2) {
        errors.lastname = "Last Name should be at least 2 characters long.";
      }
    
      if (!values.dob) {
        errors.dob = "Date of Birth is required.";
      }
    
      if (!values.address.trim()) {
        errors.address = "Address is required.";
      } else if (values.address.length < 5) {
        errors.address = "Address should be at least 5 characters long.";
      }
    
      return errors;
    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await axios.post(
          "http://localhost:3000/users",
          {
            ...values,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        if (response.data.message) {
          toast.success("success",{
            position:"bottom-right"
          })
          setTimeout(()=>{
            navigate('/')
        },1000)
        } else {
          console.log("Something went wrong");
        }
      } catch (error) {
        console.log(error, "Error from ClientAxios");
      }
    },
  });

  return (
    <>
      <div className="w-full h-screen  flex justify-center items-center">
        <div className=" w-[75%] h-[75%] flex justify-center items-center">
          <form
            className="w-full max-w-lg"
            onSubmit={formik.handleSubmit}
          >
            <h1 className="font-bold text-5xl items-center justify-center flex mb-11">
              ADD 
            </h1>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-bleck text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  {...formik.getFieldProps("firstname")}
                  className="appearance-none block w-full h-14 bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  name="firstname"
                  placeholder="Name"
                />
                {formik.touched.firstname && formik.errors.firstname ? (
                  <div className="text-red-500">{formik.errors.firstname}</div>
                ) : null}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  {...formik.getFieldProps("lastname")}
                  className="appearance-none block w-full h-14 bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-last-name"
                  type="text"
                  name="lastname"
                  placeholder="lastname"
                />
                {formik.touched.lastname && formik.errors.lastname ? (
                  <div className="text-red-500">
                    {formik.errors.lastname}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  DOB
                </label>
                <input
                  {...formik.getFieldProps("dob")}
                  className="appearance-none block w-full h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="date"
                  name="dob"
                  placeholder="dob"
                />
              </div>
              {formik.touched.dob && formik.errors.dob ? (
                <div className="text-red-500">{formik.errors.dob}</div>
              ) : null}
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Address
                </label>
                <input
                  {...formik.getFieldProps("address")}
                  className="appearance-none block w-full h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="text"
                  name="address"
                  placeholder="address"
                />
              </div>
              {formik.touched.address && formik.errors.address ? (
                <div className="text-red-500">{formik.errors.address}</div>
              ) : null}
            </div>
            <div className="w-full px-3 mt-9 items-end flex justify-end">
              <button
                className="text-white bg-[#00C6D7]  h-14 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2   w-full"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
};

export default Add;