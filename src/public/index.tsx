import * as ReactDom from "react-dom";
import * as React from "react";
import TopBar from "./modules/TopBar";
import HorizontalSection from "./modules/HorizontalSection";
import Splash from "./modules/Splash";
import Trivia from "./modules/Trivia";
import {FAQ, SOCIALS, PAST_SUBMISSIONS} from "./Config";

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
			<a href="/"><img className="logo" src="img/hardhack.png" alt="HARD Hack Logo"></img></a>
			<TopBar links={LINKS}></TopBar>
			<Splash></Splash>
			<HorizontalSection title="About" id="about">
				<p>H.A.R.D. Hack is a hardware hackathon that HKN holds annually in collaboration with IEEE. We provide the materials and the tools needed to make a hardware hack. Come out and build something cool! Anyone can attend, regardless of skill level, major, or university.</p>
				<a href={PAST_SUBMISSIONS}><button className="sub-button">View Past Submissions</button></a>
			</HorizontalSection>
			<HorizontalSection title="FAQ" id="faq">{
				FAQ.map(n=>
					<Trivia question={n.question} answer={n.answer} key={n.question}></Trivia>
				)
			}</HorizontalSection>
			<HorizontalSection title="Sponsors" id="sponsors">
				<img className="sponsor-image" alt="UCSD Sponsor" src="img/ucsd.png"></img>
			</HorizontalSection>
			<div className="footer">
				<a href="/"><img src="img/hardhack.png" alt="HARD Hack Logo"></img></a>
				<div className="scls">{
					SOCIALS.map(s=>
						<a href={s.link}>
							<img src={s.img} alt={s.link}></img>
						</a>
					)
				}
				</div>
			</div>
		</>;
	}
}

ReactDom.render(<Main></Main>, document.getElementById("root"));

export default {};
