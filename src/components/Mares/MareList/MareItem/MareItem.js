  
import React from 'react';

import './MareItem.css';

const mareItem = props => (
  <li key={props.mareId} className="mares__list-item">
    <div>
      <h1>{props.name}</h1>
      <h2>
        ${props.camera} - {props.camera}
      </h2>
    </div>
    <div>
        <button className="btn" onClick={props.onDetail.bind(this, props.mareId)}>
          View Details
        </button>
    </div>
  </li>
);

export default mareItem;