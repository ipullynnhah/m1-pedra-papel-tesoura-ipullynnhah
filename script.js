function playRockPaperScissor(player1, player2) {
  if (player1 === player2) {
    return "Empate!";
  }
  
  let winner;
  if (player1 === "Pedra") {
    winner = player2 === "Papel" ? 2 : 1;
  } else if (player1 === "Papel") {
    winner = player2 === "Tesoura" ? 2 : 1;
  } else  {
    winner = player2 === "Pedra" ? 2 : 1;
  }
  
  return `Jogador ${winner} venceu!`;
}
