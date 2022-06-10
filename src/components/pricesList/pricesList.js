import React from 'react';
import PropTypes from 'prop-types';
import styles from './pricesList.scss';

const pricesList = props => (
	<div>
		<table border={1}>
			<tr>
				<th>Product</th>
				<th>Value €/Kg</th>
			</tr>
			{props.inventory.map( p => (
			<tr>
				<td>{p.name}</td>
          		<td>{p.value}</td>
			</tr>
			))}
			<td>
				Package tax: {props.packageTax} €/Kg
			</td>
		</table>
	</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class pricesList extends React.Component {
//   render() {
//     return <div>This is a component called pricesList.</div>;
//   }
// }

const pricesListPropTypes = {
	// always use prop types!
};

pricesList.propTypes = pricesListPropTypes;

export default pricesList;
