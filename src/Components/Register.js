import React from 'react';
import { connect } from 'react-redux';

//import axios from 'axios';
class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            surnanme:'',
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        console.log(`submit event  ${this.state.name}  ${this.state.surnanme}`)
        event.preventDefault();
    }
    handleChange(event){
        // console.log(`change`)
        console.log(`value changed  ${ this.state.name } `);
        this.setState({name:event.target.value})
    }
    
    render(){
        return(
      <form onSubmit={this.handleSubmit}>
          <label >
              Name :
              <input type='text' value={this.state.name} onChange={this.handleChange}/>
          </label>
          <label >
              Surname :
              <input type='text' value={this.state.surnanme} onChange={e=>this.setState({surnanme:e.target.value})}/>
          </label>
          <input type='submit' value='submit'  />
      </form>
      );
    }
}

const mapStateToProp=state=>{
    return {}
}
const mapDispatchToProp=dispatch=>{
    return {
        showAll:()=>dispatch()
    }
}

export default connect(mapStateToProp,mapDispatchToProp)(Register);