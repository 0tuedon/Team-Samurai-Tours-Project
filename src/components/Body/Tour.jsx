import React, { useState, useEffect } from 'react'
import './Tour.css'
import Tourcard from './Tourcard';

const Tour = () => {
    const [toursData, setToursData] = useState([]);
    console.log(toursData);

    const [loading, setLoading] = useState(false);

    const deleteTour = (name) => {
        const newToursData = toursData.filter((tour) => tour.name !== name)
        setToursData(newToursData)
        // settoursData(
        //     toursData.filter((data)=>{
        //     return data.id !== id
        // }))

    }
    useEffect(() => {
        const url = "https://course-api.com/react-tours-project";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setToursData(json);
                console.log(json);

                setLoading(true);

            } catch (error) {
                console.log("error", error)
            }
        };

        fetchData();

    }, []);

    // const deleteTour =(id) => {
    //     const newTours = toursData.filter((tour) => tour.id !== id)
    //     settoursData(newTours)
    // }


    return (loading ? (toursData.length === 0 ? <h1 className="no-tour">No Tour Saved 😥</h1> :
        <div className="tour-body">
            <h2>Our Tours</h2>
            <div className="horizontal"></div>
            <div className="tour-holder">
                {
                    toursData.map((data) => {
                        return (
                            <Tourcard
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

export default Tour
