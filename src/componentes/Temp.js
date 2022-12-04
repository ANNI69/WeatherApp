import React, { useEffect, useState } from 'react'
import './css/style.css'

const Temp = () => {
    const [city, setcity] = useState(null);
    const [search, setsearch] = useState("Mumbai");
    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=480d0c20515b15a3deea167d97cab64d`;
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson.main);
            setcity(resJson.main);
        }
        fetchApi();
    }, [search])
    return (
        <>
            <div className='box'>
                <div className='inputData'>
                    <input type="search" className='InputFeild'
                        value={search}
                        onChange={(event) => { setsearch(event.target.value) }} />
                </div>
                <div>
                    <div className='info'>
                        <h2 className='location'>
                            <i className='fas fa-street-view'></i>
                            {search}
                        </h2>
                        <h1 className='temp'>
                            {city ? city.temp : "No Data"}

                        </h1>
                        <h3 className='topmin_max'>
                            Feels Like : {city ? city.feels_like : "Loading"}
                        </h3>
                        <h3 className='topmin_max'>
                            Min : {city ? city.temp_min : "Loading"}
                        </h3>

                        <h3 className='topmin_max'>
                            Max : {city ? city.temp_max : "Loading"}
                        </h3>

                        <h3 className='topmin_max'>
                            Humidity : {city ? city.humidity : "Loading"}
                        </h3>

                        <h3 className='topmin_max'>
                            Pressure {city ? city.pressure : "Loading"}
                        </h3>
                    </div>
                    <div className='wave -one'>
                    </div>
                    <div className='wave -two'>
                    </div>
                    <div className='wave -three'>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Temp
