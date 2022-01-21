/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Malcolm Tompkins
// Created on: Sep 2020
// This is the Phaser3 configuration file

//* Game scene */
import { Card } from './card.js'

import { MainScene } from './mainScene.js'

let imagePath = './images/MemoryGameCards/image1.png'

var flippedOrNot = new Boolean(false)

const card1 = new Card(imagePath, flippedOrNot)

const config = {
  width: 2000,
  height: 1000,
  // set background color
  backgroundColor: 0xfffff,
}
const game = new Phaser.Game(config)

const mainScene = new MainScene()

game.scene.add('MainScene', mainScene)
game.scene.start('MainScene')

