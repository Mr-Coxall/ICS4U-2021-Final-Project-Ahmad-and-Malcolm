export class Card extends Phaser.Scene {
  // Card private fields
  #imagePath;
  #flippedOrNot;
  #cardArr2D = [];

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