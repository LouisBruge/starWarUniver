import React from 'react'
import Loading from './Loading'
import { Grid, Col, Row } from 'react-bootstrap'

const URL_VEHICLE = 'https://swapi.co/api/vehicles/'

export default class Vehicle extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      vehicle: {}
    }
  }

  _fetchVehicle (id) {
    fetch(URL_VEHICLE + id)
      .then(function (response) {
        return response.json()
      })
      .then((myJSon) => {
        this.setState({
          vehicle: myJSon,
          isLoading: false
        })
      })
  }

  componentWillMount () {
    this._fetchVehicle(this.props.match.params.id)
  }

  render () {
    if (this.state.isLoading) {
      return (
        <Loading />
      )
    } else {
      return (
        <Grid>
          <Row className='vehicle-grid'>
            <Col xs={12} className='text-center'>
              <h2> {this.state.vehicle.name} </h2>
            </Col>
            <Col xs={12} className='text-justify'>
              <h3> Construct </h3>
            </Col>
            <Col xs={12} className='text-justify'>
              <p> Class : {this.state.vehicle.vehicle_class} </p>
              <p> Model : {this.state.vehicle.model} </p>
              <p> Manufacturer : {this.state.vehicle.manufacturer} </p>
              <p> Cost : {this.state.vehicle.cost_in_credits} credits</p>
            </Col>

            <Col xs={12} className='text-justify'>
              <h3> Specification </h3>
            </Col>
            <Col xs={12} className='text-justify'>
              <p> Length : {this.state.vehicle.length} m</p>
              <p> Crew : {this.state.vehicle.crew} </p>
              <p> Passengers : {this.state.vehicle.passengers} </p>
              <p> Capacity : {this.state.vehicle.cargo_capacity} kg</p>
            </Col>

            <Col xs={12} className='text-justify'>
              <h3> Speed </h3>
            </Col>
            <Col xs={12} className='text-justify'>
              <p> Speed in the atmosphere : {this.state.vehicle.max_atmosphering_speed} miles/hour</p>
            </Col>
          </Row>
        </Grid>)
    }
  }
}