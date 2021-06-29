import React from 'react'
import { render } from 'react-dom'
import { Background, ThemeProvider, Message, Button } from './lib'

render(
	<React.StrictMode>
		<ThemeProvider theme={{ mode: 'dark' }}>
			<Background>
				<Message
					avatar="blurple"
					authorName="Someone"
					at={new Date(2021, 5, 27)}
				>
					Hi guys!
				</Message>
				<Message
					avatar="https://avatars.githubusercontent.com/u/72147841?v=4"
					authorName="daimond113"
					at={new Date('June 28, 2021 08:50')}
				>
					Welcome!
				</Message>
				<Message
					at={new Date(Date.now() - (86_400_000 + 100_000))}
					avatar="pink"
					authorName="Owner"
					roleColor="hsl(235, 85.6%, 64.7%)"
				>
					Hello there!
				</Message>
				<Message
					at={new Date(Date.now())}
					avatar="orange"
					authorName="Discord_Bot"
					components={[
						[
							<Button
								disabled={false}
								buttonType="link"
								href="https://example.com"
							>
								Read the rules?
							</Button>,
						],
					]}
					bot={{}}
				>
					Did you
				</Message>
				<Message
					at={new Date(Date.now())}
					avatar="red"
					authorName="MEE7"
					bot={{ verified: true }}
				>
					Welcome to this wonderful server!
				</Message>
			</Background>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
