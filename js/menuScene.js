/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Ahmad El-khawaldeh
// Created on: Sep 2020
// This is the Menue Scene

export class MenuScene extends Phaser.Scene {
  constructor () {
    super({ key: 'menuScene' })

    this.menuSceneBackgroundImage = null
    this.startButton = null
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#FFC34B')
  }

  preload () {
    console.log('Menu Scene')

    this.load.image('menuSceneBackground', './assets/images/memory.png')
    this.load.image('startButton', './assets/images/start1.png')
  }

  create (data) {
    this.menuSceneBackgroundImage = this.add.sprite(10, 10, 'menuSceneBackground').setScale(0.22)
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 300 / 2

    this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, 'startButton')
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton())
    
  }

  clickButton () {
    this.scene.switch('mainScene')
  }
}