import React, { Component } from 'react';

class Items extends Component {
    render(){
        //console.log(this.props)
        const { items } = this.props;
        const itemList = items.map(item => {
            return (
                <div className="item" key={item.id}>
                    <div>Name: { item.name }</div>
                    <div>Age: { item.age }</div>
                    <div>Belt: { item.belt }</div>
                </div>
            )
        })
        return(
           <div className="item-list">
                { itemList }
           </div>
        )
    }
}

export default Items;