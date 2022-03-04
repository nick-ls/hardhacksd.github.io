import * as ReactDom from "react-dom";
import * as React from "react";
import TopBar from "./modules/TopBar";
import HorizontalSection from "./modules/HorizontalSection";
import Splash from "./modules/Splash";
import Trivia from "./modules/Trivia";

const LINKS = ["About", "FAQ", "Sponsors"];
const FAQ = [{
	question: "What is a hackathon?",
	answer: "A hackathon is a gathering where people collaboratively build a project from the ground-up over a short period of time. While working on a particular project, the idea is for each group member to have the ability and freedom to work on whatever they want."
},{
	question: "Is it free?",
	answer: "no"
},{
	question: "What do I bring?",
	answer: "your clothes"
},{
	question: "Do I need a team?",
	answer: "if you want to win"
},{
	question: "Where is it?",
	answer: "your mom's house"
},{
	question: "When is it?",
	answer: "now"
}];

interface MainProps {}
interface MainState {}

class Main extends React.Component<MainProps, MainState> {
	constructor(props: MainProps) {
		super(props);
		this.state = {};
	}
	public render() {
		return <>
			<img className="logo" src="img/hardhack.png"></img>
			<TopBar links={LINKS}></TopBar>
			<Splash></Splash>
			<HorizontalSection title="About" id="about">
				<p>H.A.R.D. Hack is a hardware hackathon that HKN holds annually in collaboration with IEEE. We provide the materials and the tools needed to make a hardware hack. Come out and build something cool! Anyone can attend, regardless of skill level, major, or university.</p>
				<button className="sub-button">View Past Submissions</button>
			</HorizontalSection>
			<HorizontalSection title="FAQ" id="faq">{
				FAQ.map(n=>
					<Trivia question={n.question} answer={n.answer} key={n.question}></Trivia>
				)
			}</HorizontalSection>
			<HorizontalSection title="Sponsors" id="sponsors"></HorizontalSection>
		</>;
	}
}

ReactDom.render(<Main></Main>, document.getElementById("root"));

export default {};