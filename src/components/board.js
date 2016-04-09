import React, { Component } from 'react';
import Tools from '../models/tools';
import BoardExplorer from '../models/board_explorer';

import Tile from './tile';

class Board extends Component {
	constructor(props) {
		super(props);

		this.state = {
			board_state: BoardExplorer.getInitialBoardState(),
			selected_tile: "",
			selected_piece: ""
		}
	}

	setSelectedTile(tile, piece) {
		this.setState({
			selected_tile: tile,
			selected_piece: piece
		})
	}

	getHighlights() {
		const { selected_tile, selected_piece, board_state } = this.state;
		const showMoves = this.props.showMoves;
		if(!showMoves || selected_tile == "" || selected_piece == "0") {
			return [];
		}
		else {
			return BoardExplorer.getEligibleMoves(selected_tile, selected_piece, board_state);
		}
	}

	renderTiles() {
		var rowIndex = 0;
		var columnIndex = 0;

		const highlights = this.getHighlights();
		console.log(highlights);
		const range = Tools.range(64);
		const tiles = range.map(index => {
			const tileName = Tools.getTileName(rowIndex, columnIndex);
			const props = {
				setSelectedTile: this.setSelectedTile.bind(this),
				selectedTile: this.state.selected_tile,
				highlight: highlights.indexOf(tileName) > -1,
				name: tileName,
				piece: this.state.board_state[index],
				dark: rowIndex % 2 != columnIndex % 2,
				key: tileName
			}
		
			if(columnIndex < 7) columnIndex++;
			else columnIndex = 0;
			if(columnIndex == 0) rowIndex++;

			return <Tile {...props} />
		});

		return tiles;	
	}

  render() {
    return <div id="board"> 
			{this.renderTiles()}     
    </div>
  
  }

}

export default Board;