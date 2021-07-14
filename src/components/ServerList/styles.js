import styled from 'styled-components'

export const Container = styled.section`
	grid-area: SL;

	display: flex;
	flex-direction: column;
	align-items: center;

	background-color: ${props => props.theme.tertiary};
	padding: 11px 0px;
	max-height: 100vh;

	overflow-y: scroll;

	::-webkit-scrollbar{
		display: none;
	}

`;

export const Separator = styled.div`
	width: 32px;
	border-bottom: 2px solid ${props => props.theme.quaternary};

	margin-bottom: 8px;

`;