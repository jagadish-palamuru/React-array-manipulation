import React,{useId, useState} from 'react';
import {Button,Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {v4 as uuid} from 'uuid';
import {Link,useNavigate} from 'react-router-dom';

function Create(){

    const[name,setName]=useState("");
    const[age,setAge]=useState();

    let history=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const uid=uuid();

        Employees.push({id:uid,Name:name,Age:age});

        history('/');

    }
    
    return <div>
        <form style={{margin:"10em"}}>
            <input type="text" placeholder="Enter Name" required onChange={(e)=>{setName(e.target.value)}} />
            <br/><br/>
            <input type="text" placeholder="Enter Age" required onChange={(e)=>{setAge(e.target.value)}} />
            <br/><br/>
            <Button onClick={(e=>{handleSubmit(e)})}  type="submit">Submit</Button>
        </form>
    </div>
}

export default Create;