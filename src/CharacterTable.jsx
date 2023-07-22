import { Component } from "react";
import PropTypes from "prop-types";

export class TableRow extends Component {
	render() {
		const prop = this.props;
		return (
			<tr className={prop.className}>
				<td>{prop.name}</td>
				<td>{prop.skillset.join(", ")}</td>
				<td>{prop.votes}</td>
			</tr>
		);
	}
}

TableRow.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string,
	skillset: PropTypes.string,
	votes: PropTypes.number,
};
