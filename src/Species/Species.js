import React from 'react'
import Loading from '../Loading'
import { Grid, Row, Col } from 'react-bootstrap'

const URL_SPECIES = 'https://swapi.co/api/species/'

export default class Species extends React.Component {
  constructor (props) {
    super(props)

    let idSpecies = () => {
      return this.props.name !== undefined ? this.props.name : this.props.match.params.id
    }

    this.state = {
      isLoading: true,
      id: idSpecies(),
      homeworld: null,
      species: {},
      people: []
    }
  }

  _fetchSpecies (id) {
    fetch(URL_SPECIES + id)
      .then(function (response) {
        return response.json()
      })
      .then((myJSON) => {
        // Get HomeWorld
        fetch(myJSON.homeworld)
          .then((response) => {
            return response.json()
          })
          .then((planet) => {
            this.setState({
              homeworld: planet.name
            })
          })

        this.setState({
          isLoading: false,
          species: myJSON
        })

        // Get the people list
        this._fetchpeopleList(this.state.species.people)
      })
  }

  _fetchpeopleList (request) {
    request.forEach(people => {
      fetch(people)
        .then((response) => {
          return response.json()
        })
        .then((myJson) => {
          let people = this.state.people
          people.push(myJson.name)
          this.setState({
            people: people
          })
        })
    })
  }

  componentWillMount () {
    this._fetchSpecies(this.state.id)
  }

  render () {
    if (this.state.isLoading) {
      return (
        <Loading />
      )
    } else {
      let peopleList = this.state.people.map((people, index) => <li key={index}> {people} </li>)
      return (
        <Grid>
          <Row>
            <Col xs={12} className='text-center'>
              <h2> {this.state.species.name} </h2>
            </Col>
            <Col xs={12} className='text-justify'>
              <p> Classification : {this.state.species.classification} </p>
              <p> Designation : {this.state.species.designation} </p>
              <p> Lifespan : { this.state.species.average_lifespan } years</p>
              <p> Language : {this.state.species.language } </p>
              <p> Homeland : {this.state.homeworld} </p>
            </Col>
            <Col xs={12} className='text-justify'>
              <h3> Morphology </h3>
            </Col>
            <Col xs={12} className='text-justify'>
              <p> Average height : {this.state.species.average_height} cm</p>
              <p> Eyes Colors : {this.state.species.eye_colors} </p>
              <p> Hairs Colors : {this.state.species.hair_colors} </p>
              <p> Skin Colors : {this.state.species.skin_colors} </p>
            </Col>
            <Col xs={12} className='text-justify'>
              <h3> Personnages </h3>
              <ul> {peopleList} </ul>
            </Col>
          </Row>
        </Grid>
      )
    }
  }
}
