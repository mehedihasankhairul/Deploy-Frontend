/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { getMidSlug } from '../Utils/getSlug';

export default function MidItem({ item }) {
  const imageUrl = item.image;

  const url = getMidSlug(item);
  return (
    <Link to={url}>
      <div className="item">
        <img src={imageUrl} alt="" />
        <p className="cat_title">{item.name || item.subCat} </p>
      </div>
    </Link>
  );
}
