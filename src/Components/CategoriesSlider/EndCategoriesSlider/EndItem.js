/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { getEndSlug } from '../../../Utils/getSlug';

export default function EndItem({ item }) {
  const imageUrl = item.image;
  const slug = getEndSlug(item);
  return (
    <Link to={slug}>
      <div className="item">
        <img src={imageUrl} alt="" />
        <p className="cat_title">{item.name || item.subCat} </p>
      </div>
    </Link>
  );
}
