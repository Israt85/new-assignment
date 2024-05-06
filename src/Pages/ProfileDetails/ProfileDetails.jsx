import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";


const ProfileDetails = () => {
    const [users,setUsers]= useState(null)
    const {user,userLogOut}=useContext(AuthContext) 
    const navigate = useNavigate()

    // getting data from database
    useEffect(()=>{
        fetch(`https://intership-assignment-server.vercel.app/user?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setUsers(data)
        })
    },[user?.email])
    console.log(users);


    // Logout from the page
    const handleLogout = () => {
        userLogOut()
          .then(result => {

            // after logout it'll direct to login page
            navigate('/login');
            console.log(result.user);
            
          })
          .catch(err => {
            console.log(err);
          });
      };      


    return (
       <div>
        {
        users?.map(user=> <div key={user?._id} className="mt-4 mx-6 ">
            <img className="w-full mx-auto hover:scale-90 h-72" src={user?.cover}alt="" />
        <div className=" flex flex-col w-[max-content] mx-auto justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:dark:bg-gray-900 dark:dark:text-gray-100">
<div className="w-full">
<img src={user?.profile} alt="" className="w-60 hover:scale-125 h-auto mx-auto rounded-full dark:dark:bg-gray-500 aspect-square" />
</div>
<div className="space-y-4 text-center divide-y divide-gray-700">
    <div className="my-2 space-y-1">
        <h2 className="text-xl font-semibold sm:text-2xl">{user?.Fname} {user?.Lname} </h2>
        <p className="px-5 text-xs sm:text-base dark:dark:text-gray-400">{user?.username}</p>
        <p>{user?.gender}</p>
    </div>
    <div className="flex justify-center pt-2 space-x-4 align-center">
        <h2>{user?.city} | {user?.address} | {user?.state} | {user?.zip}</h2>
    </div>
    <div>
<h2>{user?.email}</h2>
<h2>{user?.phone}</h2>
    </div>
    <div>{user?.bio}</div>
</div>
</div>
    </div>)
       }
<div className="w-[max-content] mx-auto my-2">
<button onClick={handleLogout} className="btn-outline border-2 p-3 rounded-lg">Logout</button>
</div>

       </div>
    );
};

export default ProfileDetails;