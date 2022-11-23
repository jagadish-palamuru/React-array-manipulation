import React,{useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';

import {useNavigate} from 'react-router-dom';

function Edit(){

    const[name,setName]=useState("");
    const[age,setAge]=useState();
    const[id,setId]=useState();

    let history=useNavigate();

    var index=Employees.map(function(e){
        return e.id}).indexOf(id);
    
    
    const handleUpdate=(e)=>{
        e.preventDefault();

        let a=Employees[index];
        a.Name=name;
        a.Age=age;

        history('/'); 
    }

    useEffect(()=>{
        console.log("Effect.....")
        setName(localStorage.getItem('Name'));
        setAge(localStorage.getItem('Age'));
        setId(localStorage.getItem('Id'));

    },[]);
    
    return<div>
        <form style={{margin:"10em"}}>
            <input type="text" placeholder="Enter Name" value={name} required onChange={(e)=>{setName(e.target.value)}} />
            <br/><br/>
            <input type="text" placeholder="Enter Age" value={age} required onChange={(e)=>{setAge(e.target.value)}} />
            <br/><br/>
            <Button onClick={(e=>{handleUpdate(e)})}  type="submit">Update</Button>
        </form>
    </div>;

}

export default Edit;