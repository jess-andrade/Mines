import { TurboModuleRegistry } from 'react-native'

const createBoard = (rows, columns) => {
  //To create the 'board' i have a array of arrays w objects I created

  return Array(rows).fill(0).map((_, row) => {
    return Array(columns).fill(0).map((_, column) => {
      return {
        row,
        column,
        opened: false,
        flagged: false,
        mined: false,
        nearMines: 0
      }
    })
  })
}

const spreadMines = (board, minesAmount) => {
  //randomly select a row and column to place a mine
  const rows = board.length
  const columns = board[0].length
  let minesPlanted = 0

  while (minesPlanted < minesAmount) {
    //rowSel = selected row --- columnSel = selected column
    const rowSel = parseInt(Math.random() * rows, 10)
    const columnSel = parseInt(Math.random() * rows, 10)

    if (!board[rowSel][columnSel].mined) {
      board[rowSel][columnSel].mined = true
      minesPlanted++
    }
  }
}

const createMinedBoard = (rows, columns, minesAmount) => {
  const board = createBoard(rows, columns)
  spreadMines(board, minesAmount)
  return board
}

export { createMinedBoard }