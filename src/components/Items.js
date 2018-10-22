import React from 'react';

const Items = ({ items, deleteItem }) => {
    //console.log(this.props)
    //const { items } = props;
    const itemList = items.map(item => {
        return (
            <div className="item" key={item.id}>
                <div>Name: { item.name }</div>
                <div>Age: { item.age }</div>
                <div>Belt: { item.belt }</div>
                <button onClick={ () => { deleteItem(item.id) } }>Delete</button>
            </div>
        )
    })
    return(
        <div className="item-list">
            { itemList }
        </div>
    )
}

export default Items;