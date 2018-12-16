import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Slider from './Slider';

const Repair = styled.div`
	color: #ffffff;
	font-weight: 700;
	line-height: 50px;
	font-size: 40px;
	span {
		display: block;
		line-height: 30px;
		font-size: 24px;
	}
`
const LightText = styled.div`
	color: #ffffff;
	font-size: 18px;
	font-weight: 300;
	line-height: 28px;
	margin-top: 54px;
`

const CallButton = styled.button`
	border: none;
	border-radius: 30px;
	margin-top: 34px;
	width: 245px;
	height: 64px;
	background-color: #ffa14b;
	color: #ffffff;
	font-size: 18px;
	font-weight: bold;
	transition: background-color .3s ease-out;
	&:hover{
		background-color: #cd823d;
	}
`
class Main extends React.Component{
	render(){
		return (
				<Row>
					<Col lg={5}>
						<Repair>
							Качественный ремонт
							<span>iphone за 35 минут и гарантия 1 год</span>
						</Repair>
						<LightText>Оставьте заявку на бесплатную диагностику без очереди,
и получите защитное стекло, стоимостью 1000 рублей,
с установкой в подарок!</LightText>
						<CallButton>Отправить заявку!</CallButton>
					</Col>

					<Col lg={6} lgOfset={1}>
						<Slider />
					</Col>
				</Row>
			)
	}
}

export default Main;