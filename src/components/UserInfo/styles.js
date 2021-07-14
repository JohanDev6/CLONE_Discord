import styled from 'styled-components';

export const Container = styled.div`

	grid-area: UI;

	display: flex;
	justify-content: space-between;
	align-items: center;

	background-color: ${props => props.theme.quaternary};

	padding: 10px;

	box-shadow: rgba(0,0,0,.2) 0px 1px 0px 0px;


	.icon-settings, .icon-mic, .icon-headphone{
		height: 20px;
		width: 20px;

		color: ${props => props.theme.white};
		cursor: pointer;

		opacity: 0.7;
		transition: opacity 0.2s;

		&:hover{
			opacity: 1;
		}
	}
`;

export const Profile = styled.div`
	display: flex;
	align-items: center;

	flex
`;

export const Icons = styled.div`

	display: flex;
	align-items: center;

	> svg:not(:first-child){
		margin-left: 7px
	}
`;

export const Avatar = styled.div`
	height: 32px;
	width: 32px;
	border-radius: 50%;

	background: url(${props => props.imgsrc});
	background-size: 100%;
	background-position: center;

	position: relative;

	&::after{
		position: absolute;
		content: '';
		height: 8px;
		width: 8px;
		border-radius: 50%;

		background-color: ${props => props.theme.notification};
		border: 4px solid ${props => props.theme.quaternary};

		bottom: -4px;
		right: -4px;
	}
`;

export const UserData = styled.div`

	display: flex;
	align-items: flex-start;
	flex-direction: column;

	margin-left: 8px;

	> strong{
		display: block;
		font-size: 13px;
		color: ${props => props.theme.white};
	}	

	> span{
		font-size: 13px;
		color: ${props => props.theme.gray};
	}
`;
