import React from 'react';
import PropTypes from 'prop-types';
import styles from './purchaseList.scss';

const purchaseList = props => (
	<div style={{display:"inline-grid"}}>
		{props.packages.map( p => {
			return (
				<div>
				<p>Total Package Price: {p.price} (€)</p>
					<table border={1}>
						<tr>
							<th>Product</th>
							<th>Weight (g)</th>
							<th>Value €</th>
						</tr>
						{p.products.map(pro => {
							return(
								<tr>
									<td>{pro.product}</td>
									<td>{pro.weight}</td>
									<td>{pro.value}</td>
								</tr>
							)
						})}
						<tr>
							+ Package tax: {props.packageTax} €
						</tr>
					</table>
				</div>
			)
		})}
		
	</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class purchaseList extends React.Component {
//   render() {
//     return <div>This is a component called purchaseList.</div>;
//   }
// }

const purchaseListPropTypes = {
	// always use prop types!
};

purchaseList.propTypes = purchaseListPropTypes;

export default purchaseList;
