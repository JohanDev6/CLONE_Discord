import styled from 'styled-components'

export const Container = styled.div`
	grid-area: CL;

	display: flex;
	flex-direction: column;

	padding: 24px 9.5px 0 16px;

	background-color: ${props => props.theme.secondary};

	.icon-add{
		height: 21px;
		width: 21px;

		cursor: pointer;
		color: ${props => props.theme.symbol}
	}
`;

export const Category = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-bottom: 6px;

	span{
		text-transform: uppercase;
		color: ${props => props.theme.gray};
		font-weight: 500;
		font-size: 12px
	}
`;