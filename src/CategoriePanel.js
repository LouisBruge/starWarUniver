import React from 'react'
import { Grid, Media, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './CategoriePanel.css'

export default class CategoriePanel extends React.Component {
  convertUrl () {
    return `/${this.props.title.toLowerCase()}`
  }

  imagePath () {
    return `/Images/${this.props.imageSrc}`
  }

  render () {
    let image = <img src={this.imagePath()} alt={this.props.alt} />
    let imageLeft = this.props.left === true ? <Media.Left align='middle' > {image} </Media.Left> : null
    let imageRight = this.props.right === true ? <Media.Right align='middle' > {image} </Media.Right> : null

    return (
      <Grid fluid>
        <Media>
          {imageLeft}
          <Media.Body align='middle' >
            <Media.Heading className='text-center'>
              {this.props.title}
            </Media.Heading>
            <p className='text-justify'>
              {this.props.descriptif}
            </p>
            <LinkContainer to={this.convertUrl()} >
              <Button className='center-block'>Explore {this.props.title} base</Button>
            </LinkContainer>
          </Media.Body>
          {imageRight}
        </Media>
      </Grid>
    )
  }
}
