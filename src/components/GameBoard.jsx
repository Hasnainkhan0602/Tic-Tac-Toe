export default function GameBoard({ onSelectSquare, turns }) {
  // Create a fresh, empty game board for every render
  const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  let gameBoard = [...initialGameBoard.map(array => [...array])];

  // Populate the board based on the turns history
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}





// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];

// export default function GameBoard({onSelectSquare,turns }) {

//   let gameBoard = initialGameBoard;

//   for (const turn of turns) {
//     const {square, player} = turn;
//     const { row, col} = square;

//     gameBoard[row][col]=player;
//   }
//   // const [gameBoard, setGameBoard] = useState(initialGameBoard); 
//   // // Corrected line

//   // function handleSelectSquare(rowIndex, colIndex) {
//   //   setGameBoard((prevGameBoard) => {
//   //     const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
//   //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
//   //     return updatedBoard;
//   //   });
//   //   onSelectSquare();
//   //  }

//   return (
//     <ol id="game-board">
//       {gameBoard.map((row, rowIndex) => (
//         <li key={rowIndex}>
//           <ol>
//             {row.map((playerSymbol, colIndex) => (
//               <li key={colIndex}>
//                 <button onClick = {() =>onSelectSquare(rowIndex, colIndex)}>{playerSymbol}
//                 </button>
//               </li>
//             ))}
//           </ol>
//         </li>
//       ))}
//     </ol>
//   );
// }