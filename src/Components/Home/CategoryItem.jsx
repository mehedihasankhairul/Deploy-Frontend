/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

export default function CategoryItem({ item }) {
  const imageUrl = 'https://deploy.com.bd/assets/uploads/' + item.image;

  const slug = item.name
    ? item.name.replaceAll(' ', '-').toLowerCase()
    : item.subCat.replaceAll(' ', '-').toLowerCase();
  const location = useLocation();
  const url = item.slug || location.pathname + '/' + slug;
  return (
    <Link to={url}>
      <div className="item">
        <img src={imageUrl} alt="" />
        <h4>{item.name || item.subCat} </h4>
      </div>
    </Link>
  );
}
