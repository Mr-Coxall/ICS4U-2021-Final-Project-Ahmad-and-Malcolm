/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Malcolm Tompkins
// Created on: Sep 2020
// This is the Phaser3 configuration file

//* Game scene */
import { Card } from './card.js'
import { MainScene } from './mainScene.js'
import { SplashScene } from './splashScene.js'
import { MenuScene } from './menuScene.js'

const splashScene = new SplashScene()
const menuScene = new MenuScene()

var flippedOrNot = new Boolean(false)

  let imagePath = 1
  var counter = 1
  const cardImagesArr = [8]
  for (var imageCounter = 0; imageCounter > cardImagesArr.length; imageCounter++) {
    cardImagesArr[imageCounter] = imageCounter
  }
const mainScene = new MainScene(imagePath, flippedOrNot)

const config = {
  width: 1970,
  height: 1080,
  // set background color
  backgroundColor: 0xfffff,
  scale: {
    mode: Phaser.Scale.FIT, 
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}
// create timer in game.js and method to give it to other classes
const game = new Phaser.Game(config)
// add splash and menuScene back in 
game.scene.add('menuScene', menuScene)
game.scene.add('splashScene', splashScene)
game.scene.add('mainScene', mainScene)
game.scene.start('splashScene')



