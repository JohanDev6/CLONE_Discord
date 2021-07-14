import styled from 'styled-components';

export const Container = styled.div`

	grid-area: UL;

	display: flex;
	// align-items: center;
	flex-direction: column;

	background-color: ${props => props.theme.secondary};

	padding: 3px 6px 0 16px;

	max-height: calc(100vh - 46px);
	overflow-y: scroll;

	::-webkit-scrollbar{
		width: 4px;
		background-color: ${props => props.theme.secondary};
	}
	::-webkit-scrollbar-thumb{
		background-color: ${props => props.theme.tertiary};
		border-radius: 4px;
	}	

	::-webkit-scrollbar-track{
		background-color: ${props => props.theme.secondary};
	}
`;

export const Role = styled.span`
	margin-top: 20px;

	text-transform: uppercase;
	font-size: 12px;
	font-weight: 500;
	color: ${props => props.theme.gray};
`;
