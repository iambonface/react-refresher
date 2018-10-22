import React, { Component } from 'react';

class Items extends Component {
    render(){
        //console.log(this.props)
        const { name, age, belt } = this.props;
        return(
            <div className="Items">
                <div>Name: { name }</div>
                <div>Age: { age }</div>
                <div>Belt: { belt }</div>
            </div>

        )
    }
}

export default Items;