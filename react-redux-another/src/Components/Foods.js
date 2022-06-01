import React, { useEffect } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FetchData } from "../Redux/Action";

const FoodComponents = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchData());
  }, []);
  const { getProduct, AddProduct } = useSelector((state) => state);
  const { Foods, isLoading, error } = getProduct;

  return (
    <Container className="py-5">
      <div>
        <h1 className="fw-bold ">
          <h1>Our Products</h1>
        </h1>
      </div>
      {!error && !isLoading && Foods && (
        <Row xs={2} md={3} lg={4} xxl={5} className="g-4">
          {Foods?.map((data) => (
            <Col key={data?._id}>
              <Card className="h-100 mt-3 products-card ">
                <Card.Img height="230" variant="top" src={data?.photo} />
                <Card.Body className="pb-0">
                  <Card.Title as={"h6"}>
                    <span className="fw-bold text-red">{data?.name}</span>
                  </Card.Title>
                  <Card.Text className="text-success">IN STOCK</Card.Text>
                  <Card.Text>
                    Price :{" "}
                    <span className="text-primary fw-bold">{data?.price}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      {isLoading && (
        <div className="text-center my-5">
          <Spinner animation="border" variant="danger" />
        </div>
      )}
    </Container>
  );
};

export default FoodComponents;
