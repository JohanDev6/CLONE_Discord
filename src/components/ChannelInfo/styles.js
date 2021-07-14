import styled from 'styled-components'

export const Container = styled.section`
	grid-area: CI;

	display: flex;
	align-items: center;

	padding: 0px 17px;
	background-color: ${props => props.theme.primary};
	box-shadow: rgba(0,0,0,.2) 0px 1px 0px 0px;
	z-index: 2;

	.icon-hashtag{
		width: 24px;
		height: 24px;

		color: ${props => props.theme.symbol}
	}
`;	

export const Title = styled.h1`
	margin-left: 9px;

	font-size:16px;
	font-weight: bold;
	color: ${props => props.theme.white}
`;

export const Separator = styled.div`
	height: 24px;
	width: 1px;

	background-color: ${props => props.theme.white};
	opacity: 0.2;

	margin: 0 13px;
`;

export const Description = styled.span`
	
	font-size: 15px;
	color: ${props => props.theme.gray};
	font-weight: 400;
`;