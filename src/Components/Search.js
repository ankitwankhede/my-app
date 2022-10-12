import React, { Component } from 'react';
import { connect } from 'react-redux';
import { show } from '../redux/actions/myActions';

class Search extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {
        this.props.showAll()
    }
    render() {
        return (
            <h4>SEARCH</h4>
        )
    }
}
const mapStateToProp = state => {
    return {}
}

const mapDispatchToProp = dispatch => {
    return {
        showAll: () => dispatch(show())
    }
}
export default connect(mapStateToProp, mapDispatchToProp)(Search);