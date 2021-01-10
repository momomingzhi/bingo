import { observable } from "mobx";
const GameStore = observable({
  player1: "",
  player2: "",
  allCount: 0,
  firstArray: [
    [1, 2, 3, 4, 5],
    [11, 12, 13, 14, 15],
    [21, 22, 23, 24, 25],
    [31, 32, 33, 34, 35],
    [41, 42, 43, 44, 45],
  ],
  firstVisited: [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ],
  setAllCount(allCount) {
    this.allCount = allCount;
  },
  getAllCount() {
    return this.allCount;
  },
  getFirstArray() {
    return this.firstArray;
  },
  setFirstVisited(rowIndex, columnIndex, firstVisited) {
    this.firstVisited[rowIndex][columnIndex] = firstVisited;
  },
  getFirstVisited() {
    return this.firstVisited;
  },
});

export default GameStore;
