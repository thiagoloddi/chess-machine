import React, { Component } from 'react';

class Menu extends Component {

	newGame() {
		console.log("New Game");
	}

	showMoves() {
		this.props.toggleShowMoves()
		console.log("Show Moves");
	}

	render() {
		const { showMoves } = this.props;

		return <div id="menu">
			<div id="menu_title"> MENU </div>
			<div className="menu_button" id="new_game" onClick={this.newGame.bind(this)}> NEW GAME </div>
			<div className={"menu_button" + (showMoves ? " active" : "")} id="show_moves" onClick={this.showMoves.bind(this)}> SHOW MOVES </div>
		</div>
	}
}

export default Menu;