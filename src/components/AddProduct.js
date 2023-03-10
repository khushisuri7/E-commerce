import React from 'react';
const AddProduct=()=>{

   
    const[name,setName]=React.useState("");
    const[price,setPrice]=React.useState("");
    const[category,setCategory]=React.useState("");
    const[company,setCompany]=React.useState("");
    const[error,setError]=React.useState("");
    const addProduct=async()=>{
        console.warn(!name);
        if(!name || !category || !company || !price){
            setError(true);
            return false;
        }

        console.warn(name,price,category,company);
        const userId=JSON.parse( localStorage.getItem('userId'));
        console.warn(userId);
        let result=await fetch('http://localhost:5000/add-product',
        {
            method:'post',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':'application/json', 
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            },
    });
    result=await result.json();
    console.warn(result);
}

    return(
        <div className='product'>
        <h1>Add Product</h1>
        <input className='inputBox' type="text" value={name}  onChange={(e)=>setName(e.target.value)} placeholder="Enter Product Name"/>
        {error && !name && <span className='invalid-input'>Enter Valid Name</span>}
        <input className='inputBox' type="text" value={price}  onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Product Price"/>
        {error && !price && <span className='invalid-input'>Enter Valid Price</span>}
        <input className='inputBox' type="text" value={category}  onChange={(e)=>setCategory(e.target.value)} placeholder="Enter Product Category"/>
        {error && !category && <span className='invalid-input'>Enter Valid Category</span>}
        <input className='inputBox' type="text" value={company}  onChange={(e)=>setCompany(e.target.value)} placeholder="Enter Product Company"/>
        {error && !company && <span className='invalid-input'>Enter Valid Company</span>}
        <button onClick={addProduct} className='appButton'>Add Product</button>
        </div>
    )
}

export default AddProduct;