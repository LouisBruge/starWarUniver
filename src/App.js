import React from 'react'
import Planet from './planet.js'
import Personnage from './Personnages.js'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1> Star War Univers </h1>
        <Planet />
        <Personnage />
      </div>
    )
  }
}
