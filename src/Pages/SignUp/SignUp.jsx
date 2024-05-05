import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const SignUp = () => {
    const {userSignUp,updateUserProfile } = useContext(AuthContext)
    
    const location = useLocation();
    const navigate= useNavigate()
    const [pass,setPass] = useState("")
    
    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
      const obj ={
        Fname:  form.Fname.value,
        Lname: form.Lname.value,
        email: form.email.value,
        address : form.address.value,
        city: form.city.value,
        state:form.state.value,
        zip: form.zip.value,
        username:form.username.value,
        bio:form.bio.value,
        profile: form.profile.value,
        cover: form.cover.value,
        password: form.password.value,
        gender: form.gender.value,
        phone: form.phone.value

      }
        console.log(obj);
    
        if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(obj.password)) {
            setPass("Minimum six characters, at least one letter, one number and one special character");
            return; 
        }
    
       
        setPass("");
      
        userSignUp(obj.email, obj.password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : "/profile")
                fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                form.reset();
            }
        });
    
                // updateUserProfile(obj.username, obj.profile)
                //     .then(result => {
                //         console.log(result.user);
                        
                //         return;
                //     })
                //     .catch(err => {
                //         console.log(err);
                //     });
    
            })
            // .catch(err => {
            //     console.error(err);
            // });

      



    };

    return (
        <section className="p-3 text-gray-50">
            <h2 className='text-black text-center text-xl'>Sign Up</h2>
            <h2 className='text-black text-center'>Already have an account? please <Link className="font-bold text-blue-600" to='/login'>login</Link> </h2>
	<form  onSubmit={handleSignUp} className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Personal Information</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">First name</label>
					<input id="firstname" name='Fname' type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">Last name</label>
					<input id="lastname" name='Lname' type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Email</label>
					<input id="email" name='email' type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Phone</label>
					<input id="phone" name='phone' type="number" placeholder="Mobile Number" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full">
					<label className="text-sm">Address</label>
					<input id="address" name='address' type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label className="text-sm">City</label>
					<input id="city" name='city' type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label className="text-sm">State / Province</label>
					<input id="state" name='state' type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">ZIP / Postal</label>
					<input id="zip" name='zip' type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
    <fieldset>
        <legend className="text-sm">Gender : </legend>
        <div>
            <input type="radio" id="male" name="gender" value="Male" />
            <label htmlFor="male">Male</label>
        </div>
        <div>
            <input type="radio" id="female" name="gender" value="Female" />
            <label htmlFor="female">Female</label>
        </div>
    </fieldset>
</div>
                <div className="col-span-full sm:col-span-3">
					<label className="text-sm">Password</label>
					<input  name='password' type="password" placeholder="Password" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
				</div>
			</div>
		</fieldset>
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Profile</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">Username</label>
					<input id="username" name='username' type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
				</div>
				<div className="col-span-full">
					<label className="text-sm">Bio</label>
					<textarea id="bio" name='bio' placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"></textarea>
				</div>
				<div className="col-span-full">
					<label  className="text-sm">Upload profile Photo : </label>
					<input type="file" name="profile" id="profile" />
				</div>
				<div className="col-span-full">
					<label  className="text-sm">Upload cover Photo : </label>
					<input type="file" name="cover" id="cover" />
				</div>
               
			</div>
            <div className=''>
            <button type="submit" className="px-8 font-semibold rounded text-white border border-white">Submit</button>
            </div>
		</fieldset>
       
	</form>
</section>
    );
};

export default SignUp;