import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

export default class Footer extends React.Component {
  render () {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} md={4}>
            <h6 className='text-center'>Website</h6>
            <ul className='list-unstyled'>
              <li>
                <p className='text-center'>&#169; 2018 - L. bruge </p>
              </li>
              <li>
                <p className='text-center'><a href='https://github.com/LouisBruge/starWarUniverse.git'>Fork me</a></p>
              </li>
              <li>
                <p className='text-center'>version 1.0.0</p>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h6 className='text-center'>Resources</h6>
            <p className='text-center'><a href='https://swapi.co/'>SWAPI</a></p>
          </Col>
          <Col xs={12} md={4}>
            <h6 className='text-center'>Follow us</h6>
            <ul className='list-inline list-unstyled'>
              <li className='center-block'><a href='https://twitter.com/BrugeLouis?lang=en'><FontAwesome name='twitter-square' /></a></li>
              <li className='center-block'><a href='https://www.linkedin.com/in/louis-bruge/'><FontAwesome name='linkedin-square' /></a></li>
              <li className='center-block'><a href='https://github.com/LouisBruge/'><FontAwesome name='github-square' /></a></li>
            </ul>
          </Col>
        </Row>
      </Grid>
    )
  }
}
