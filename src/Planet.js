import React, { Component } from 'react'
import Loading from './Loading'
import { Grid, Col, Row } from 'react-bootstrap'

const URL_PLANET = 'https://swapi.co/api/planets/'

export default class planet extends Component {
  constructor () {
    super()

    this.state = {
      isLoading: true,
      residents: [],
      planet: {}
    }
  }

  _fetchPlanet (id) {
    fetch(URL_PLANET + id)
      .then(function (response) {
        return response.json()
      })
      .then((myJSON) => {
        this.setState({
          isLoading: false
        })
        this.setState({
          planet: myJSON
        })
      })
  }

  _fetchResident (request) {
    request.forEach(resident => {
      fetch(resident)
        .then(response => {
          return response.json()
        })
        .then(myJson => {
          let residents = this.state.residents
          residents.push(myJson.name)
          this.setState({
            residents: residents
          })
        })
    })
  }

  componentWillMount () {
    this._fetchPlanet(this.props.match.params.id)
  }

  render () {
    if (this.state.isLoading) {
      return (
        <Loading />
      )
    } else {
      return (
        <Grid>
          <Row>
            <Col xs={12} className='text-center'>
              <h2> {this.state.planet.name}</h2>
            </Col>
            <Col xs={12} className='text-justify'>
              <h3> Spatial Spec</h3>
            </Col>
            <Col xs={12} className='text-justify'>
              <p> Rotation period : {this.state.planet.rotation_period} hours </p>
              <p> Orbital period : {this.state.planet.orbital_period} days </p>
              <p> Diametre : {this.state.planet.diameter} km </p>
              <p> Gravity : {this.state.planet.gravity}</p>
            </Col>
            <Col xs={12} className='text-justify'>
              <h3> Environnement </h3>
            </Col>
            <Col xs={12} className='text-justify'>
              <p> Climate : {this.state.planet.climate}</p>
              <p> Terrain : {this.state.planet.terrain}</p>
              <p> Percent water surface : {this.state.planet.surface_water}% </p>
            </Col>
            <Col xs={12} className='text-justify'>
              <h3> Populations </h3>
            </Col>
            <Col xs={12} className='text-justify'>
              <p> Population : {this.state.planet.population}</p>
            </Col>
          </Row>
        </Grid>
      )
    }
  }
}
