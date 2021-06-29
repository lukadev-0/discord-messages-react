import styled from 'styled-components'

export const Background = styled.div`
	background: ${(props) => (props.theme.mode === 'dark' ? '#36393f' : '#fff')};
	width: 800px;
	height: 600px;
	border-radius: 4px;
	border: 4px solid
		${(props) => (props.theme.mode === 'dark' ? '#2f3136' : '#f2f3f5')};
`
