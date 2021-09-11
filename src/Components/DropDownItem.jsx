import React from 'react';
import { RiArrowDownSLine, RiArrowRightSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { getMidCategories } from '../Utils/getCats';
import { getMidSlug } from '../Utils/getSlug';

export default function DropDownItem({ item, active, setActiveMenu }) {
  const midCategories = getMidCategories(item.tCatId);
  const handleMenu = () => {
    if (!active) {
      setActiveMenu(item.index);
    } else {
      setActiveMenu(null);
    }
  };
  return (
    <div onClick={handleMenu} className="drop_menu_item">
      <p>
        {item.name}
        <span>{active ? <RiArrowDownSLine /> : <RiArrowRightSLine />}</span>
      </p>
      {active &&
        midCategories.map((cat) => (
          <Link key={cat.key} to={getMidSlug(cat)}>
            <li>{cat.name}</li>
          </Link>
        ))}
    </div>
  );
}
