import { Card } from './card.js'

export class MainScene extends Phaser.Scene {
  imagePath;
  flippedOrNot;
  constructor(startImagePath, flippedOrNot) {
    super({ key: 'MainScene' })
    if (this.flippedOrNot = true) {
      this.imagePath = 1;
    } else {
      this.imagePath = imagePath;
    }
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#9932CC')
  }

  preload() {
    console.log('Main Scene')
    if (imagePath == 1) {
      this.load.image('card1', './images/MemoryGameCards/image1.png')
    }
    this.load.image('card1', '')
  }

  create(data) {
    this.cardImage = this.add.sprite(0, 0, 'cardImage')
    this.cardImage.x =  1920 / 2
    this.cardImage.y = 1080 / 2
  }
}