import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [manageOrders, setManageOrders] = useState([]);
  
    useEffect(() => {
        fetch("https://floating-sea-13118.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => setManageOrders(data))
    }, [])
          

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
                const remainigServices= manageOrders.filter(mg=>mg._id!==id)
                setManageOrders(remainigServices)
            }
        })
    }
    return (
        <div>
            <h3>Manage All Orders</h3>
        {
            manageOrders.map(mg=><Table striped bordered hover className="table-danger" >
                <thead>
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
                <tbody>
                  <tr>
                    {/* <td>{mt._id}</td> */}
                    <td>{mg.email}</td>
                    <td>{mg.name}</td>
                    <td>{mg.price}</td>
                    <td>{mg.phone}</td>
                    <td>{mg.address}</td>
                    <td><button onClick={()=>handelDelete(mg._id)} type="button" class="btn btn-danger btn-sm">Delete</button></td>
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

export default ManageAllOrders;