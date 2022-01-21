/* global Phaser */

// Copyright (c) 2020  All rights reserved
//
// Created by: Ahmad El-khawaldeh
// Created on: Sep 2020
// This is the Splash Scene

export class SplashScene extends Phaser.Scene {
  constructor () {
    super({ key: 'splashScene' })

    this.splashSceneBackgroundImage = null
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Splash Scene')
    this.load.image('splashSceneBackground', './images/MemoryGameCards/splash.png')
  }

  create (data) {
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'splashSceneBackground')
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }

  update (time, delta) {
    if (time > 4000) {
      this.scene.switch('menuScene')
    }
  }
}
