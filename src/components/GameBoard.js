import React from 'react'
import styles from './GameBoard.module.css'

function GameBoard() {

    const gridCells = Array.from({ length: 16 });

  return (
    <div className={styles.gameboard}>
        <h2>Start</h2>
        {gridCells.map((_, i) => (
            <div key={i} className={styles.grids}></div>
        ))}
        <h2>End</h2>
    </div>
  )
}

export default GameBoard
