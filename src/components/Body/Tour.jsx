import React, {useState, useEffect} from 'react'
import './Tour.css'
import Tourcard from './Tourcard';

const Tour = () => {
    const [toursData, setToursData] = useState([]);
    console.log(toursData)
    const deleteTour  = (name)=>{
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

    if(toursData.length === 0) return <h1 className="no-tour">No Tour Saved 😥</h1>
    else{
        return (
            <div className="tour-body">
                <h2>Our Tours</h2>
                <div className="tour-holder">
                    {
                        toursData.map((data) => {
                            return (
                                <Tourcard
                                deleteTour = {deleteTour}
                                    Data={data}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Tour
