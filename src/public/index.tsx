import * as ReactDom from "react-dom";
import * as React from "react";
import TopBar from "./modules/TopBar";
import HorizontalSection from "./modules/HorizontalSection";
import Splash from "./modules/Splash";

const LINKS = ["About", "FAQ", "Sponsors"];

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
			<HorizontalSection title="FAQ" id="faq"></HorizontalSection>
			<HorizontalSection title="Sponsors" id="sponsors"></HorizontalSection>
		</>;
	}
}

ReactDom.render(<Main></Main>, document.getElementById("root"));

export default {};