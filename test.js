function getMoves(poke1) {
  makingMoves = poke1.moves;
  let move = [];
  let ctr = makingMoves.length;
  for (let i = 0; i < 4; i++) {
      let randMoves = Math.floor(Math.random() * ctr);
      axios.get(makingMoves[randMoves].move.url)
          .then(function (catchemBonus) {
              let pokemoves = catchemBonus.data;
              console.log(pokemoves);
              console.log(`Moves${i}: ${makingMoves[randMoves].move.name}
                     Accruacy: ${pokemoves.accuracy}
                     Power: ${pokemoves.power}
                     Priority: ${pokemoves.priority}`);

              move.push(`Moves${i}: \u00A0\u00A0${makingMoves[randMoves].move.name}\u00A0\u00A0
                                   Accuracy: ${pokemoves.accuracy}\u00A0\u00A0
                                   Power: ${pokemoves.power}\u00A0\u00A0
                                   Priority: ${pokemoves.priority}`);

              // return 
              //     `Moves${i}: ${makingMoves[randMoves].move.name}
              //      Accruacy: ${bong.accuracy}
              //      Power: ${bong.power}
              //      Priority: ${bong.priority}`;


          }).catch(function (response) {
              console.error(response);
        })
  }
  return poke1.move = move;
  // console.log(catchem[c].moves);
} // End of getMoves
