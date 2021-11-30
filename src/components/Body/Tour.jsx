import React, {useState, useEffect} from 'react'
import './Tour.css'
import Tourcard from './Tourcard';

const Tour = () => {
    const [toursData, settoursData] = useState([]);

    useEffect(() => {
        const url = "https://course-api.com/react-tours-project";
        
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                settoursData(json);
                console.log(json);

            } catch (error) {
                console.log("error", error)
            }
        };

        fetchData();

    }, []);

    return (
        <div className="tour-body">
            <h2>Our Tours</h2>
            <div className="tour-holder">
                {
                    toursData.map((data) => {
                        return (
                            <Tourcard
                                Data={data}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Tour
