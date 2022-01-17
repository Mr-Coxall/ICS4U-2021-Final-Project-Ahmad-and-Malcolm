/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Ahmad El-khawaldeh
// Created on: Sep 2020
// This is the Phaser3 configuration file

//* Game scene */
const game = new Phaser.Game(config)
const config = {
  width: 2000,
  height: 1000,
  // set background color
  backgroundColor: 0xfffff,
}
let scene = new SceneMain();
console.log(game)
