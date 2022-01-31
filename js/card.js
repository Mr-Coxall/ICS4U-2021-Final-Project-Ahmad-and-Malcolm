export class Card extends Phaser.Scene {
  #imagePath;
  #flippedOrNot;
  #cardArr2D = [];

  getFlipperOrNot() {
    return this.#flippedOrNot
  }

  shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
    array[randomIndex], array[currentIndex]];
  }

  return array;
  }
}