import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    const [tabledata,setTabledata]=useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        axios.get('http://localhost:3000/users').then((response)=>{
            setTabledata(response.data)
        })
    },[tabledata])

    const EditHandilor = (value)=>{
navigate(`/edit/${value.id}`)
    }

    const DeleteHandilor = (value)=>{
axios.delete(`http://localhost:3000/users/${value.id}`).then(()=>{

generatesuccess("delete Successfull")

})

const generatesuccess = (msg)=>{
    toast.success(msg,{

        position:"bottom-right"
    })
}
    }

  return (
    <>
    <div className="container mx-auto p-4 flex flex-col">
        
      <table className="table-auto w-full">
        {/* Table Header */}
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Date of Birth</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
        {tabledata.map((value,index)=>{
            return <tr key={index}>
            <td className="border px-4 py-2 text-center">{value.id}</td>
            <td className="border px-4 py-2 text-center">{value.first_name}</td>
            <td className="border px-4 py-2 text-center">{value.last_name}</td>
            <td className="border px-4 py-2 text-center">{value.dob}</td>
            <td className="border px-4 py-2 text-center">{value.address}</td>
            <td className="border px-4 py-2 text-center"><button className="btn bg-blue-900 text-white px-4 rounded-lg" onClick={()=>{
                EditHandilor(value)
            }}>Edit</button> <button className="btn bg-red-900 text-white px-4 rounded-lg" onClick={()=>{
                DeleteHandilor(value)
            }}>Delete</button> <button className="btn bg-yellow-900 text-white px-4 rounded-lg" onClick={()=>{
               navigate(`/profile/${value.id}`)
            }}>View</button></td>
          </tr>
        })}
        </tbody>
      </table>
      <ToastContainer></ToastContainer>
        <Link className=" bg-green-900 p-2 mt-4 text-white text-center rounded-lg w-full" to={"/add"} >Add +</Link>
      
    </div>
    
    

    </>
  );
};

export default Home;
