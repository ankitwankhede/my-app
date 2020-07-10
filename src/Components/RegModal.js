import React,{Component} from 'react';
import {Modal,Button,Form} from 'react-bootstrap';
//,Row,Col
export class RegModal extends Component{
    constructor(props){
        super(props);
    }

    handleSubmit(event){
      event.preventDefault();
      const POST_URL='http://localhost:8080/Api/webapi/myresource/register/user/';
      fetch(POST_URL,{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
          fname:event.target.fname.value,
          lname:event.target.lname.value
        })
      })
      .then(res=>res.json())
      .then((result)=>{
        alert(result);
      },
      (error)=>{
        alert('Failed')
      })
      alert(event.target.fname.value);
    }

    render(){
        return(<Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            User Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="container">  
            {/* <Row>
              <col sm={6}> */}
               <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="fname">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text" 
                        name="firstName" 
                        required 
                      />                  
                      </Form.Group>

                      <Form.Group controlId="lname">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text" 
                        name="lastname" 
                        required 
                      />                  
                      </Form.Group>

                      <Form.Group >
                        <Button variant="primary" type="submit"> Submit</Button>
                      </Form.Group>
                  </Form> 
              {/* </col>
            </Row> */}
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>)
    }
}