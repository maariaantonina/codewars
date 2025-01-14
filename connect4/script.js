class Connect4 {
  constructor() {
    this.columns = [[], [], [], [], [], [], []];
    this.currentPlayer = 'p1';
    this.isWon = false;
    this.round = 0;
  }
  check() {
    for (let column of this.columns) {
      if (column.toString().indexOf('p1,p1,p1,p1') > -1) this.isWon = true;
      if (column.toString().indexOf('p2,p2,p2,p2') > -1) this.isWon = true;
      if (this.columns.indexOf(column) <= 3) {
        for (let element of column) {
          if (
            element ==
              this.columns[this.columns.indexOf(column) + 1][
                column.indexOf(element)
              ] &&
            element ==
              this.columns[this.columns.indexOf(column) + 2][
                column.indexOf(element)
              ] &&
            element ==
              this.columns[this.columns.indexOf(column) + 3][
                column.indexOf(element)
              ]
          ) {
            this.isWon = true;
          }
        }
      }
    }
  }
  changePlayer() {
    this.currentPlayer == 'p1'
      ? (this.currentPlayer = 'p2')
      : (this.currentPlayer = 'p1');
  }
  play(col) {
    if (this.round !== 0) {
      this.changePlayer();
    }
    if (this.isWon == true) {
      return 'Game has finished!';
    } else if (this.columns[col].length == 6) {
      return 'Column full!';
    } else {
      this.round++;
      this.columns[col].push(this.currentPlayer);
      this.check();
      if (this.isWon == true) {
        return `Player ${this.currentPlayer[1]} wins!`;
      } else {
        return `Player ${this.currentPlayer[1]} has a turn`;
      }
    }
  }
}
