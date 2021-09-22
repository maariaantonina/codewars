class Connect4 {
  constructor() {
    this.columns = [[], [], [], [], [], [], []];
    this.currentPlayer = 'p1';
    this.isWon = false;
    this.round = 0;
  }
  check() {
    //check columns
    for (let column of this.columns) {
      if (
        column.toString().indexOf('p1,p1,p1,p1') > -1 ||
        column.toString().indexOf('p2,p2,p2,p2') > -1
      )
        this.isWon = true;
    }

    //check rows
    for (let i = 0; i < 6; i++) {
      let row = '';
      for (let column of this.columns) {
        if (column[i]) row += column[i].toString();
      }
      if (row.indexOf('p1p1p1p1') > -1 || row.indexOf('p2p2p2p2') > -1)
        this.isWon = true;
    }

    //check diagonal
    for (let i = 0; i < 3; i++) {
      let diag = '';
      for (let j = 0; j < 4; j++) {
        if (
          this.columns[j][i] &&
          this.columns[j + 1][i + 1] &&
          this.columns[j + 2][i + 2] &&
          this.columns[j + 3][i + 3]
        ) {
          diag =
            this.columns[j][i].toString() +
            this.columns[j + 1][i + 1].toString() +
            this.columns[j + 2][i + 2].toString() +
            this.columns[j + 3][i + 3].toString();
        }
        if (diag.indexOf('p1p1p1p1') > -1 || diag.indexOf('p2p2p2p2') > -1)
          this.isWon = true;
      }
    }

    for (let i = 0; i < 3; i++) {
      let diag = '';
      for (let j = 3; j < 7; j++) {
        if (
          this.columns[j][i] &&
          this.columns[j - 1][i + 1] &&
          this.columns[j - 2][i + 2] &&
          this.columns[j - 3][i + 3]
        ) {
          diag =
            this.columns[j][i].toString() +
            this.columns[j - 1][i + 1].toString() +
            this.columns[j - 2][i + 2].toString() +
            this.columns[j - 3][i + 3].toString();
        }
        if (diag.indexOf('p1p1p1p1') > -1 || diag.indexOf('p2p2p2p2') > -1)
          this.isWon = true;
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
