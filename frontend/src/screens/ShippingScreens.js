import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps';
import FormContainer from '../components/FormContainer';
import { saveShippingAddress } from '../redux/actions/cartActions';

const ShippingScreens = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(
    shippingAddress.address ? shippingAddress.address : ''
  );
  const [city, setCity] = useState(
    shippingAddress.city ? shippingAddress.city : ''
  );
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode ? shippingAddress.postalCode : ''
  );
  const [country, setCountry] = useState(
    shippingAddress.country ? shippingAddress.country : ''
  );

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push('/payment');
  };

  return (
    <Row>
      <Col className="vertical-center">
        <FormContainer>
          <CheckoutSteps step1 step2 />
          <div className="background_color custom-shadow p-3 p-lg-5">
            <h1 className="text-center ">Shipping</h1>
            <Form onSubmit={submitHandler} className="d-grid gap-3 ">
              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter address"
                  value={address}
                  required
                  onChange={(e) => setAddress(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter city"
                  value={city}
                  required
                  onChange={(e) => setCity(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="postalCode">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter postal code"
                  value={postalCode}
                  required
                  onChange={(e) => setPostalCode(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter country"
                  value={country}
                  required
                  onChange={(e) => setCountry(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button type="submit" variant="primary">
                Continue
              </Button>
            </Form>
          </div>
        </FormContainer>
      </Col>
    </Row>
  );
};

export default ShippingScreens;
