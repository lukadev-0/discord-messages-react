import React from 'react'
import styled from 'styled-components'
import { BoldContent } from '../../Content'
import Link from './Link'
import Emoji from '../Emoji'

type ButtonType = 'primary' | 'secondary' | 'link' | 'success' | 'danger'

interface StyledButtonProps extends React.HTMLProps<HTMLAnchorElement> {
	buttonType: ButtonType
}

interface ButtonProps extends StyledButtonProps {
	disableContent?: boolean
	emojis?: string
}

enum Colours {
	white_primary = 'hsl(235, 85.6%, 64.7%)',
	white_gray = '#747f8d',
	white_success = 'hsl(139, 47.3%, 43.9%)',
	white_danger = 'hsl(359, 82.6%, 59.4%)',
	dark_primary = 'hsl(235, 85.6%, 64.7%)',
	dark_gray = '#4f545c',
	dark_success = 'hsl(139, 47.3%, 43.9%)',
	dark_danger = 'hsl(359, 82.6%, 59.4%)',
}

const StyledButton = styled.button<StyledButtonProps>`
	margin: 4px 8px 4px 0;
	min-width: 60px;
	min-height: 32px;
	opacity: ${(props) => (props.disabled ? '.5' : '1')};
	background: ${(props) => {
		const formattedColour =
			props.buttonType === 'link' || props.buttonType === 'secondary'
				? 'gray'
				: props.buttonType
		return props.theme.mode === 'dark'
			? (Colours as any)[`dark_${formattedColour}`]
			: (Colours as any)[`white_${formattedColour}`]
	}};
	border-radius: 3px;
	border: none;
	display: flex;
	align-items: center;
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`

const StyledLink = styled(Link)`
	color: white;
	margin-left: 5px;
`

const StyledBoldContent = styled(BoldContent)`
	color: white;
`

const StyledEmoji = styled(Emoji)`
	width: 1.375em;
	height: 1.375em;
`

const StyledEmojiBoldContent = styled(StyledBoldContent)`
	margin-right: 10px;
`

const StyledAnchor = styled.a`
	text-decoration: none;
` as any

export const Button: React.FC<ButtonProps> = (props) => {
	const { children, disabled, buttonType, disableContent, emojis } = props
	return (
		<StyledAnchor {...props}>
			<StyledButton disabled={disabled} buttonType={buttonType}>
				{emojis && <StyledEmoji emojis={emojis} />}
				{disableContent ? (
					children
				) : emojis ? (
					<StyledEmojiBoldContent>{children}</StyledEmojiBoldContent>
				) : (
					<StyledBoldContent>{children}</StyledBoldContent>
				)}
				{buttonType === 'link' && <StyledLink />}
			</StyledButton>
		</StyledAnchor>
	)
}
