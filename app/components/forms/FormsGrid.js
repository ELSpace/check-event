import React from 'react';
import { Card, CardBlock } from 'reactstrap';
import { Link } from 'react-router-dom';
import FormCard from './FormCard';

import './style.css';

const FormsTable = ({forms}) => 
	<div className="row">
		{
			forms.map(form => 
				<div className="col-md-2"><FormCard key={form._id} form={form}></FormCard></div>
			)
		}
		<div className="col-md-2">
			<Link to='/forms/new' style={{textDecoration: 'none'}}> 
				<Card className="plus-card">
					<CardBlock className="d-flex align-items-center justify-content-center">					
						<i className="fa fa-plus-square-o fa-5x plus-icon" aria-hidden="true"></i>
					</CardBlock>
				</Card>
			</Link>
		</div>
	</div>;

export default FormsTable;
