import styled from 'styled-components'

export const Content = styled.div`
	width: 100%;
	word-wrap: break-word;
	color: ${(props) => (props.theme.mode === 'dark' ? 'white' : 'black')};
	font-family: 'Catamaran', sans-serif;
	overflow: auto;
`

export const MessageContent = styled(Content)`
	margin-left: 16px;
`

export const BoldContent = styled(Content)`
	font-weight: bold;
`

export const MessageSentAt = styled(Content)`
	color: ${(props) => (props.theme.mode === 'dark' ? '#72767d' : '#747f8d')};
	margin-left: 8px;
	font-size: 0.8rem;
`

export const MessageAuthorName = (styled as any)(BoldContent)`
	${(props: any) => (props.roleColor ? `color: ${props.roleColor}` : '')}
`

export const MessageBotTag = styled(BoldContent)`
	background: hsl(235, 85.6%, 64.7%);
	border-radius: 0.1875rem;
	padding: 0 0.275rem;
	font-size: 0.625rem;
	margin-left: 8px;
`
