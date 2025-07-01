import React from 'react'

const ListComponent = ({ items, renderItem, emptyMessage = "No items to display." }) => {
      if (items.length === 0) {
        return <p>{emptyMessage}</p>;
      }
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {renderItem(item)}
            </li>
          ))}
        </ul>
      );
    };


export default ListComponent;
