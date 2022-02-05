/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Ahmad El-khawaldeh and Malcolm Tompkins
// Created on: January 2020
// This is the card Scene

// card scene class

// card class
export class Card extends Phaser.Scene {
  // Card private fields
  #imagePath;
  #flippedOrNot;
  #cardArr2D = [];

  // Shuffle cards function
  shuffle(array) {
    let length = array.length;

    while (length > 0) {
      let random = Math.floor(Math.random() * length);
      length--;
      // shuffle indexes
      let temp = array[length];
      array[length] = array[random];
      array[random] = temp;
    }
    return array
  }
  // Check for match function
  checkMatch(array) {
    var check = null;
    if (array[0] == array[1]) {
      console.log('matched')
      check = true;
    } else {
      console.log('Not Matched')
      check = false;
    }
    return check
  }

}