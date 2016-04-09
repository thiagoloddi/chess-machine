class Tools {
	static getTileName(i, j){
		const letters = ['a', 'b', 'c', 'd', 'e', 'f' ,'g', 'h']
		return 	letters[j] + (8 - i);
	}

	static getTileCoords(name){
		const letters = ['a', 'b', 'c', 'd', 'e', 'f' ,'g', 'h']
		return [8 - name.split("")[1], letters.indexOf(name.split("")[0])]
	}

	static getPiece(tile, boardState) {
		const coords = typeof tile == "string" ? this.getTileCoords(tile) : tile; // ta ao contrario
		const boardStateIndex = (coords[0] * 8) + coords[1];
		return boardState[boardStateIndex];

	}

	static getPlayer(piece) {
		const whitePieces = ['t', 'n', 'b', 'q', 'k', 'p'];
		const blackPieces = ['T', 'N', 'B', 'Q', 'K', 'P'];
		
		if(whitePieces.indexOf(piece) > -1) return "white";
		if(blackPieces.indexOf(piece) > -1) return "black";
		return "blank";
	}

	static getBoardArray(boardState) {
		var counter = 0;
		var boardArray = [];

		for(var i = 0; i < 8; i++) {
			for(var j = 0; j < 8; j++) {
				if(!boardArray[i]) boardArray[i] = [];
				boardArray[i][j] = boardState[counter];
				counter++;
			}
		}
		return boardArray;
	}

	static getPieceImage(piece) {
		switch(piece) {
			case "t": return "wr";
			case "n": return "wn";
			case "b": return "wb";
			case "q": return "wq";
			case "k": return "wk";
			case "p": return "wp";
			case "T": return "br";
			case "N": return "bn";
			case "B": return "bb";
			case "Q": return "bq";
			case "K": return "bk";
			case "P": return "bp";
		}
	}

	static range(x){
		var rangeArray = [];
		for(var i = 0; i < x; i++){
			rangeArray.push(i);
		}
		return rangeArray;
	}
}

export default Tools;