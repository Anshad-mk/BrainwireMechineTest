import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {
    const { id } = useParams();
  const [userdata, SetuserData] = useState({});
 

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`).then((response) => {
      SetuserData(response.data);
      
    });
  }, [id, userdata]);
    
  return (
    <>
      <div className="w-full h-screen  flex flex-col justify-center items-center">
        <div className=" w-[75%] h-[75%] flex justify-center items-center">
          <form className="w-full max-w-lg">
            <h1 className="font-bold text-5xl items-center justify-center flex mb-11">
              View Details
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
                  className="appearance-none block w-full h-14 bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="firstname"
                  type="text"
                  name="firstname"
                  placeholder="Name"
                  disabled
                  value={userdata.first_name}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  disabled
                  className="appearance-none block w-full h-14 bg-gray-200 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-last-name"
                  type="text"
                  name="lastname"
                  placeholder="lastname"
                  value={userdata.last_name}
                />
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
                  disabled
                  className="appearance-none block w-full h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="date"
                  name="dob"
                  placeholder="dob"
                  value={userdata.dob}
                />
              </div>
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
                  disabled
                  className="appearance-none block w-full h-14 bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="text"
                  name="address"
                  placeholder="address"
                  value={userdata.address}
                />
              </div>
            </div>
          </form>
          
        </div>
        <Link className="bg-blue-500 p-2 rounded-lg " to={"/"}>Home</Link>
      </div>
    </>
  );
};

export default Profile;
