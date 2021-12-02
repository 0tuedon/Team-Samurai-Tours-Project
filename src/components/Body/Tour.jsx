import React, { useState, useEffect } from 'react'
import './Tour.css'
import Tourcard from './Tourcard';

const Tour = () => {
    const [toursData, setToursData] = useState([]);
    const [loading, setLoading] = useState(false);
    const deleteTour = (name) => {
        
        const newToursData = toursData.filter((tour) => tour.name !== name)
        setTimeout(setToursData(newToursData),2000)
    }

    useEffect(() => {
        const url = "https://course-api.com/react-tours-project";

        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                if(response.ok)
                {
                    console.log('fefe')
                const json = await response.json();
                setToursData(json);
                console.log(json);
                setLoading(false)
                }

            } catch (error){
               
                setLoading(false)
            }
            finally {
                setLoading(false)
            }
        };

        fetchData();

    }, []);


    return (!loading ? (toursData.length === 0 ? <h1 className="no-tour">No Tour Saved 😥</h1> :
        <div className="tour-body">
            <h2>Our Tours</h2>
            <div className="tour-holder">
                {
                    toursData.map((data) => {
                        return (
                            <Tourcard
                                key={data.id}
                                deleteTour={deleteTour}
                                Data={data}
                            />
                        )
                    })
                }
            </div>
        </div>) : <h2 className="loading">Loading...</h2>

    )

}

export default Tour;
