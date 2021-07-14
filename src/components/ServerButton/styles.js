import styled from 'styled-components';

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	flex-shrink: 0;

	width: 48px;
	height: 48px;

	margin-bottom: 8px;
	border-radius: 50%;

	background-color: ${props => props.isHome? props.theme.rocketseat : props.theme.primary};

	cursor: pointer;
	position: relative;

	transition: border-radius .2s, background-color .2s;

	img{
		height: 50%;
		width: 50%;
		object-fit: cover;
	}

	> .mention-bagde{
		position: absolute;

		bottom: -4px;
		right: -4px;

		display: flex;
		justify-content: center;
		align-items: center;

		width: auto;
    	height: 24px;

    	padding: 0px 4px;

		border-radius: 43%;
		border: 4px solid ${props => props.theme.quaternary};
		background-color: ${props => props.theme.notification};

		color: ${props => props.theme.white};

		> span{
    		font-size: 11px;
			line-height: 16px;
			font-weight: 500;

			text-align: center;
    		-webkit-box-flex: 0;
		}
	}

	&::before{
		width: 9px;
		height: 9px;

		position: absolute;

		transition: all 0.2s;

		left: -17px;
		top: calc(50% - 4.5px;);

		background-color: ${props => props.theme.white};
		border-radius: 50%;

		content: '';
		display: ${props => props.hasNotifications? 'inline' : 'none'}
	}

	&.active, &:hover{
		border-radius: 16px;
		background-color: ${props => props.isHome? props.theme.rocketseat : props.theme.discord}
	}

	&.active{
		&::before{
			height: 84%;
			border-radius: 9px;
		}
	}

	&:hover:not(.active){
		&::before{
			height: 25px;
			border-radius: 9px;
		}
	}
`;
