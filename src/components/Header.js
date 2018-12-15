import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Link from './Link';

const List = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0;
	height: 48px;
`

class Header extends React.Component{
	render(){
		return (
				<Row>
					<Col lg={12}>
						<nav>
							<List>
								<Link active text="Вызов мастера" link="#" />
								<Link text="Прайс на ремонт" link="#" />
								<Link text="Наши преимущества" link="#" />								
								<Link text="Схема работы" link="#" />
								<Link text="Отзывы клиентов" link="#" />
								<Link text="Примеры работ" link="#" />
								<Link text="Контакты" link="#" />
							</List>
						</nav>
					</Col>
				</Row>
			)
	}
}

export default Header;