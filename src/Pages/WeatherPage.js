import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FormSearch from '../components/FormSearch'
import DataView from '../components/DataView'

const WeatherPage = () => {
  return (
    <Container className='weather-page text-center'>
      <Row>
        <Col lg={6} md={4} sm={12} className='leftSearch'>
          <h3 className='forcast-title'>Forcast</h3>
          <p className='forcast-paragraph'>The only weather forcast you need</p>
          <FormSearch />
        </Col>
        <Col lg={6} md={8} sm={12}>
          <DataView />
        </Col>
      </Row>
    </Container>
  )
}

export default WeatherPage
