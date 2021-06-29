import { Background } from './Background';
import { ThemeProvider } from 'styled-components';
import { Message } from './Message';
import { Avatar, MessageAvatar } from './Avatar';
import { Content, BoldContent, MessageContent, MessageSentAt } from './Content';
import { Link } from './Link';
export { Background, ThemeProvider, Message, Avatar, Content, BoldContent, MessageContent, MessageAvatar, Link, MessageSentAt };
export * from './Components';
ThemeProvider.defaultProps = {
  theme: {
    mode: 'dark',
    buttonType: 'primary'
  }
};