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
			<HorizontalSection title="About" id="about"></HorizontalSection>
			<HorizontalSection title="FAQ" id="faq"></HorizontalSection>
			<HorizontalSection title="Sponsors" id="sponsors"></HorizontalSection>
		</>;
	}
}

ReactDom.render(<Main></Main>, document.getElementById("root"));

export default {};