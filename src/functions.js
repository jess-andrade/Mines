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
    const columnSel = parseInt(Math.random() * columns, 10)

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

// -- Functions w game logic ::

const cloneBoard = board => {
  return board.map(rows => {
    return rows.map(field => {
      return { ...field }
    })
  })
}

const getNeighbors = (board, row, column) => {
  const neighbors = []
  const rows = [row - 1, row, row + 1]
  const columns = [column - 1, column, column + 1]
  rows.forEach(r => {
    columns.forEach(c => {
      const diferent = r !== row || c !== column
      const validRow = r >= 0 && r < board.length
      const validColumn = c >= 0 && c < board[0].length
      if (diferent && validRow && validColumn) {
        neighbors.push(board[r][c])
      }
    })
  })
  return neighbors
}
//--find out if there are mines in the neighbors
const safeNeighborhood = (board, row, column) => {
  const safes = (result, neighbor) => result && !neighbor.mined
  return getNeighbors(board, row, column).reduce(safes, true)
}

//--open the field when I click recursively
const openField = (board, row, column) => {
  const field = board[row][column]
  if (!field.opened) {
    field.opened = true
    //here the mine explodes
    if (field.mined) {
      field.exploded = true
      //if it is safe to open neighboring fields
    } else if (safeNeighborhood(board, row, column)) {
      getNeighbors(board, row, column)
        .forEach(n => openField(board, n.row, n.column))
      //if the neighborhood is not safe, I calculate the number of mines around
    } else {
      const neighbors = getNeighbors(board, row, column)
      field.nearMines = neighbors.filter(n => n.mined).length
    }
  }
}

//all arrays into a single array
const fields = board => [].concat(...board)

const hadExplosion = board => fields(board)
  .filter(field => field.exploded).length > 0

const pendding = field => (field.mined && !field.flagged)
  || (!field.mined && !field.opened)

const wonGame = board => fields(board).filter(pendding).length == 0

const showMines = board => fields(board).filter(field => field.mined)
  .forEach(field => field.opened = true)


export {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines
}
