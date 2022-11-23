import React,{Fragment} from 'react';
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {Link,useNavigate} from "react-router-dom";

function Home(){

    let history=useNavigate();

    const handleEdit=(id, name, age)=>{
        
        localStorage.setItem('Id',id);
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
    }

    const handleDelete=(id)=>{
        
        var x=Employees.filter((e)=>e.id===id);
        //console.log(x);
        
        //var index=Employees.map((e)=>e.id).indexOf(id);

        Employees.splice(x.id-1,1);
        //console.log(Employees);
        history('/');

    }

    return(
       <Fragment>
            <div style={{margin:"10rem", textAlign:"center"}}>
                <Table striped  hover size="sm"  >
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length < 0 ? "Data not found" : 
                                Employees.map((item)=>{
                                    return(
                                        <tr>
                                            <td>{item.Name}</td>
                                            <td>{item.Age}</td>
                                            <td>
                                                <Link to={`/edit`}>
                                                <Button onClick={()=>handleEdit(item.id,item.Name,item.Age)}>Edit</Button>
                                                </Link>
                                                &nbsp;  
                                                <Button onClick={()=>handleDelete(item.id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    );
                                })

                        }

                    </tbody>
                </Table>

                <br/>

                <Link className="d-grid gap-2" to="/create">
                    <Button size="lg">Create</Button>
                </Link>
            </div>
            </Fragment>
    )
}

export default Home;