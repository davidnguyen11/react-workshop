import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

function ListItem(props) {
  const { dataSource, onItemClick, activeId } = props;
  return (
    <div>
      {
        dataSource.map((item, index) => {
          let isActive = activeId === item.id;
          return (
            <Item
              key={index}
              isActive={isActive}
              title={item.title}
              onClick={() => onItemClick(item)}
            />
          );
        })
      }
    </div>
  );
}

ListItem.propTypes = {
  dataSource: PropTypes.array.isRequired,
  onItemClick: PropTypes.func,
  activeId: PropTypes.number,
};

export default ListItem;
