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
	private static REGEX = /(?:\[)((?:(?<!\\.)(?<=\\)\]|[^\]])*)(?:\]\()([^\)]*)(?:\))/g;
	private static REPLACEMENT_STRING = "REPLACEMENT_STRING";
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
	private linkLinks() {
		let match;
		let replace = this.props.answer.replace(Trivia.REGEX, Trivia.REPLACEMENT_STRING).split(Trivia.REPLACEMENT_STRING);
		let returnArr = [];
		let i = 0;
		while ((match = Trivia.REGEX.exec(this.props.answer)) !== null) {
			returnArr.push(replace[i] ? replace[i] : "");
			returnArr.push(<a href={match[2]}>{match[1]}</a>);
			i++;
		}
		returnArr.push(replace[i] ? replace[i] : "");
		if (returnArr.length === 0) {
			return [this.props.answer];
		}
		return returnArr;
	}

	public render() {
		return <div className="trivia-section">
			<div className="trivia-reveal" onClick={this.reveal.bind(this)}>
				<div className="trivia-question">{this.props.question}</div>
				<div className={"trivia-arrow" + (this.state.answered ? " answered" : "")}>
					<img src="img/arrow.svg" alt="Expand Arrow"></img>
				</div>
			</div>
			<div style={{
				display: this.state.answered ? "initial" : "none"
			}} className="trivia-answer">{this.linkLinks()}</div>
		</div>;
	}
}
