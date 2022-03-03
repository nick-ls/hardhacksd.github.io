import * as React from "react";
import {Component} from "react";

interface TopBarProps {
	links: string[];
}
interface TopBarState {}

export default class TopBar extends Component<TopBarProps, TopBarState> {
	constructor(props: TopBarProps) {
		super(props);
		this.state = {};
	}

	public render() {
		return <div className="top-bar">{
			this.props.links.map(link=>
				<a href={"#"+link.toLowerCase()} key="link">{link}</a>
			)
		}</div>;
	}
}
