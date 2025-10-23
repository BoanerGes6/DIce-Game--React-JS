import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from './PlayersBoard.module.css'

function PlayerBoard() {
  return (
    <div className={styles.container}>
      <div className={styles.turn}>
        <label>Player</label>
        <label>/</label>
        <label>Computer</label>
      </div>

      <div className={styles.diceContainer}>
        <div className={styles.initial_Icon}>
            <i className="bi bi-dice-3"></i>
            <i className="bi bi-dice-6-fill"></i>
        </div>
        <div className={styles.dice}></div>
      </div>

      <div className={styles.roll_dice}>
        <button>Roll Dice</button>
      </div>
      
      <div className={styles.scores}>
        <p>Player Score = <span>0</span></p>
        <p>Computer Score = <span>0</span></p>
      </div>

      <div className={styles.playAgainOrRestart}>
        <button>Play Again</button>
        <button>Restart</button>
      </div>

    </div>
  )
}

export default PlayerBoard
