import React from 'react'

const About = () => {
  //TO DO
  //Add team image
  //Add about us text/style
  //Poss add sprites as images we associate with and info text underneath?
  return (
    <div className="poke-list">
      <h1>About us</h1>
      <div>
        <h2>Tech stack</h2>
        <ul>
          New Tech
          <li>Phaser</li>
          <li>Tiled</li>
          <li>Socket.io</li>
        </ul>
        <ul>
          Known Tech from bootcamp
          <li>Redux</li>
          <li>React</li>
          <li>Knex js</li>
          <li>Auth0</li>
          <li>Express</li>
          <li>node.js</li>
          <li>SQLite</li>
          <li>HTML, CSS, JS</li>
        </ul>
      </div>
    </div>
  )
}

export default About
