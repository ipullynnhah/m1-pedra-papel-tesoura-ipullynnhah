function playRockPaperScissor(player1, player2) {
  if (player1 === player2) {
    return "Empate!";
  }
  

  let winner;
  if (player1 === "Pedra" && player2 === "Tesoura") {
    winner = 1;
  } else if (player1 === "Papel" && player2 === "Pedra") {
    winner = 1;
  } else if (player1 === "Tesoura" && player2 === "Papel") {
    winner = 1;
  } else {
    winner = 2;
  }
  
  return `Jogador ${winner} venceu!`;
}
