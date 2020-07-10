import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {RegModal} from './RegModal';

//import axios from 'axios';
export class Register extends Component{

    constructor(props){
        super(props);
        this.state={rdata:[],addModalshow:false}
    }

    componentDidMount(){
        this.refreshList();
    }
refreshList(){
    // this.setState({
    //     rdata:[
    //         {"Name":"Ankit","Surname":"wankhede"},
    //         {"Name":"Abhishek","Surname":"wankhede"},
    //         {"Name":"Apeksha","Surname":"wankhede"}
    //     ]
    // })
  
//fetch

    const GET_USERS='http://localhost:8080/Api/webapi/myresource/search/users';
   //  const url='https://reqres.in/api/users?page=2';
   //  const url='http://localhost:8080/Api/webapi/myresource/testing';
 //  const url='https://jsonplaceholder.typicode.com/posts';  
  //    const url='http://dummy.restapiexample.com/api/v1/employees';
    fetch(GET_USERS) 
   .then((response)=>response.json())
    .then((data)=>{
        this.setState({rdata:data});
       // console.log(data);
    });

//axios
    // axios.get(url)
    // .then((response)=>{
    //     console.log(response);
    // });
}

componentDidUpdate(){
    this.refreshList();
}

    render(){
        const {rdata}=this.state;
        let addModalclose=()=>this.setState({addModalshow:false});
        return(
        <div>
            <Table className="mt-4" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>first name</th>
                        <th>last name</th>
                    </tr>
                </thead>
                <tbody>
                    {rdata.map(rd =>
                        <tr>
                            <td>{rd.fname}</td>
                            <td>{rd.lname}</td>
                        </tr>
                    )}
                </tbody>
            </Table>

            <ButtonToolbar>
            <Button variant="primary" onClick={()=>this.setState({addModalshow:true})} >
                    Register
            </Button>
            <RegModal show={this.state.addModalshow} onHide={addModalclose}/>
            </ButtonToolbar>
        </div>
        )
  
    }
}