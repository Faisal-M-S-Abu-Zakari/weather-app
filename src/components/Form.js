import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';

function FormComponent({search , setSearch , handelSearch}) {
  
  
  return (
    <Form >
      <Row >
        <Form.Group as={Col} md="8" lg='10' controlId="validationCustom03">
          <Form.Control 
            type="text" 
            placeholder="Enter City Name" 
            required 
            onChange={(event)=>setSearch(event.target.value)}
            value={search} 
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" lg='2' controlId="validationCustom03" >
        <Button className="subBtn"  onClick={handelSearch}>Search</Button>
        </Form.Group>
      </Row>
      
    </Form>
  );
}

export default FormComponent;