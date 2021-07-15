import styled from 'styled-components';

export const Container = styled.div`

	grid-area: CD;

	display: flex;
	flex-direction: column;
	justify-content: space-between;


	background-color: ${props => props.theme.primary};

	padding: 3px 6px 0 16px;

	max-height: calc(100vh - 46px);

	.icon-input{
		height: 20px;
		width: 20px;
		color:  ${props => props.theme.gray};
	}

	.chat-info{
		width: 96%;

		height: auto;

		display: flex;
		justify-content: center;
		align-items: center;

		flex-direction: column;

		margin-top: 33px;

		h2{
			color: ${props => props.theme.white};
			font-weight: bold;

			font-size: 2.4rem;
			text-align: center;
		}

		span{
			margin: 10px 0px;
			color: #dcddde;
			font-weight: 300;
			font-size: 1.2rem;
			text-align: center;
		}

		p{
			color: #dcddde;
			font-weight: 300;

			font-size: 1.1rem;
			text-align: center;
		}
	}
`;

export const Messages = styled.div`
	padding: 20px 0px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	max-height: calc(100vh - 46px - 68px);
	overflow-y: scroll;


	::-webkit-scrollbar{
		width: 8px;
	}

	::-webkit-scrollbar-thumb{
		background-color: ${props => props.theme.tertiary};
		border-radius: 4px
	}

	::-webkit-scrollbar-track{
		background-color: ${props => props.theme.secondary};
	}
`;

export const Input = styled.input`
	width: 100%;
	height: 44px;

	background-color: ${props => props.theme.chatInput};
	color: #dcddde;
	margin-bottom: 20px;

	padding: 0 10px 0 56px;
	border-radius: 7px;

	position: relative;

	&::placeholder{
		color: ${props => props.theme.gray};
	}

	~ svg{
		position: relative;
		top: calc(-50% + 3.5px ) ;
		left: 14px;
		transition: 180ms easy-in-out
	}
`;

export const InputWrapper = styled.div`
	width: 100%;

	padding: 0 16px;
`;


export const Separator = styled.div`
	width: 100%;
	height: 1px;

	background-color: ${props => props.theme.gray};
	margin: 13px 0px;
`
