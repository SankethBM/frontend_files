import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Products from '../components/Products'
// import products from '../products'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')

      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map(products => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Products products={products} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen