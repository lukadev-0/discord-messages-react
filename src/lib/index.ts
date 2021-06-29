import { Avatar, MessageAvatar, EmbedAvatar } from './Avatar'
import { Background } from './Background'
import {
	Content,
	BoldContent,
	MessageContent,
	MessageAuthorName,
	MessageBotTag,
	MessageSentAt,
	EmbedTitle,
	AuthorContent,
	FooterContent,
	EmbedContent,
} from './Content'
import { Link, AuthorLink } from './Link'
import { Message } from './Message'
import { VerifiedBotTag } from './VerifiedBotTag'
import { ThemeProvider } from 'styled-components'
import { Emoji, LinkButttonIcon, Button, Embed } from './Components'
import defaultParseDate from './defaultParseDate'
import { Mention } from './Mention'
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
	Embed,
	MessageAvatar,
	EmbedAvatar,
	EmbedTitle,
	AuthorContent,
	FooterContent,
	EmbedContent,
	defaultParseDate,
	AuthorLink,
	Mention,
}

ThemeProvider.defaultProps = {
	theme: {
		mode: 'dark',
		buttonType: 'primary',
	},
}
