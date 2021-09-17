/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryItem({ item }) {
  const imageUrl = item.image;

  const slug = item.name.replaceAll(' ', '-').toLowerCase();
  return (
    <Link to={'/' + slug}>
      <div className="item">
        <img src={imageUrl} alt="" />
        <h4>{item.name || item.subCat} </h4>
      </div>
    </Link>
  );
}
