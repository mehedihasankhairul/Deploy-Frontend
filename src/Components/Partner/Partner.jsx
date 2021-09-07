import React from 'react'
import Carousel from 'react-elastic-carousel'

const partnerImages = [
  // 'assets/breandLogo/40.webp',
  // 'assets/breandLogo/5.webp',
  // 'assets/breandLogo/6.webp',
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
'9.webp'
]
const baseUrl = 'https://deploy.com.bd/assets/breandLogo/'

const Partner = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 4 },
    { width: 768, itemsToShow: 6 },
    { width: 1200, itemsToShow: 12 }
  ]
  return (
        <div>
        <Carousel breakPoints={breakPoints} enableAutoPlay={true} autoPlaySpeed={1500} itemsToScroll={2}>
          {
            partnerImages.map(img => (
              <div className="partner-carousel" key={img} >
                <img src={baseUrl + img} alt="" />
              </div>
            ))

          }
          {/* <div className="partner-carousel">One</div>
          <div className="partner-carousel">Two</div>
          <div className="partner-carousel">Three</div>
          <div className="partner-carousel">Four</div>
          <div className="partner-carousel">Five</div>
          <div className="partner-carousel">Six</div>
          <div className="partner-carousel">Seven</div>
          <div className="partner-carousel">Eight</div> */}
        </Carousel>
        </div>
  )
}

export default Partner
