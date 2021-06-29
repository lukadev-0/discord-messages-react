import { Avatar } from './Avatar'
import { Background } from './Background'
import {
	Content,
	BoldContent,
	MessageContent,
	MessageAuthorName,
	MessageBotTag,
	MessageSentAt,
} from './Content'
import { Link } from './Link'
import { Message } from './Message'
import { VerifiedBotTag } from './VerifiedBotTag'
import { ThemeProvider } from 'styled-components'
import { Emoji, LinkButttonIcon, Button } from './Components'
export {
	Avatar,
	Background,
	Content,
	BoldContent,
	MessageContent,
	MessageAuthorName,
	MessageBotTag,
	MessageSentAt,
	Link,
	Message,
	VerifiedBotTag,
	ThemeProvider,
	Emoji,
	LinkButttonIcon,
	Button,
}

ThemeProvider.defaultProps = {
	theme: {
		mode: 'dark',
		buttonType: 'primary',
	},
}
