/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function EndItem({ item }) {
  const imageUrl = 'https://deploy.com.bd/assets/uploads/' + item.image;
  const topCats = useSelector((state) => state.category.topCategory);
  const midCats = useSelector((state) => state.category.midCategory);
  const itemTCat = topCats.find((cat) => cat.tCatId === item.tcatId);
  const itemMCat = midCats.find((cat) => cat.id === item.mcatId);
  console.log(itemTCat.name, itemMCat.name);

  const textToSlug = (str) => str.replaceAll(' ', '-').toLowerCase();

  // const slug = item.name
  //   ? item.name.replaceAll(' ', '-').toLowerCase()
  //   : item.subCat.replaceAll(' ', '-').toLowerCase();
  // console.log(slug);
  // const location = useLocation();
  const url =
    textToSlug(itemTCat.name) +
    '/' +
    textToSlug(itemMCat.name) +
    '/' +
    textToSlug(item.name);
  console.log(url);
  return (
    <Link to={url}>
      <div className="item">
        <img src={imageUrl} alt="" />
        <h4>{item.name || item.subCat} </h4>
      </div>
    </Link>
  );
}
