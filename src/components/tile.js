import React, { Component } from 'react';
import Tools from '../models/tools';

class Tile extends Component {

	onTileClick() {
		const { selectedTile, name, piece } = this.props;
		if(selectedTile == "") this.props.setSelectedTile(name, piece);
		else if(selectedTile == name) this.props.setSelectedTile("", "");
		else {
			
		}
	}

	renderPiece() {
		const piece = this.props.piece;
		if(piece != "0") {
			const filePath = "../assets/" + Tools.getPieceImage(piece) + ".png";
			return <img className="piece_image" src={filePath} />
		}
	}

	renderHightlight() {
		if(this.props.highlight) {
			return <div id="highlight" />
		}
	}

	render() {
		const { selectedTile, name, dark} = this.props;
		const tileColor = (dark ? "dark" : "light") + (selectedTile == name ? "_selected" : "");
		return <div className={tileColor} id="tile" onClick={this.onTileClick.bind(this)}>
			<div id="tileLegend"> {name} </div>
			{this.renderPiece()}
			{this.renderHightlight()}
		</div>
	}
}

export default Tile;