import styled from 'styled-components';
export const Content = styled.div.withConfig({
  displayName: "Content",
  componentId: "sc-18w2qqe-0"
})(["width:100%;word-wrap:break-word;color:", ";font-family:'Catamaran',sans-serif;overflow:auto;"], props => props.theme.mode === 'dark' ? 'white' : 'black');
export const MessageContent = styled(Content).withConfig({
  displayName: "Content__MessageContent",
  componentId: "sc-18w2qqe-1"
})(["margin-left:13px;"]);
export const BoldContent = styled(Content).withConfig({
  displayName: "Content__BoldContent",
  componentId: "sc-18w2qqe-2"
})(["font-weight:bold;"]);
export const MessageSentAt = styled(Content).withConfig({
  displayName: "Content__MessageSentAt",
  componentId: "sc-18w2qqe-3"
})(["color:", ";margin-left:8px;font-size:0.8rem;"], props => props.theme.mode === 'dark' ? '#72767d' : '#747f8d');
export const MessageAuthorName = styled(BoldContent)`
	${props => props.roleColor ? `color: ${props.roleColor}` : ''}
`;
export const MessageBotTag = styled(BoldContent).withConfig({
  displayName: "Content__MessageBotTag",
  componentId: "sc-18w2qqe-4"
})(["background:hsl(235,85.6%,64.7%);border-radius:0.1875rem;padding:0 0.275rem;font-size:0.625rem;margin-left:8px;"]);
export const EmbedTitle = styled(BoldContent).withConfig({
  displayName: "Content__EmbedTitle",
  componentId: "sc-18w2qqe-5"
})(["margin:0;"]);
export const AuthorContent = styled(BoldContent).withConfig({
  displayName: "Content__AuthorContent",
  componentId: "sc-18w2qqe-6"
})(["font-size:0.875rem;"]);
export const FooterContent = styled(Content).withConfig({
  displayName: "Content__FooterContent",
  componentId: "sc-18w2qqe-7"
})(["font-size:0.75rem;"]);
export const EmbedContent = styled(Content).withConfig({
  displayName: "Content__EmbedContent",
  componentId: "sc-18w2qqe-8"
})(["font-size:0.95rem;"]);