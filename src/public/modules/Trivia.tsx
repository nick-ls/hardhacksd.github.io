import * as React from "react";
import {Component} from "react";

interface TriviaProps {
	question: string;
	answer: string;
}
interface TriviaState {
	answered: boolean;
}

export default class Trivia extends Component<TriviaProps, TriviaState> {
	constructor(props: TriviaProps) {
		super(props);
		this.state = {
			answered: false
		};
	}

	private reveal() {
		console.log("revealing");
		this.setState({answered: !this.state.answered});
	}

	public render() {
		return <div className="trivia-section">
			<div className="trivia-reveal" onClick={this.reveal.bind(this)}>
				<div className="trivia-question">{this.props.question}</div>
				<div className="trivia-arrow">
					<img src="img/arrow.svg"></img>
				</div>
			</div>
			<div style={{
				display: this.state.answered ? "initial" : "none"
			}} className="trivia-answer">{this.props.answer}</div>
		</div>;
	}
}
