import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewService.css';

const AddNewService = () => {
    const { register, handleSubmit,reset,  formState: { errors } } = useForm();
const onSubmit = data =>{
    
    fetch("https://floating-sea-13118.herokuapp.com/services", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
      .then(res => res.json())
       .then(result=>{
        console.log(data);
        if(result.insertedId){
            alert(' new service added successfully')
             reset()
        }
    })
}
     


    return (
        <div className="mb-5">
            <h2>Add a new service here</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 add-service ">
                {/* <input {...register("email", )} defaultValue={user?.email} /> <br /> */}
                <input {...register("name",)} placeholder="destination name" /> <br />
                <input  {...register("price",)} placeholder="price" /> <br />
                <input {...register("image",)} placeholder="image-link" /> <br />

                <textarea {...register("description",)} placeholder="address" /> <br />

                <input className="booking-form-btn" type="submit" />
            </form>
        </div>
    );
};

export default AddNewService;