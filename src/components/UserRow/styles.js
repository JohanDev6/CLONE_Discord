import styled from 'styled-components'

export const User = styled.div`
	margin-top: 5px;
	padding: 5px;

	cursor: pointer;

	display: flex;
	align-items: center;

	border-radius: 4px;

	background: transparent;

	transition: background 0.2s;

    &:hover{
    	background-color: rgba(255,255,255,0.1);
    }

    .user-info > strong{
    	margin-left: 13px;
    	font-weight: 500;
    	opacity: 0.7;

    	color: ${props => props.theme.white};

    	white-space: nowrap;
    	text-overflow: ellipsis;
    	overflow: hidden;
    }

    > span{
    	margin-left: 9px;

    	background-color: ${props => props.theme.discord};
    	color: ${props => props.theme.white};

    	border-radius: 4px;
    	padding: 4px 5px;
    	text-transform: uppercase;

    	font-weight: bold;
    	font-size: 11px;
    }

    .user-info{
    	display: flex;
    	justify-content: center;
    	flex-direction: column;
    	align-items: flex-start;
    }

    .user-info > p{
    	margin-left: 13px;
    	font-weight: 300;
    	opacity: 0.7;
    	font-size: 0.7rem;
    	text-overflow: ellipsis;
    	white-space: nowrap;
    	overflow: hidden;

    	color: ${props => props.theme.white};
    }
`;

export const Avatar = styled.div`
	flex-shrink: 0;

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

		background-color: ${props => props.color || 'red'};
		border: 4px solid ${props => props.theme.quaternary};

		bottom: -4px;
		right: -4px;
	}
`;