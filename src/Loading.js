import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

export default class Loading extends React.Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12} className='block-center'>
            <p className='text-center'>
              <FontAwesome name='spinner' pulse size='2x' /> Wait...
            </p>
          </Col>
        </Row>
      </Grid>
    )
  }
}
