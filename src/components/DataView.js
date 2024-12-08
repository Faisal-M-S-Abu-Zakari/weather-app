import { Container } from 'react-bootstrap'
import Today from './Today'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import Loading from './Loading';

const DataView = () => {
    const data = useSelector(state => state.weather.weatherData[0])
    const [forecast, setForecast] = useState(null)

    let lat = data?.coord?.lat
    let lon = data?.coord?.lon

    useEffect(() => {
        if (lat && lon) {
            fetch(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=77f2599c7bdc05a63402462133676a29&units=metric`
            )
                .then(res => res.json())
                .then(data => setForecast(data))
                .catch(error => console.error('Error fetching forecast data:', error));
        }
    }, [lat, lon]);

    // Function to get the date in a readable format
    const getFormattedDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            day: 'numeric',
            month: 'short'
        });
    };

    return (
        <Container className='p-5 d-flex justify-content-start flex-column align-items-start'>
            <h1 className='fw-bold fs-1'>Today</h1>
            <Today />
            <h1 className='fw-bold fs-1'>Daily</h1>
            <Container>
                {forecast ? (
                    <Carousel
                        indicators={false}
                        nextIcon={
                            <span
                                className="carousel-control-next-icon"
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                    borderRadius: '50%',
                                    width: '30px',
                                    height: '30px',
                                    textAlign: 'center'
                                }}
                            />
                        }
                        prevIcon={
                            <span
                                className="carousel-control-prev-icon"
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                    borderRadius: '50%',
                                    width: '30px',
                                    height: '30px',
                                }}
                            />
                        }
                    >
                        {forecast.list.map((item, index) => {
                            if (index % 8 === 0) { // Only show the forecast for one item per day (8 data points per day)
                                return (
                                    <Carousel.Item key={index}>
                                        <div className="daily-container">
                                            <h1 className="temperature">
                                                {item.main.temp} <span className="degree-symbol">°</span>
                                            </h1>
                                            <p className="condition">{item.weather[0].description}</p>
                                            <span className="date">{getFormattedDate(item.dt)}</span>
                                        </div>
                                    </Carousel.Item>
                                );
                            }
                            return null;
                        })}
                    </Carousel>
                ) : (
                    <Loading />
                )}
            </Container>
        </Container>
    )
}

export default DataView;
