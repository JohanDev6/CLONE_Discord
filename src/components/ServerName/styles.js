import styled from 'styled-components'

export const Container = styled.div`
	// grid-area: SN;

	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 0 11px 0 16px;
	background-color: ${props => props.theme.secondary};

	box-shadow: rgba(0,0,0,.2) 0px 1px 0px 0px;
	z-index: 2;

	.icon-expand{
		width: 28px;
		height: 28px;

		color: ${props => props.theme.white};
		cursor: pointer;
	}
`;

export const Title = styled.h1`
	font-size: 1rem;
	font-weight: bold;
	color: ${props => props.theme.white}
`;