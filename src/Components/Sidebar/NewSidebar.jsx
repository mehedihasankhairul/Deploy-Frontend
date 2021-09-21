import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getEndSlug } from '../../Utils/getSlug';
import { Link } from 'react-router-dom';
import {
  GiFruitBowl,
  GiFruitTree,
  GiOfficeChair,
  GiVacuumCleaner,
} from 'react-icons/gi';
import { FaBaby } from 'react-icons/fa';
import { BiFace } from 'react-icons/bi';
import { RiMentalHealthFill } from 'react-icons/ri';
import { GoPlus } from 'react-icons/go';
import { HiMinus } from 'react-icons/hi';

export default function NewSidebar(props) {
  const icons = [
    <GiFruitBowl key="0" />,
    <GiFruitTree key="2" />,
    <GiOfficeChair key="3" />,
    <FaBaby key="4" />,
    <RiMentalHealthFill key="5" />,
    <GiVacuumCleaner key="6" />,
    <BiFace key="7" />,
  ];
  const { topCategory, midCategory, endCategory } = useSelector(
    (state) => state.category
  );

  const [selectedCats, setSelectedCats] = useState({});
  const [open, setOpen] = useState(false);
  const handleSelection = (id) => {
    if (open && selectedCats?.topCat?.id === id) {
      setSelectedCats({});
      setOpen(!open);
    } else {
      const topCat = topCategory.find((item) => item.id === id);
      const midCategories = midCategory.filter(
        (item) => item.tcatid === topCat.id
      );
      setSelectedCats({ topCat, midCategories });
      setOpen(true);
    }
  };

  const getEndCats = (mid) => {
    return endCategory.filter((item) => item.midcatid === mid);
  };

  const handleLink = async (item) => {
    const url = await getEndSlug(item);
  };

  return (
    <>
      <div className="main_cat">
        {topCategory.map((tcat, index) => (
          <li
            className={
              selectedCats.topCat?.name === tcat.name ? 'active' : null
            }
            key={tcat.id}
            onClick={() => handleSelection(tcat.id)}
          >
            {icons[index]}
            {tcat.name}
            {selectedCats.topCat?.name === tcat.name ? (
              <HiMinus />
            ) : (
              <GoPlus size={16} />
            )}
          </li>
        ))}
      </div>
      {open && (
        <div
          className="sidemenu"
          //  onClick={() => setOpen(false)}
        >
          <div>
            {selectedCats.midCategories.map((midItem) => (
              <div key={midItem.id} className="midcats">
                <h5 className="cat_title" key={midItem.id}>
                  {midItem.name}
                </h5>
                <span />
                <span />
                <span />
                {getEndCats(midItem.id).map((endItem) => (
                  <Link key={endItem.id} to={getEndSlug(endItem)}>
                    <li key={endItem.id} onClick={() => handleLink(endItem)}>
                      {endItem.name}
                    </li>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
