import styled from 'styled-components'
import { Content } from './Content'

const MentionBase = styled(Content)`
	background: ${(props) =>
		props.theme.mode === 'dark'
			? 'hsla(235, 85.6%, 64.7%, 0.3)'
			: 'hsla(235, 85.6%, 64.7%, 0.15)'};
	border-radius: 3px;
	padding: 0 2px;
	transition: background 50ms ease-out, color 50ms ease-out;
	color: ${(props) =>
		props.theme.mode === 'dark'
			? 'hsl(236, 83.3%, 92.9%)'
			: 'hsl(235, 66.7%, 58.8%)'};

	:hover {
		color: ${(props) =>
			props.theme.mode === 'dark' ? 'hsl(236, 83.3%, 92.9%)' : '#fff'};
		background: hsl(235, 85.6%, 64.7%);
	}
`

export const Mention = (props: any) => (
	<MentionBase as="span" {...props}></MentionBase>
)
