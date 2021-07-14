import React from 'react'
import { MdExpandMore } from "react-icons/md";

import { Container, Title } from './styles'

export default function ServerName() {
	return (
		<Container>
			<Title>Servidor do Johan</Title>
			<MdExpandMore className='icon-expand'/>
		</Container>
	)
}