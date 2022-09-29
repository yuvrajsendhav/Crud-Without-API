import React, { useState } from 'react';

const Crud = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [address,setAddress]=useState('');
    const [edit,setEdit]=useState(false);
    const [active,setActive]=useState(null)
    const [users,setUsers]=useState([]);


    const AddUser =(e) =>{
    e.preventDefault();

   const Newuser = {
    name,email,address,
   };
   if(edit){
  let copy= users;
  Object.assign(copy[active],Newuser);
  setUsers([...copy])
  setEdit(false)
  setActive(null)
   }
   else{
    setUsers([...users, Newuser])
   }
   setName("");
   setEmail("");
   setAddress("");
    };
    const UpdateUser = (index) =>{
    const Newuser = users[index];

    setName(Newuser.name);
    setEmail(Newuser.email);
    setAddress(Newuser.address);

    setActive(index);
    setEdit(true);
    };

    const DeleteUser = (Newuser) =>{
   if(window.confirm('Are You Sure you want to Delete ?')){
    let copy = users.filter(item => item !== Newuser );
   setUsers([...copy])
   }

    }

    return (
        <div>
           <h1> Crud Without Database </h1>
           <br></br>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-xs-12 col-sm-10 col-md-8 col-lg-5'>
                        <form onSubmit={AddUser}>
                            <div className='form-group'>
                                <label htmlFor=''>Name</label>
                                <input type="text" className='form-control' onChange={(e)=>setName(e.target.value)} value={name} placeholder='User Name' />
                            </div>
                            <div className='form-group'>
                                <label htmlFor=''>Email</label>
                                <input type="email" className='form-control' onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Email' />
                            </div>
                            <div className='form-group'>
                                <label htmlFor=''>Address</label>
                                <input type="text" className='form-control' onChange={(e)=>setAddress(e.target.value)} value={address} placeholder='Address' />
                            </div>
                            <button className='btn btn-success form-control'>
                                {edit ? "Update" :"Add"}</button>
                        </form>
                    </div>
                </div>
            </div>
           <table className='table table-bordered mt-5'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((Newuser, index)=>{
                        return(
                            <tr>
                                <td>{Newuser.name}</td>
                                <td>{Newuser.email}</td>
                                <td>{Newuser.address}</td>
                                <td>
                                    <button className='btn btn-info' onClick={()=>UpdateUser(index)}>Edit</button>
                                </td>
                                <td>
                                <button className='btn btn-danger'
                                onClick={()=>DeleteUser(Newuser)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
           </table>
        </div>
    );
};

export default Crud;