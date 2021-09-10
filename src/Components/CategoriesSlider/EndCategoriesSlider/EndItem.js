/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getEndSlug } from '../../../Utils/getSlug';

export default function EndItem({ item }) {
  const imageUrl = 'https://deploy.com.bd/assets/uploads/' + item.image;
  // console.log(url);
  const slug = getEndSlug(item);
  return (
    <Link to={slug}>
      <div className="item">
        <img src={imageUrl} alt="" />
        <h4>{item.name || item.subCat} </h4>
      </div>
    </Link>
  );
}
