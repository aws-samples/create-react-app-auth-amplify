import React from 'react';

import EventItem from './MareItem/MareItem';
import './MareList.css';

const mareList = props => {
  const mares = props.mares.map(mare => {
    return (
      <MareItem
        key={mare._id}
        mareId={mare._id}
        name={mare.title}
        camera={mare.price}
        dueDate={mare.date}
        onDetail={props.onViewDetail}
      />
    );
  });

  return <ul className="mare__list">{mares}</ul>;
};

export default mareList;