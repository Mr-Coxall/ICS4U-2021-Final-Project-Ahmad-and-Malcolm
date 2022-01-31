import { Card } from './card.js'

export class MainScene extends Phaser.Scene {
  #imagePath = -1;
  #flippedOrNot;
  #cardsArr2D = [];
  #moveCounter = 0;
  #timer = 0;
  #flippedOrNotArr = [];

  constructor(imagePath, flippedOrNot) {
    super({ key: 'mainScene' })
    this.#imagePath = imagePath;
    if (Boolean(this.#flippedOrNot) == 1) {
      this.#imagePath = -1;
    }
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ADD8E6')
  }

  preload() {
    console.log('MainScene')
    this.load.image('homeButton', './assets/images/HomeButton.png')
    this.load.image('backgroundImage', './assets/images/gridBackground.png');
      this.load.image('backSide','./assets/images/backSideOfCards.png')
      this.load.image('card0Image','./assets/images/backSideOfCards.png')
      this.load.image('card1Image','./assets/images/backSideOfCards.png')
      this.load.image('card2Image','./assets/images/image2.png')
      this.load.image('card3Image','./assets/images/image2.png')
      this.load.image('card4Image','./assets/images/image3.png')
      this.load.image('card5Image','./assets/images/image3.png')
      this.load.image('card6Image','./assets/images/image4.png')
      this.load.image('card7Image','./assets/images/image4.png')
      this.load.image('card8Image','./assets/images/image5.png')
      this.load.image('card9Image','./assets/images/image5.png')
      this.load.image('card10Image','./assets/images/image6.png')
      this.load.image('card11Image','./assets/images/image6.png')
      this.load.image('card12Image','./assets/images/image7.png')
      this.load.image('card13Image','./assets/images/image7.png')
      this.load.image('card14Image','./assets/images/image8.png')
      this.load.image('card15Image','./assets/images/image8.png')
    var movesText
    var timer;
    var total = 0;
  }
  create(data) {

    this.backgroundImage = this.add.sprite(0, 0, 'backgroundImage').setScale(2.75)
    this.backgroundImage.setOrigin(0,0)
    this.backgroundImage.x = 1400 / 2
    this.backgroundImage.y = 400 / 2

    const backgroundLayer = this.add.layer();
    backgroundLayer.add([ this.backgroundImage ])

    // Card sprites
    console.log('Check1')
    this.card0 = this.add.sprite(0, 0, 'card0Image').setScale(0.7)
    this.card0.x = 785
    this.card0.y = 285
    this.card1 = this.add.sprite(0, 0, 'card1Image').setScale(0.7)
    this.card1.x = 935
    this.card1.y = 285
    this.card2 = this.add.sprite(0, 0, 'card2Image').setScale(0.7)
    this.card2.x = 1085
    this.card2.y = 285
    this.card3 = this.add.sprite(0, 0, 'card3Image').setScale(0.7)
    this.card3.x = 1235
    this.card3.y = 285
    this.card4 = this.add.sprite(0, 0, 'card4Image').setScale(0.7)
    this.card4.x = 785
    this.card4.y = 435
    this.card5 = this.add.sprite(0, 0, 'card5Image').setScale(0.7)
    this.card5.x = 935
    this.card5.y = 435
    this.card6 = this.add.sprite(0, 0, 'card6Image').setScale(0.7)
    this.card6.x = 1085
    this.card6.y = 435
    this.card7 = this.add.sprite(700, 700, 'card7Image').setScale(0.7)
    this.card7.x = 1235
    this.card7.y = 435
    this.card8 = this.add.sprite(100,100, 'card8Image').setScale(0.7)
    this.card8.x = 785
    this.card8.y = 585
    this.card9 = this.add.sprite(100,100, 'card9Image').setScale(0.7)
    this.card9.x = 935
    this.card9.y = 585
    this.card10 = this.add.sprite(100,100, 'card10Image').setScale(0.7)
    this.card10.x = 1085
    this.card10.y = 585
    this.card11 = this.add.sprite(100,100, 'card11Image').setScale(0.7)
    this.card11.x = 1235
    this.card11.y = 585
    this.card12 = this.add.sprite(100,100, 'card12Image').setScale(0.7)
    this.card12.x = 785
    this.card12.y = 735
    this.card13 = this.add.sprite(100,100, 'card13Image').setScale(0.7)
    this.card13.x = 935
    this.card13.y = 735
    this.card14 = this.add.sprite(100,100, 'card14Image').setScale(0.7)
    this.card14.x = 1085
    this.card14.y = 735
    this.card15 = this.add.sprite(100,100, 'card15Image').setScale(0.7)
    this.card15.x = 1235
    this.card15.y = 735

    const cardLayer = this.add.layer();
    cardLayer.add([ this.card0, this.card1, this.card2, this.card3, this.card4, this.card5, this.card6, this.card7, this.card8, this.card9, this.card10, this.card11, this.card12, this.card13, this.card14, this.card15, ])


    this.homeButton = this.add.sprite(0, 0, 'homeButton').setScale(0.5)
    this.homeButton.x = 900 / 2
    this.homeButton.y = 200 / 2
    this.homeButton.setInteractive({ useHandCursor: true })
    this.homeButton.on('pointerdown', () => this.clickButton())
    var moveCountertext = this.add.text(600, 75, "Moves: " + this.#moveCounter, { fontFamily: 'Arial', color: '#28282B', wordWrap: { width: 315 } }).setScale(4)
  }
  clickButton() {
    this.scene.switch('menuScene')
  }

  updateCounter() {
    total++
  }
  
  imageAssociation() {  
    let imagePath = 1;  
    var counter = 1;   
    const cards = [[4],[4]];  
    for (var columnCounter = 0; columnCounter < 4; columnCounter++) {
      cards[columnCounter][0] = columnCounter    
      for (var rowCounter = 0; rowCounter < 4;
        rowCounter++) {
          imagePath = image++
          cards[columnCounter][rowCounter] = imagePath
          console.log(imagePath)
      }
    }    
  }
   moveCounter(moveCount) {
      this.#moveCounter = moveCount
      this.#moveCounter.setText('Moves: ' + this.#moveCounter.toString())
    }
} 