import {useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Today = () => {
  const data = useSelector((state) => state.weather.weatherData[0]);
  
  if (!data || data.length === 0) {
    return <p>Loading weather data...</p>;
  }

  const visibilityDistance = data.visibility ? `${(data.visibility / 1000).toFixed(1)} Km` : "N/A"; // Convert meters to Km
  const day = new Date(data.sys?.sunrise * 1000).toLocaleDateString("en-US", {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }); // Format date

  return (
    <Container className="today">
      <div>
        <Row className="w-100">
          {/* Left Column */}
          <Col lg={6} md={12} sm={12} className="col">
            <h1>{Math.round(data.main?.temp )}°</h1>
            <h3 className='f-1'>
              {data.weather?.[0]?.description.charAt(0).toUpperCase() + data.weather?.[0]?.description.slice(1)}
              <img
                style={{width:'50px'}}
                src={`https://openweathermap.org/img/wn/${data.weather?.[0]?.icon}@2x.png`}
                alt="Weather Icon"
              />
              </h3>
            <span>{day}</span>
          </Col>

          {/* Right Column */}
          <Col lg={6} md={12} sm={12} className="col">
            <div>
              <p className="text-muted text-start">
                RealFeel: <span>{Math.round(data.main?.feels_like )}°</span>
              </p>
              <p className="text-muted text-start">
                Humidity: <span>{data.main?.humidity}%</span>
              </p>
              <p className="text-muted text-start">
                Wind Speed: <span>{Math.round(data.wind?.speed *3.6)} km/h</span>
              </p>
              <p className="text-muted text-start">
                Cloud Cover: <span>{data.clouds?.all}%</span>
              </p>
              <p className="text-muted text-start">
                Visibility: <span>{visibilityDistance}</span>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Today;
