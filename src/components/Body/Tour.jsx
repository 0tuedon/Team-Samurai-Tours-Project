import React, { useState, useEffect } from 'react';
import './Tour.css';
import Tourcard from './Tourcard';

const Tour = () => {
  const [toursData, setToursData] = useState([]);
  const [loading, setLoading] = useState(false);
  const deleteTour = (name) => {
    const newToursData = toursData.filter(
      (tour) => tour.name !== name
    );
    setTimeout(setToursData(newToursData), 2000);
  };

  useEffect(() => {
    const url =
      'https://course-api.com/react-tours-project';

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (response.ok) {
          const json = await response.json();
          setToursData(json);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const refreshPage = () => {
    window.location.reload(false);
  };

  return !loading ? (
    toursData.length === 0 ? (
      <div className='no-tour'>
        <h2>No More Tours Remaining 😢</h2>
        <button
          style={{
            background: '#008bff',
            color: '#fff',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer',
          }}
          onClick={refreshPage}>
          Refresh
        </button>
      </div>
    ) : (
      <div className='tour-body'>
        <h2>Our Tours</h2>
        <div className="line"></div>
        <div className='tour-holder'>
          {toursData.map((data) => {
            return (
              <Tourcard
                key={data.id}
                deleteTour={deleteTour}
                Data={data}
              />
            );
          })}
        </div>
      </div>
    )
  ) : (
    <h2 className='loading'>Loading...</h2>
  );
};

export default Tour;
