import React from 'react'
import styled from 'styled-components'
import { MessageAvatar } from './Avatar'
import {
	MessageBotTag,
	MessageAuthorName,
	MessageContent,
	MessageSentAt,
} from './Content'
import { VerifiedBotTag } from './VerifiedBotTag'
import defaultParseDate from './defaultParseDate'
const Container = styled.div`
	display: flex;
	flex-direction: row;
	padding-bottom: 14px;
`

enum AvatarType {
	blurple = 0,
	grey = 1,
	green = 2,
	orange = 3,
	red = 4,
	pink = 5,
}

interface MessageProps {
	avatar: AvatarType | string
	authorName: string
	components?: any[][]
	at: Date
	bot?: {
		label?: string
		verified?: boolean
	}
	parseDate?: Function
	roleColor?: string
}

const FlexContainer = styled.div`
	display: flex;
`

const InlineFlexContainer = styled.div`
	display: inline-flex;
	align-items: baseline;
`

const VerifiedBot = styled(VerifiedBotTag)`
	align-self: center;
`

export const Message: React.FC<MessageProps> = ({
	children,
	avatar,
	authorName,
	components,
	at,
	parseDate = defaultParseDate,
	roleColor,
	bot,
}) => {
	const url =
		avatar in AvatarType
			? `https://cdn.discordapp.com/embed/avatars/${
					AvatarType[avatar as AvatarType]
			  }.png`
			: avatar
	const date = parseDate(at)
	return (
		<Container>
			<MessageAvatar src={url as string} />
			<MessageContent>
				<div>
					<MessageAuthorName as="span" roleColor={roleColor}>
						{authorName}
					</MessageAuthorName>
					{bot && (
						<MessageBotTag as="span">
							<InlineFlexContainer>
								{bot?.verified && <VerifiedBot />}
								{bot?.label ?? 'BOT'}
							</InlineFlexContainer>
						</MessageBotTag>
					)}
					<MessageSentAt as="span">{date}</MessageSentAt>
				</div>
				{children}
				<div>
					{components?.map((actionrow, i) => (
						<FlexContainer key={i}>
							{actionrow.map((component, index) => (
								<span key={index}>{component}</span>
							))}
						</FlexContainer>
					))}
				</div>
			</MessageContent>
		</Container>
	)
}
