import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	align-items: center;

	padding: 4px 16px;
	background-color: transparent;
	margin-right: 4px;

	&.mention{
		background-color: rgba(249, 168, 57, .1);
		border-left: 2px solid ${props => props.theme.mentionDetail};

		padding-left: 14px;
	}

	& + div{
		margin-top: 13px;
	}

	.mention-text{
		color: ${props => props.theme.discord};
		cursor: pointer;

		margin-right: 3px;

		&:hover{
			text-decoration: underline;
		}
	}
`;

export const Avatar = styled.div`
	width: 40px;
	height: 40px;

	background: url(${props => props.imgsrc});
	background-size: 100%;
	background-position: center;
	
	border-radius: 50%;
`;

export const Header = styled.div`
	display: flex;
	align-items: center;

	margin-bottom: 4px;

	> strong{
		color: ${props => props.theme.white};
		font-size: 16px;
	}

	> span {
		margin-left: 6px;

    	background-color: ${props => props.theme.discord};
    	color: ${props => props.theme.white};

    	border-radius: 4px;
    	padding: 3px 5px;
    	text-transform: uppercase;

    	font-weight: bold;
    	font-size: 11px;
	}

	> time {
		color: ${props => props.theme.gray};
		margin-left: 6px;
		font-size: 13px;
		line-height: 1.375rem;
	}
`;

export const Content = styled.span`
	text-align: left;
	color: #dcddde;

	font-weight: 400;
	font-size: 1rem;
    line-height: 1.375rem;
`;

export const Message = styled.div`
	min-height: 40px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	margin-left: 17px;

`;

export const Mention = styled.span`
	color: ${props => props.theme.link};
	cursor: pointer;
	&:hover{
		text-decoration: underline;
	}
	margin-right: 3px;
	font-weight: 300;
`;
