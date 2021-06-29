# discord-messages-react
Simulate Discord chats in React

![Example of components](./example.png)

<details>

<summary>Example</summary>

```tsx
import { Background, Message, Button } from 'discord-messages-react'

export default function MyChat() {
    return <ThemeProvider theme={{ mode: 'dark' }}>
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
				<Message
					avatar="blurple"
					authorName="Someone"
					at={new Date(Date.now())}
				>
					!profile <Mention>@daimond113</Mention>
				</Message>
				<Message
					at={new Date(Date.now())}
					avatar="grey"
					authorName="Botty the bot"
					bot={{ verified: true, label: 'BOTTY' }}
					components={[
						[
							<Embed
								title="daimond113's information"
								embedColour="#FFF"
								author={{
									name: "daimond113's code hangout",
									icon: 'https://cdn.discordapp.com/icons/799341812686127134/3175a94805b36ae4edc834578ca06c3e',
									url: 'https://discord.gg/hTanCT5JMp',
								}}
								url="daimond113.com"
								footer={{
									text: 'Requested by Someone',
									icon: 'https://cdn.discordapp.com/embed/avatars/0.png',
								}}
								timestamp={Date.now()}
								thumbnail="https://avatars.githubusercontent.com/u/72147841?v=4"
								image="https://pbs.twimg.com/profile_banners/1358033505628938245/1617267075/600x200"
								fields={[
									{
										name: 'Status',
										value: 'Member',
										inline: true,
									},
									{
										name: 'Permissions',
										value: 'Admin',
										inline: true,
									},
									{
										name: 'Money',
										value: '1000000$',
									},
								]}
							>
								Here!
							</Embed>,
						],
					]}
				></Message>
			</Background>
		</ThemeProvider>
}
```

</details>

# Problems

## My font isn't the same as the picture!
Don't forget to include this in your HTML: 


```html
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@300;600&display=swap" rel="stylesheet">
```

