import React from 'react'
import Carousel from 'react-elastic-carousel'

const Partner = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ]
  return (
        <div>
        <Carousel breakPoints={breakPoints} >
          <div className="partner-carousel">One</div>
          <div className="partner-carousel">Two</div>
          <div className="partner-carousel">Three</div>
          <div className="partner-carousel">Four</div>
          <div className="partner-carousel">Five</div>
          <div className="partner-carousel">Six</div>
          <div className="partner-carousel">Seven</div>
          <div className="partner-carousel">Eight</div>
        </Carousel>
        </div>
  )
}

export default Partner
