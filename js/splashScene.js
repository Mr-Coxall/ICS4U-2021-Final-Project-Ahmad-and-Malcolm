/* global Phaser */

// Copyright (c) 2020  All rights reserved
//
// Created by: Ahmad El-khawaldeh and Malcolm Tompkins
// Created on: Sep 2020
// This is the Splash Scene

// splashscene class
export class SplashScene extends Phaser.Scene {
  constructor () {
    super({ key: 'splashScene' })

  }
  // Phaser init build in function
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }
  // Phaser preload build in function
  preload () {
    console.log('Splash Scene')
    this.load.image('splashSceneBackground', './assets/images/splash.png')
  }
  // Phaser create build in function
  create (data) {
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'splashSceneBackground') 
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }
  // Phaser update build in function
  update (time, delta) {
    if (time > 2300) {
      this.scene.switch('menuScene')
    }
  }
}