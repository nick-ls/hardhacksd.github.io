import * as React from "react";
import {Component} from "react";
import {APPLY_URL} from "../Config";

interface SplashProps {}
interface SplashState {}

export default class Splash extends Component<SplashProps, SplashState> {
	constructor(props: SplashProps) {
		super(props);
		this.state = {};
	}

	public render() {
		return <div className="splash">
			<img src="img/fallenstar.png" alt="Fallen Star Graphic"></img>
			<div className="splash-container">
				<div className="splash-title">H.A.R.D HACK 2022</div>
				<div className="splash-description">San Diego's largest hardware focused hackathon</div>
				<div className="horiz-center">
					<a href={APPLY_URL}><button className="splash-apply">Apply now</button></a>
				</div>
			</div>
		</div>;
	}
}
