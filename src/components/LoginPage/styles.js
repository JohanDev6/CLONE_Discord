import styled from 'styled-components'

export const Container = styled.main`
	background: url('https://i.redd.it/y1ostvqnr4711.jpg');
	background-position: center;
	background-repeat: no-repeat;

	background-size: 130%;

	width: 100%;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const InputGroup = styled.div`

	width: 100%;

	display: flex;
	margin-top: 42px;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;

	> label{
		margin: 5px 0px;
		font-size: 0.9rem;
		color: #dcddde;
		text-transform: uppercase;
	}

	> p{
		color: ${props => props.theme.notification};
		font-size: 1rem;
		font-weight: 300;
		margin: 3px 0px;
	}
`;

export const Input = styled.input`

	height: 44px;
	width: 100%;
	background-color: ${props => props.theme.chatInput};
	border-radius: 4px;

	color: #dcddde;
	padding-left: 8px;
`;

export const Form = styled.form`
	width: 440px;
	height: auto;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	padding: 22px 17px;

	border-radius: 4px;
	background-color: ${props => props.theme.primary};

	> h1{
		font-size: 2.2rem;
		font-weight: bold;
		color: ${props => props.theme.white};
	}

	> p{
		margin-top: 8px;
		font-size: 1.1rem;
		color: ${props => props.theme.gray};
	}
`;

export const Button = styled.button`
	width: 100%;
	height: 44px;

	border-radius: 4px;
	background-color: ${props => props.theme.discord};
	color: ${props => props.theme.white};
	cursor: pointer;

	margin: 12px 0px;
	margin-top: 42px;
`;