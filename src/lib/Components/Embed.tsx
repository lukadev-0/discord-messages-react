import React from 'react'
import styled from 'styled-components'
import {
	EmbedContent,
	EmbedTitle,
	AuthorContent,
	FooterContent,
	BoldContent,
	Content,
} from '.././Content'
import { EmbedAvatar } from '.././Avatar'
import { Link, AuthorLink } from '../Link'
import defaultParseDate from '.././defaultParseDate'

interface EmbedProps {
	embedColour: string
	title: string
	url?: string
	timestamp?: number
	footer?: {
		text: string
		icon?: string
	}
	image?: string
	thumbnail?: string
	author?: {
		name: string
		icon?: string
		url?: string
	}
	fields?: {
		name: string
		value: string
		inline?: boolean
	}[]

	parseDate?: Function
}

const FlexContainer = styled.div`
	display: flex;
`

const AuthorContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 4px;
`

const EmbedBase = styled.div<EmbedProps>`
	padding: 0.5rem 1rem 1rem 0.75rem;
	background: ${(props) =>
		props.theme.mode === 'dark' ? '#2f3136' : '#f2f3f5'};
	max-width: 520px;
	border-radius: 4px;
	border-color: ${(props) => props.embedColour};
	border-left: 4px solid;
`

const EmbedThumbnail = styled.img`
	border-radius: 4px;
	width: 80px;
	height: 60px;
	margin-left: auto;
`

const EmbedImage = styled.img`
	border-radius: 4px;
	width: 100%;
	margin-top: 20px;
`

interface EmbedFieldProps {
	inline?: boolean
}

const EmbedField = styled.div<EmbedFieldProps>`
	display: ${(props) => (props.inline ? 'inline-block' : 'initial')};
	margin-right: 150px;
`

export const Embed: React.FC<EmbedProps> = (props) => {
	const {
		author,
		url,
		title,
		children,
		footer,
		timestamp,
		thumbnail,
		image,
		fields,
		parseDate: possibleParseDate,
	} = props
	const parseDate = possibleParseDate ?? defaultParseDate
	return (
		<EmbedBase {...props}>
			{author && (
				<AuthorContainer>
					{author.icon && <EmbedAvatar src={author.icon} />}
					<AuthorContent>
						{author.url ? (
							<AuthorLink href={author.url}>{author.name}</AuthorLink>
						) : (
							author.name
						)}
					</AuthorContent>
				</AuthorContainer>
			)}
			<FlexContainer>
				<div>
					<EmbedTitle as="h3">{url ? <Link>{title}</Link> : title}</EmbedTitle>
					<EmbedContent>{children}</EmbedContent>
				</div>
				{thumbnail && <EmbedThumbnail src={thumbnail} />}
			</FlexContainer>
			<div>
				{fields?.map((v, i) => (
					<EmbedField inline={v.inline} key={i}>
						<BoldContent>{v.name}</BoldContent>
						<Content>{v.value}</Content>
					</EmbedField>
				))}
			</div>
			{image && <EmbedImage src={image} />}
			{(footer || timestamp) && (
				<AuthorContainer>
					{footer?.icon && <EmbedAvatar src={footer?.icon} />}
					<FooterContent>
						{footer
							? timestamp
								? `${footer.text} • ${parseDate(new Date(timestamp))}`
								: footer.text
							: timestamp
							? parseDate(new Date(timestamp))
							: null}
					</FooterContent>
				</AuthorContainer>
			)}
		</EmbedBase>
	)
}
