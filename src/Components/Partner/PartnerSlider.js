import React, { useRef } from 'react';
import Carousel from 'react-elastic-carousel';
import MediaQuery from 'react-responsive';

import img1 from '../../assets/partnerlogo/1.webp';

const slides = [
  '1.webp',
  '10.webp',
  '11.webp',
  '12.webp',
  '13.webp',
  '14.webp',
  '15.webp',
  '16.webp',
  '17.webp',
  '18.webp',
  '19.webp',
  '2.webp',
  '20.webp',
  '21.webp',
  '22.webp',
  '23.webp',
  '24.webp',
  '25.webp',
  '26.webp',
  '27.webp',
  '28.webp',
  '29.webp',
  '3.webp',
  '30.webp',
  '31.webp',
  '32.webp',
  '33.webp',
  '34.webp',
  '35.webp',
  '36.webp',
  '37.webp',
  '38.webp',
  '39.webp',
  '4.webp',
  '40.webp',
  '41.webp',
  '42.webp',
  '43.webp',
  '44.webp',
  '45.webp',
  '46.webp',
  '47.webp',
  '48.webp',
  '49.webp',
  '5.webp ',
  '50.webp',
  '51.webp',
  '52.webp',
  '53.webp',
  '54.webp',
  '55.webp',
  '56.webp',
  '57.webp',
  '58.webp',
  '59.webp',
  '6.webp',
  '60.webp',
  '61.webp',
  '62.webp',
  '63.webp',
  '7.webp',
  '8.webp',
  '9.webp',
];

const PartnerSlider = () => {
  const itemsPerPage = 6;
  const itemPerMidPage = 4;
  const itemPerSmallPage = 2;
  const itemPerXtraSmallPage = 2;

  const itemsPerScroll = 2;
  const carouselRef = useRef(null);
  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the last item, go to first item
      carouselRef?.current?.goTo(0);
    }
  };
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the first item, go to last item
      carouselRef?.current?.goTo(slides.length);
    }
  };
  const onChangeHandle = (currentItem, pageIndex) => {
    const currentPosition = itemsPerPage + currentItem.index;
    if (currentPosition === slides.length) {
      // we hit the first item, go to last item
      setTimeout(() => {
        carouselRef?.current?.goTo(0);
      }, 2000);
    }
  };
  const baseUrl = 'https://assets.deploy.com.bd/assets/brandLogo/';

  // const baseUrl = '../../assets/partnerlogo/';

  return (
    <div className="pt-5">
      <h3>Our Official Partner</h3>

      <MediaQuery minWidth="1020px">
        <Carousel
          itemsToShow={itemsPerPage}
          itemsToScroll={itemsPerScroll}
          enableAutoPlay
          autoPlaySpeed={1500}
          ref={carouselRef}
          onPrevStart={onPrevStart}
          onNextStart={onNextStart}
          onChange={onChangeHandle}
          disableArrowsOnEnd={false}
          itemPadding={[20, 20]}
          showArrows={false}
          pagination={false}
          isRTL={false}
        >
          {slides.map((img, idx) => (
            <div className="partner-carousel" key={img}>
              {/* <p>{baseUrl + img}</p> */}
              <img src={baseUrl + img} alt="" />
            </div>
          ))}
        </Carousel>
      </MediaQuery>

      <MediaQuery minWidth="700px" maxWidth="1019px">
        <Carousel
          itemsToShow={itemPerMidPage}
          itemsToScroll={itemsPerScroll}
          enableAutoPlay
          autoPlaySpeed={2000}
          ref={carouselRef}
          onPrevStart={onPrevStart}
          onNextStart={onNextStart}
          onChange={onChangeHandle}
          disableArrowsOnEnd={false}
          showArrows={false}
          pagination={false}
          isRTL={false}
        >
          {slides.map((img, idx) => (
            <div className="partner-carousel" key={img}>
              <img src={baseUrl + img} alt={baseUrl + img} />
            </div>
          ))}
        </Carousel>
      </MediaQuery>

      <MediaQuery minWidth="550px" maxWidth="699px">
        <Carousel
          itemsToShow={itemPerSmallPage}
          itemsToScroll={itemsPerScroll}
          enableAutoPlay
          autoPlaySpeed={2000}
          ref={carouselRef}
          onPrevStart={onPrevStart}
          onNextStart={onNextStart}
          onChange={onChangeHandle}
          disableArrowsOnEnd={false}
          showArrows={false}
          pagination={false}
          isRTL={false}
        >
          {slides.map((img, idx) => (
            <div className="partner-carousel" key={img}>
              <img src={baseUrl + img} alt="" />
            </div>
          ))}
        </Carousel>
      </MediaQuery>
      <MediaQuery maxWidth="549px">
        <Carousel
          itemsToShow={itemPerXtraSmallPage}
          itemsToScroll={itemsPerScroll}
          enableAutoPlay
          autoPlaySpeed={2000}
          ref={carouselRef}
          onPrevStart={onPrevStart}
          onNextStart={onNextStart}
          onChange={onChangeHandle}
          disableArrowsOnEnd={false}
          showArrows={false}
          pagination={false}
          isRTL={false}
        >
          {slides.map((img, idx) => (
            <div className="partner-carousel" key={img}>
              <img src={baseUrl + img} alt="" />
            </div>
          ))}
        </Carousel>
      </MediaQuery>
    </div>
  );
};
export default PartnerSlider;