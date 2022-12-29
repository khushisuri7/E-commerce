import React from 'react';
const AddProduct=()=>{
    const[name,setName]=React.useState("");
    const[price,setPrice]=React.useState("");
    const[category,setCategory]=React.useState("");
    const[company,setCompany]=React.useState("");
    const addProduct=async()=>{
        console.warn(name,price,category,company);
        const userId=JSON.parse( localStorage.getItem('user'))._id;
        console.warn(userId._id);
        let result=await fetch('http://localhost:5000/add-product',
        {
            method:'post',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':'application/json'
            },
    });
    result=await result.json();
    console.warn(result);
}

    return(
        <div className='product'>
        <h1>Add Product</h1>
        <input className='inputBox' type="text" value={name}  onChange={(e)=>setName(e.target.value)} placeholder="Enter Product Name"/>
        <input className='inputBox' type="text" value={price}  onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Product Price"/>
        <input className='inputBox' type="text" value={category}  onChange={(e)=>setCategory(e.target.value)} placeholder="Enter Product Catehory"/>
        <input className='inputBox' type="text" value={company}  onChange={(e)=>setCompany(e.target.value)} placeholder="Enter Product Company"/>
        <button onClick={addProduct} className='appButton'>Add Product</button>
        </div>
    )
}

export default AddProduct;