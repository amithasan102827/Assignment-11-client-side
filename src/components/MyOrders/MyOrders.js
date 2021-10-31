import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const {user}=useAuth();
    const [orders, setOrders] = useState([]);
    
  
    useEffect(() => {
        fetch("https://floating-sea-13118.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const matchOrders= orders.filter(order=> order.email===user.email)
    const handelDelete=(id)=>{
        const url=`https://floating-sea-13118.herokuapp.com/orders/${id}`;
        fetch(url,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount){
                alert('deleted')
                const remainigServices= matchOrders.filter(mt=>mt._id!==id)
                setOrders(remainigServices)
            }
        })
    }



    return (
        <div>
            <h3 className="" >My Orders</h3>
           {
               matchOrders.map(mt=> <Table striped bordered hover className="table table-success table-striped " >
               <thead >
                 <tr>
                   {/* <th>#</th> */}
                   <th>Email</th>
                   <th>Order Name</th>
                   <th>Price</th>
                   <th>Phone</th>
                   <th>Address</th>
                   <th>Action</th>
                 </tr>
               </thead>
               <tbody >
                 <tr>
                   {/* <td>{mt._id}</td> */}
                   <td>{mt.email}</td>
                   <td>{mt.name}</td>
                   <td>{mt.price}</td>
                   <td>{mt.phone}</td>
                   <td>{mt.address}</td>
                   <td><button onClick={()=>handelDelete(mt._id)} type="button" class="btn btn-danger btn-sm">Delete</button></td>
                 </tr>
                 {/* <tr>
                   <td>2</td>
                   <td>Jacob</td>
                   <td>Thornton</td>
                   <td>@fat</td>
                 </tr>
                 <tr>
                   <td>3</td>
                   <td colSpan="2">Larry the Bird</td>
                   <td>@twitter</td>
                 </tr> */}
               </tbody>
             </Table>)
           }
         
        </div>
    );
};

export default MyOrders;