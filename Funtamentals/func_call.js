function cutPieces(fruit){
    return fruit*4;
}



function fruitProcessor(apple,orange){

    const applePiece=cutPieces(apple);
    const orangePiece=cutPieces(orange);

    const juice = `Juice with ${applePiece} Pieces of apple and ${orangePiece} pieces of oranges. `;

    return juice;
}

const final=fruitProcessor(2,3);
console.log(final);