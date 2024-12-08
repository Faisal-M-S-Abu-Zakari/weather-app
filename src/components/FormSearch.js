import React, { useEffect } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather, getCityName } from '../Slice/weatherSlice'


const FormSearch = () => {
    const city = useSelector(state => state.weather.citySearch)
    const data = useSelector(state => state.weather.weatherData[0])
    console.log(data);
    
    const dispatch = useDispatch()
    const handelChange=(e)=>{
        dispatch(getCityName(e.target.value))
    }
    function handelSearch (){
        dispatch(fetchWeather(city))
    }
    console.log(city);
    useEffect(() => {
        dispatch(fetchWeather("London")); 
        
  }, []);
    
  return (
    <div>
        <Form >
            <Row >
                <Form.Group as={Col} md="8" lg='10' controlId="validationCustom03">
                <Form.Control 
                    className='form-control'
                    type="text" 
                    placeholder="Enter Location" 
                    required 
                    value={city}
                    onChange={handelChange}
                />
                <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" lg='2' controlId="validationCustom03" >
                <Button className="subBtn" onClick={handelSearch}>Search</Button>
                </Form.Group>
            </Row>
            <h3 className='City-name'>{data?.name},{data?.sys?.country}</h3>
        </Form>
    </div>
  )
}

export default FormSearch
