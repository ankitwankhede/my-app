import React from 'react';
import { connect } from 'react-redux';
import { add, show } from '../redux/actions/myActions';

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
        this.props.addNew({name:this.state.name,surname:this.state.surnanme})
        this.props.showAll();
    }
    handleChange(event){
        // console.log(`change`)
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
        addNew:val=>dispatch(add(val)),
        showAll:()=>dispatch(show())
    }
}

export default connect(mapStateToProp,mapDispatchToProp)(Register);