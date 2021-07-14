import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		list-style: none;
		border: 0;
		box-sizing: border-box;
	}

	html, body, #root{
		height: 100%;
	}

	*, button, input{
		font-family: 'Roboto', sans-sefif;
	}
`