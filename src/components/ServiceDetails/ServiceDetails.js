import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import "./ServiceDetails.css";
import useAuth from '../Hooks/useAuth';
import axios from 'axios';

const ServiceDetails = () => {
    const { register, handleSubmit,reset } = useForm();
    const {user}=useAuth();
    const { detailsId } = useParams()
    const [serviceDetails, setServiceDetails] = useState([]);
    useEffect(() => {
        fetch(`https://floating-sea-13118.herokuapp.com/services/${detailsId}`)
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [])


  const onSubmit = data =>{
    fetch("https://floating-sea-13118.herokuapp.com/orders", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
      .then((res) => res.json())
       .then(result=>{
        console.log(data);
        if(result.insertedId){
            alert('order proceed  successfully')
             reset()
        }
    })
  } 
    return (
        <div className="row mb-5 container w-100 mx-auto ">
            {/* <h4>service details of id: {detailsId}</h4> */}
            <h2>Book Your Order Here</h2>
            <div className="col col-md-6">
                <Card className="w-75">
                    <Card.Img variant="top" src={serviceDetails?.image} />
                    <Card.Body>
                        <Card.Title>{serviceDetails?.name} </Card.Title>
                        <h3>${serviceDetails?.price}</h3>
                        <Card.Text>
                            {serviceDetails?.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className="col col-md-6 booking-form ms-5 ">
            <form  onSubmit={handleSubmit(onSubmit)} className="mt-5 ">
      <input {...register("email", )} defaultValue={user?.email} /> <br />
      <input {...register("name", )}  placeholder="destination name" /> <br />
      <input  {...register("price",)} placeholder="price" /> <br />
      {/* <input {...register("image", )} placeholder="image-link"  defaultValue={serviceDetails?.image} /> <br /> */}
      <input {...register("phone", )} placeholder="phone number" /> <br />
      <input {...register("address", )} placeholder="address" /> <br />
      
      <input className="booking-form-btn" type="submit" />
    </form>
            </div>
        </div>
    );
};

export default ServiceDetails;