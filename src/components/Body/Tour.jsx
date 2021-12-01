import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import PropTypes from 'prop-types';

import './Tour.css';
const Tour = () => {
  const [toursData, settoursData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const url =
      'https://course-api.com/react-tours-project';
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        settoursData(json);
        setLoading(false);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
    //    eslint-disable-next-line
  }, []);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className='tour-container'>
        <div className='img-container'>
          <img
            src='https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg'
            alt=''
          />
        </div>
        <div className='tour-header'>
          <div className='tour-header-text'>
            <h4> Best of paris in 7 days Tour </h4>
          </div>

          <div className='price'> $1,302</div>
        </div>
        <div className='tour-description'>
          <p className='text'>
            Rick Steves' Best of Ireland tour kicks off with
            the best of Dublin, followed by Ireland's
            must-see historical sites, charming towns,
            music-filled pubs, and seaside getaways —
            including Kinsale, the Dingle Peninsula, the
            Cliffs of Moher, the Aran Islands, Galway,
            Connemara, Giant's Causeway, and the compelling
            city of Belfast. All along the way, Rick's
            guides will share their stories to draw you in
            to the Emerald Isle, and the friendliness of the
            people will surely steal your heart. Join us for
            the Best of Ireland in 14 Days!
            <button className='see-more'>See More</button>
          </p>
        </div>
        <div className='not-interested'>
          <button>Not Interested</button>
        </div>
      </div>
    );
  }
};

Tour.propTypes = {
  loading: PropTypes.bool,
};

export default Tour;
