import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { IndexLinkContainer } from 'react-router-bootstrap'
import Planet from './Planet/Planet.js'
import Starship from './Starship/Starship.js'
import Personnage from './Personnage/Personnage.js'
import CategoryIndex from './CategoryIndex.js'
import Vehicle from './Vehicle/Vehicle.js'
import Species from './Species/Species.js'
import HomeIndex from './HomeIndex'
import {Route, BrowserRouter, Switch, NavLink} from 'react-router-dom'
import Footer from './Footer'

export default class NavBar extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <NavLink to='/'>
              Star War Universe
                </NavLink>
              </Navbar.Brand>
            </Navbar.Header>

            <Nav>
              <IndexLinkContainer to='/personnage'>
                <NavItem>
              Personnage
                </NavItem>
              </IndexLinkContainer>
              <IndexLinkContainer to='/planet'>
                <NavItem>
              Planet
                </NavItem>
              </IndexLinkContainer>
              <IndexLinkContainer to='/species'>
                <NavItem>
              Species
                </NavItem>
              </IndexLinkContainer>
              <IndexLinkContainer to='/starship'>
                <NavItem>
              Starship
                </NavItem>
              </IndexLinkContainer>
              <IndexLinkContainer to='/vehicle'>
                <NavItem>
              Vehicle
                </NavItem>
              </IndexLinkContainer>
            </Nav>
          </Navbar>

          <Switch>
            <Route exact path='/' component={HomeIndex} />
            <Route exact path='/starship/:id(\d+)' component={Starship} />
            <Route exact path='/planet/:id(\d+)' component={Planet} />
            <Route exact path='/personnage/:id(\d+)' component={Personnage} />
            <Route exact path='/vehicle/:id(\d+)' component={Vehicle} />
            <Route exact path='/species/:id(\d+)' component={Species} />
            <Route exact path='/personnage' render={(props) => (
              <CategoryIndex {...props} category='people' key='1' />
            )} />
            <Route exact path='/planet' render={(props) => (
              <CategoryIndex {...props} category='planets' key='2' />
            )} />
            <Route exact path='/species' render={(props) => (
              <CategoryIndex {...props} category='species' key='3' />
            )} />
            <Route exact path='/starship' render={(props) => (
              <CategoryIndex {...props} category='starships' key='4' />
            )} />
            <Route exact path='/vehicle' render={(props) => (
              <CategoryIndex {...props} category='vehicles' key='5' />
            )} />
          </Switch>
          <div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>

    )
  }
}
