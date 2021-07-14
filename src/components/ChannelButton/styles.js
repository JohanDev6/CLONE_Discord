import styled from 'styled-components';

export const Container = styled.button`
	
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 5px 3px;
	border-radius: 5px;

	background-color: transparent;

	transition: background-color .2s;
	cursor: pointer;

	> div {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	> div span{
		font-size: 15px;
		color: ${props => props.theme.senary};
		margin-left: 5px;
	}

	.icons-group{
		opacity: 0;
	}

	&:hover, &.active{
		background-color: ${props => props.theme.quinary};

		> div span{
			color: ${props => props.theme.white}
			
		}

		.icons-group{
			opacity: 1;
		}
	}

	.icon-settings, .icon-invite{
		height: 16px;
		width: 16px;
		cursor: pointer;

		transition: color .2s;

		color: ${props => props.theme.symbol};

		&:hover{
			color: ${props => props.theme.white};
		}
	}

	.icon-settings{
		margin-left: 4px;
	}

	.icon-hashtag{
		height: 20px;
		width: 20px;

		color: ${props => props.theme.symbol};
	}
`;