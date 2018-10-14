import React from 'react';

export default class PasswordApp extends React.Component {
	constructor(props) {
		super(props)
		this.changeLength = this.changeLength.bind(this)
		this.generatePW = this.generatePW.bind(this)
		this.toggleNumbers = this.toggleNumbers.bind(this)
		this.toggleSymbols = this.toggleSymbols.bind(this)
		this.state = {
			password: '',
			wordLength: 8,
			numbers: false,
			symbols: false
		}
	}
	generatePW() {
		const pwLetters = 'abcdefghijklmnopqrstuvwxyz'
		const pwCapital = pwLetters.toUpperCase()
		const pwNumbers = '0123456789'
		const pwSymbols = '!#&?%'
		let pwBase = pwLetters + pwCapital
		let wordLength = this.state.wordLength
		let password = ''

		if (this.state.numbers) {
			pwBase += pwNumbers
		}

		if (this.state.symbols) {
			pwBase += pwSymbols
		}

		for (let i = 0; i < wordLength; i++) {
			let random = Math.floor(Math.random() * pwBase.length)
			password += pwBase[random]
		}

		this.setState({ password: password })
	}
	changeLength(e) {
		this.setState({ wordLength: e.target.value });
	}
	toggleNumbers() {
		this.setState({ numbers: !this.state.numbers })
	}
	toggleSymbols() {
		this.setState({ symbols: !this.state.symbols })
	}
	render() {
		return (
			<div>
				<h1>password generator</h1> 
				<input type="text" value={this.state.password}/>
				<button onClick={this.generatePW}>Generate!</button>
				<fieldset>
					<p>Length( <span>{this.state.wordLength}</span> )</p>
					<input type="range"  min="4" max="20" value={this.state.wordLength}  onChange={this.changeLength} />
					<p>Numbers? <input type="checkbox" onClick={this.toggleNumbers}/> </p>
					<p>Symbols? <input type="checkbox" onClick={this.toggleSymbols}/> </p>
				</fieldset>
			</div>
		)
	}
}




 