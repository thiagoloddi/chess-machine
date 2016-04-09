import Tools from './tools';

class ChessEngine {

	static getMoves(piece, tile, state) {
		switch(piece.toUpperCase()) {
			case "P": return this.pawnMoves(tile, state, piece);
			default: return [];
		}
	}

	static pawnMoves(tile, state, piece) {
		const coords = Tools.getTileCoords(tile);
		const i = coords[0];
		const j = coords[1];
		const attack = Tools.getPlayer(piece);
		const defence = attack == "white" ? "black" : "white";
		const front = attack == "white" ? i - 1 : i + 1;
		const twoInFront = attack == "white" ? i - 2 : i + 2;
		const left = j - 1;
		const center = j;
		const right = j + 1;
		const boardArray = Tools.getBoardArray(state);

		var pawnMoves = [];

		if(front >= 0 && front < 8) {
			var frontDiag = boardArray[front][center];
			if(frontDiag == "0") {
				pawnMoves.push({i: front, j: center});
				if(twoInFront >= 0 && twoInFront < 8 && boardArray[twoInFront][center] == "0" && ((attack == "white" && i == 6) || (attack == "black" && i == 1))){
					pawnMoves.push({i: twoInFront, j: center});
				}
			}
			if(left >= 0 && Tools.getPlayer(boardArray[front][left]) == defence) {
				pawnMoves.push({i: front, j: left});
			}
			if(right < 8 && Tools.getPlayer(boardArray[front][right]) == defence) {
				pawnMoves.push({i: front, j: right});
			}
		}
		return pawnMoves;
	}
}

export default ChessEngine;