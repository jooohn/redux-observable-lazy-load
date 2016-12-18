import React from 'react';
const ItemIndex = ({ itemIndex }) => (
  <div className="collection">
    {itemIndex.map(key => {
      const hash = `#item-${key}`;
      return <a key={key}
                href={hash}
                className="collection-item">{key}</a>;
    })}
  </div>
);
export default ItemIndex;
