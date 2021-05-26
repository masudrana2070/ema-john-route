import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../App';
import '../Shipment/Shipment.css'
const Shipment = () => {
    const [loggedInUser,setLoggedInUser]=useContext(userContext)
    console.log("userinfo",loggedInUser)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="Enter Your Name"/> <br /> <br />
      {errors.name && <span className="error">This field is required</span>}

      <input name="email" defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="Enter Your Email"/> <br /> <br />
      {errors.email && <span className="error">This field is required</span>}

      <input name="phone" {...register("phone", { required: true })} placeholder="Enter Your phone"/> <br /> <br />
      {errors.phone && <span className="error">This field is required</span>} 

      <input name="address" {...register("address", { required: true })} placeholder="Enter Your Address"/> <br /> <br />
      {errors.address && <span className="error">This field is required</span>} <br />
      
      <input type="submit" />
    </form>
    );
};

export default Shipment;