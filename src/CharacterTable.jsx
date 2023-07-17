import { Component } from "react";

export class TableCreator extends Component {
	render() {
		const prop = this.props;
		return (
			<tr className={prop.className}>
				<td>{prop.name}</td>
				<td>{prop.skillset}</td>
				<td>{prop.votes}</td>
			</tr>
		);
	}
}
