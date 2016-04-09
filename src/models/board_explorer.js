import Tools from './tools';
import ChessEngine from './chess_engine';

class BoardExplorer {
	static getInitialBoardState() {
		var boardState = "TNBQKBNT";
		for (var i = 0; i < 8; i++) {
			boardState += "P";
		}
		for(var i = 0; i < 32; i++) {
			boardState += "0";
		}
		for (var i = 0; i < 8; i++) {
			boardState += "p";
		}
		boardState += "tnbqkbnt";

		return boardState;
	}

	static getEligibleMoves(selectedTile, selectedPiece, boardState) {
		const moves = ChessEngine.getMoves(selectedPiece, selectedTile, boardState);
		
		return moves.map(move => {
			return Tools.getTileName(move.i, move.j);
		})
	}
}

export default BoardExplorer;