class SnakesLadders {
  constructor() {
    this.player1 = 0;
    this.player2 = 0;
    this.currentPlayer = 'player1';
    this.specialPoles = {
      2: 38,
      7: 14,
      8: 31,
      15: 26,
      21: 42,
      28: 84,
      36: 44,
      51: 67,
      71: 91,
      78: 98,
      87: 94,
      16: 6,
      46: 25,
      49: 11,
      62: 19,
      64: 60,
      74: 53,
      89: 68,
      92: 88,
      95: 75,
      99: 80,
    };
  }
  play(die1, die2) {
    if (this.player1 == 100 || this.player12 == 100) {
      return 'Game over!';
    }
    let player = this.currentPlayer;
    this[player] += die1 + die2;

    if (this[player] > 100) this[player] = 200 - this[player];
    if (this.specialPoles[this[player]])
      this[player] = this.specialPoles[this[player]];

    if (this[player] == 100) return `Player ${player[6]} Wins!`;

    if (die1 != die2)
      this.currentPlayer =
        this.currentPlayer == 'player1' ? 'player2' : 'player1';

    return `Player ${player[6]} is on square ${this[player]}`;
  }
}
