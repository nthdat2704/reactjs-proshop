import React, { useEffect } from "react";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { Row, Col } from "react-bootstrap";
import { listProducts } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products &&
            products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <Product key={product._id} product={product} />
              </Col>
            ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
