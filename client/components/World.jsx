import React, { useEffect, useState } from 'react'
import Phaser from 'phaser'
import Battle from './Battle'
var theme = new Audio('themeSong.mp3')
var battlesong = new Audio('battleTheme.mp3')
let game = null
let facilitator

function World() {
  const [battle, setBattle] = useState(false)
  const [volume, setVolume] = useState('0.2')

  function battleSong() {
    battlesong.volume = 0.2
    battlesong.currentTime = 0
    battlesong.play()
  }
  function battleSongpause() {
    battlesong.pause()
  }

  function themeSongPlay() {
    theme.volume = 0.2
    theme.currentTime = 0
    theme.play()
  }
  function themeSongPause() {
    theme.pause()
  }

  useEffect(() => {
    if (!battle) {
      themeSongPlay()
      battleSongpause()
      if (game != null && game.scene.isPaused('default')) {
        game.scene.resume('default')
      }
    } else {
      game.scene.pause('default')
      themeSongPause()
      battleSong()
    }
  }, [battle])

  useEffect(() => {
    theme.volume = volume
    battlesong.volume = volume
  }, [])

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: 'game-container',
      pixelArt: false,
      physics: {
        default: 'arcade',
        arcade: {
          speed: 100,
          gravity: { y: 0 },
        },
      },

      scene: {
        preload: preload,
        create: create,
        update: update,
      },
    }

    game = new Phaser.Game(config)
    let cursors
    let player
    let showDebug = false

    function preload() {
      this.load.image('tiles', 'big_tileset4.png')

      this.load.tilemapTiledJSON('map', 'pleasework.json')

      // An atlas is a way to pack multiple images together into one texture. I'm using it to load all
      // the player animations (walking left, walking right, etc.) in one image. For more info see:
      //  https://labs.phaser.io/view.html?src=src/animation/texture%20atlas%20animation.js
      // If you don't use an atlas, you can do the same thing with a spritesheet, see:
      //  https://labs.phaser.io/view.html?src=src/animation/single%20sprite%20sheet.js
      this.load.atlas(
        'atlas',
        'https://mikewesthad.github.io/phaser-3-tilemap-blog-posts/post-1/assets/atlas/atlas.png',
        'https://mikewesthad.github.io/phaser-3-tilemap-blog-posts/post-1/assets/atlas/atlas.json'
      )
    }

    function create(component) {
      const map = this.make.tilemap({ key: 'map' })

      // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
      // Phaser's cache (i.e. the name you used in preload)
      const tileset = map.addTilesetImage('big_tileset4', 'tiles')

      // Parameters: layer name (or index) from Tiled, tileset, x, y
      const belowLayer = map.createLayer('Below Player', tileset, 0, 0)
      const worldLayer = map.createLayer('World', tileset, 0, 0)
      const aboveLayer = map.createLayer('Above Player', tileset, 0, 0)

      worldLayer.setCollisionByProperty({ collides: true })
      aboveLayer.setCollisionByProperty({ collides: true })

      // By default, everything gets depth sorted on the screen in the order we created things. Here, we
      // want the "Above Player" layer to sit on top of the player, so we explicitly give it a depth.
      // Higher depths will sit on top of lower depth objects.
      aboveLayer.setDepth(10)

      // Object layers in Tiled let you embed extra info into a map - like a spawn point or custom
      // collision shapes. In the tmx file, there's an object layer with a point named "Spawn Point"
      const spawnPoint = map.findObject(
        'Objects',
        (obj) => obj.name === 'Spawn Point'
      )

      const testObject = map.findObject(
        'Boss',
        (obj) => obj.name === 'testObject'
      )

      testObject.onOverlap = true

      // Create a sprite with physics enabled via the physics system. The image used for the sprite has
      // a bit of whitespace, so I'm using setSize & setOffset to control the size of the player's body.
      player = this.physics.add
        .sprite(spawnPoint.x, spawnPoint.y, 'atlas', 'misa-front')
        .setSize(30, 32)
        .setOffset(0, 24)
        .setScale(0.6, 0.6)

      // this.physics.add.overlap(player, testObject, collisionlistener)

      // Watch the player and worldLayer for collisions, for the duration of the scene:
      this.physics.add.collider(player, worldLayer)
      this.physics.add.collider(player, aboveLayer)

      function collisionlistenerSarah() {
        console.log('action')
        facilitator = 'Sarah'
        document.getElementById('throwBall').style.width = '1800px'
        document.getElementById('throwBall').style.height = '1800px'
        setTimeout(() => {
          // themeSongPause()
          document.getElementById('throwBall').style.width = '0px'
          document.getElementById('throwBall').style.height = '0px'
          setBattle(true)
        }, 1000)

        this.physics.world.removeCollider(testOverlapSarah)
      }

      function collisionlistenerKrissy() {
        console.log('action')
        facilitator = 'Krissy'
        document.getElementById('throwBall').style.width = '1800px'
        document.getElementById('throwBall').style.height = '1800px'
        setTimeout(() => {
          // themeSongPause()
          document.getElementById('throwBall').style.width = '0px'
          document.getElementById('throwBall').style.height = '0px'
          setBattle(true)
        }, 1000)

        this.physics.world.removeCollider(testOverlapKrissy)
      }

      function collisionlistenerJosh() {
        console.log('action')
        facilitator = 'Josh'
        document.getElementById('throwBall').style.width = '1800px'
        document.getElementById('throwBall').style.height = '1800px'
        setTimeout(() => {
          // themeSongPause()
          document.getElementById('throwBall').style.width = '0px'
          document.getElementById('throwBall').style.height = '0px'
          setBattle(true)
        }, 1000)

        this.physics.world.removeCollider(testOverlapJosh)
      }

      function collisionlistenerRohan() {
        console.log('action')
        facilitator = 'Rohan'
        document.getElementById('throwBall').style.width = '1800px'
        document.getElementById('throwBall').style.height = '1800px'
        setTimeout(() => {
          // themeSongPause()
          document.getElementById('throwBall').style.width = '0px'
          document.getElementById('throwBall').style.height = '0px'
          setBattle(true)
        }, 1000)
        this.physics.world.removeCollider(testOverlapRohan)
      }

      function collisionlistenerGerard() {
        console.log('action')
        facilitator = 'Gerard'
        document.getElementById('throwBall').style.width = '1800px'
        document.getElementById('throwBall').style.height = '1800px'
        setTimeout(() => {
          // themeSongPause()
          document.getElementById('throwBall').style.width = '0px'
          document.getElementById('throwBall').style.height = '0px'
          setBattle(true)
        }, 1000)

        this.physics.world.removeCollider(testOverlapGerard)
      }

      function collisionlistenerJoseph() {
        console.log('action')
        facilitator = 'Joseph'
        document.getElementById('throwBall').style.width = '1800px'
        document.getElementById('throwBall').style.height = '1800px'
        setTimeout(() => {
          // themeSongPause()
          document.getElementById('throwBall').style.width = '0px'
          document.getElementById('throwBall').style.height = '0px'
          setBattle(true)
        }, 1000)

        this.physics.world.removeCollider(testOverlapJoseph)
      }
      function collisionlistenerDavid() {
        console.log('action')
        facilitator = 'David'
        document.getElementById('throwBall').style.width = '1800px'
        document.getElementById('throwBall').style.height = '1800px'
        setTimeout(() => {
          // themeSongPause()
          document.getElementById('throwBall').style.width = '0px'
          document.getElementById('throwBall').style.height = '0px'
          setBattle(true)
        }, 1000)

        this.physics.world.removeCollider(testOverlapDavid)
      }
      function collisionlistenerJv() {
        console.log('action')
        facilitator = 'JV'
        document.getElementById('throwBall').style.width = '1800px'
        document.getElementById('throwBall').style.height = '1800px'
        setTimeout(() => {
          // themeSongPause()
          document.getElementById('throwBall').style.width = '0px'
          document.getElementById('throwBall').style.height = '0px'
          setBattle(true)
        }, 1000)

        this.physics.world.removeCollider(testOverlapJv)
      }

      this.physics.world.on('overlap', () => {
        console.log('overlap')
      })

      const zoneSarah = this.add.zone(1200, 560).setSize(32, 32)
      const zoneKrissy = this.add.zone(1104, 80).setSize(32, 32)
      const zoneJosh = this.add.zone(80, 592).setSize(32, 32)
      const zoneRohan = this.add.zone(784, 1072).setSize(32, 32)
      const zoneGerard = this.add.zone(848, 1072).setSize(32, 32)
      const zoneJoseph = this.add.zone(912, 1072).setSize(32, 32)
      const zoneDavid = this.add.zone(464, 1904).setSize(32, 32)
      const zoneJv = this.add.zone(656, 2416).setSize(32, 32)

      this.physics.world.enable(zoneSarah)
      this.physics.world.enable(zoneKrissy)
      this.physics.world.enable(zoneJosh)
      this.physics.world.enable(zoneRohan)
      this.physics.world.enable(zoneGerard)
      this.physics.world.enable(zoneJoseph)
      this.physics.world.enable(zoneDavid)
      this.physics.world.enable(zoneJv)

      const testOverlapSarah = this.physics.add.overlap(
        player,
        zoneSarah,
        collisionlistenerSarah.bind(this)
      )
      const testOverlapKrissy = this.physics.add.overlap(
        player,
        zoneKrissy,
        collisionlistenerKrissy.bind(this)
      )
      const testOverlapJosh = this.physics.add.overlap(
        player,
        zoneJosh,
        collisionlistenerJosh.bind(this)
      )
      const testOverlapRohan = this.physics.add.overlap(
        player,
        zoneRohan,
        collisionlistenerRohan.bind(this)
      )
      const testOverlapGerard = this.physics.add.overlap(
        player,
        zoneGerard,
        collisionlistenerGerard.bind(this)
      )
      const testOverlapJoseph = this.physics.add.overlap(
        player,
        zoneJoseph,
        collisionlistenerJoseph.bind(this)
      )
      const testOverlapDavid = this.physics.add.overlap(
        player,
        zoneDavid,
        collisionlistenerDavid.bind(this)
      )
      const testOverlapJv = this.physics.add.overlap(
        player,
        zoneJv,
        collisionlistenerJv.bind(this)
      )

      // Create the player's walking animations from the texture atlas. These are stored in the global
      // animation manager so any sprite can access them.
      const anims = this.anims

      anims.create({
        key: 'misa-left-walk',
        frames: anims.generateFrameNames('atlas', {
          prefix: 'misa-left-walk.',
          start: 0,
          end: 3,
          zeroPad: 3,
        }),
        frameRate: 10,
        repeat: -1,
      })

      anims.create({
        key: 'misa-right-walk',
        frames: anims.generateFrameNames('atlas', {
          prefix: 'misa-right-walk.',
          start: 0,
          end: 3,
          zeroPad: 3,
        }),
        frameRate: 10,
        repeat: -1,
      })

      anims.create({
        key: 'misa-front-walk',
        frames: anims.generateFrameNames('atlas', {
          prefix: 'misa-front-walk.',
          start: 0,
          end: 3,
          zeroPad: 3,
        }),
        frameRate: 10,
        repeat: -1,
      })

      anims.create({
        key: 'misa-back-walk',
        frames: anims.generateFrameNames('atlas', {
          prefix: 'misa-back-walk.',
          start: 0,
          end: 3,
          zeroPad: 3,
        }),
        frameRate: 10,
        repeat: -1,
      })

      const camera = this.cameras.main
      camera.zoom = 2
      camera.startFollow(player)
      camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels)

      cursors = this.input.keyboard.createCursorKeys()

      // Help text that has a "fixed" position on the screen
      this.add
        .text(-90, 16, 'Use Arrow keys to move', {
          font: '18px monospace',
          fill: '#000000',
          padding: { x: 20, y: 10 },
          backgroundColor: '#ffffff',
        })
        .setScrollFactor(2)
        .setDepth(30)

      // Debug graphics
      this.input.keyboard.once('keydown-D', (event) => {
        // Turn on physics debugging to show player's hitbox
        this.physics.world.createDebugGraphic()

        // Create worldLayer collision graphic above the player, but below the help text
        const graphics = this.add.graphics().setAlpha(0.75).setDepth(20)
        worldLayer.renderDebug(graphics, {
          tileColor: null, // Color of non-colliding tiles
          collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
          faceColor: new Phaser.Display.Color(40, 39, 37, 255), // Color of colliding face edges
        })
      })
    }

    function update(time, delta) {
      const speed = 200
      const prevVelocity = player.body.velocity.clone()

      // Stop any previous movement from the last frame
      player.body.setVelocity(0)

      // Horizontal movement
      if (cursors.left.isDown) {
        player.body.setVelocityX(-speed)
      } else if (cursors.right.isDown) {
        player.body.setVelocityX(speed)
      }

      // Vertical movement
      if (cursors.up.isDown) {
        player.body.setVelocityY(-speed)
      } else if (cursors.down.isDown) {
        player.body.setVelocityY(speed)
      }

      // Normalize and scale the velocity so that player can't move faster along a diagonal
      player.body.velocity.normalize().scale(speed)

      // Update the animation last and give left/right animations precedence over up/down animations
      if (cursors.left.isDown) {
        player.anims.play('misa-left-walk', true)
      } else if (cursors.right.isDown) {
        player.anims.play('misa-right-walk', true)
      } else if (cursors.up.isDown) {
        player.anims.play('misa-back-walk', true)
      } else if (cursors.down.isDown) {
        player.anims.play('misa-front-walk', true)
      } else {
        player.anims.stop()

        // If we were moving, pick and idle frame to use
        if (prevVelocity.x < 0) player.setTexture('atlas', 'misa-left')
        else if (prevVelocity.x > 0) player.setTexture('atlas', 'misa-right')
        else if (prevVelocity.y < 0) player.setTexture('atlas', 'misa-back')
        else if (prevVelocity.y > 0) player.setTexture('atlas', 'misa-front')
      }
    }
  }, [])

  return (
    <div>
      <div className="gameBorder">
        <div className="battery">
          <div className="batteryLight" />
          <p>BATTERY</p>
        </div>
        <div id="game-container" style={{ display: battle ? 'none' : null }}>
          <img
            id="throwBall"
            src="/images/image03.gif"
            alt="a spinning pokeball"
          />
        </div>
        {battle && (
          <Battle
            battle={setBattle}
            facil={facilitator}
            battlesong={battlesong}
          />
        )}
      </div>
      <button onClick={themeSongPlay}>Theme Song Play</button>
      <button onClick={themeSongPause}>Stop</button>
      <button onClick={battleSong}>Battle Song Play</button>
      <button onClick={battleSongpause}>Stop</button>
      <input
        type="range"
        min="0"
        max="100"
        onChange={(e) =>
          setVolume(
            battle
              ? (battlesong.volume = e.target.value / 100)
              : (theme.volume = e.target.value / 100)
          )
        }
      ></input>
    </div>
  )
}

export default World
