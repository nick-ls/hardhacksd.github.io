import * as React from "react";
import {Component} from "react";

interface HorizontalSectionProps {
	title: string;
	id: string;
}
interface HorizontalSectionState {}

export default class HorizontalSection extends Component<HorizontalSectionProps, HorizontalSectionState> {
	constructor(props: HorizontalSectionProps) {
		super(props);
		this.state = {};
	}

	public render() {
		return <div className="horizontal-section" id={this.props.id}>
			<div className="section-title">
				<div className="e-left"></div>
				<div className="title">{this.props.title}</div>
				<div className="e-right"></div>
			</div>
			{this.props.children}
		</div>;
	}
}
