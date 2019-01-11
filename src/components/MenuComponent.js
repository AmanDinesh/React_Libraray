import React from 'react';
import DishDetail from './DishdetailComponent';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderMenuItem({ dish, onClick }) {
	return (
		<Card key={dish.id}
			onClick={() => this.props.onClick(dish.id)}>
			<CardImg width="100%" src={dish.image} alt={dish.name} />
			<CardImgOverlay>
				<CardTitle>{dish.name}</CardTitle>
			</CardImgOverlay>
		</Card>
	);
}

const Menu = (props) => {
	const menu = props.dishes.map((dish) => {
		return (
			<div key={dish.id} className="col-12 col-md-5 m-1">
				<RenderMenuItem dish={dish} onClick = {props.onClick}/>
			</div>
		);
	});


	return (
		<div className="container">
			<div className="row">
				{menu} {/*A JS Variable*/}

				{/*<div className="row">
						{this.renderDish(this.state.selectedDish)}
					</div>*/}
			</div>
		</div>
	);

}


//Always export your component
export default Menu;

