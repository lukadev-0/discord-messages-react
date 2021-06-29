import styled from 'styled-components';
import { EmbedContent, EmbedTitle, AuthorContent, FooterContent, BoldContent, Content } from '.././Content';
import { EmbedAvatar } from '.././Avatar';
import { Link, AuthorLink } from '../Link';
import defaultParseDate from '.././defaultParseDate';
const FlexContainer = styled.div.withConfig({
  displayName: "Embed__FlexContainer",
  componentId: "sc-1o1nfcl-0"
})(["display:flex;"]);
const AuthorContainer = styled.div.withConfig({
  displayName: "Embed__AuthorContainer",
  componentId: "sc-1o1nfcl-1"
})(["display:flex;align-items:center;margin-top:4px;"]);
const EmbedBase = styled.div.withConfig({
  displayName: "Embed__EmbedBase",
  componentId: "sc-1o1nfcl-2"
})(["padding:0.5rem 1rem 1rem 0.75rem;background:", ";max-width:520px;border-radius:4px;border-color:", ";border-left:4px solid;"], props => props.theme.mode === 'dark' ? '#2f3136' : '#f2f3f5', props => props.embedColour);
const EmbedThumbnail = styled.img.withConfig({
  displayName: "Embed__EmbedThumbnail",
  componentId: "sc-1o1nfcl-3"
})(["border-radius:4px;width:80px;height:60px;margin-left:auto;"]);
const EmbedImage = styled.img.withConfig({
  displayName: "Embed__EmbedImage",
  componentId: "sc-1o1nfcl-4"
})(["border-radius:4px;width:100%;margin-top:20px;"]);
const EmbedField = styled.div.withConfig({
  displayName: "Embed__EmbedField",
  componentId: "sc-1o1nfcl-5"
})(["display:", ";margin-right:150px;"], props => props.inline ? 'inline-block' : 'initial');
export const Embed = props => {
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
    parseDate: possibleParseDate
  } = props;
  const parseDate = possibleParseDate ?? defaultParseDate;
  return /*#__PURE__*/React.createElement(EmbedBase, props, author && /*#__PURE__*/React.createElement(AuthorContainer, null, author.icon && /*#__PURE__*/React.createElement(EmbedAvatar, {
    src: author.icon
  }), /*#__PURE__*/React.createElement(AuthorContent, null, author.url ? /*#__PURE__*/React.createElement(AuthorLink, {
    href: author.url
  }, author.name) : author.name)), /*#__PURE__*/React.createElement(FlexContainer, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EmbedTitle, {
    as: "h3"
  }, url ? /*#__PURE__*/React.createElement(Link, null, title) : title), /*#__PURE__*/React.createElement(EmbedContent, null, children)), thumbnail && /*#__PURE__*/React.createElement(EmbedThumbnail, {
    src: thumbnail
  })), /*#__PURE__*/React.createElement("div", null, fields?.map((v, i) => /*#__PURE__*/React.createElement(EmbedField, {
    inline: v.inline,
    key: i
  }, /*#__PURE__*/React.createElement(BoldContent, null, v.name), /*#__PURE__*/React.createElement(Content, null, v.value)))), image && /*#__PURE__*/React.createElement(EmbedImage, {
    src: image
  }), (footer || timestamp) && /*#__PURE__*/React.createElement(AuthorContainer, null, footer?.icon && /*#__PURE__*/React.createElement(EmbedAvatar, {
    src: footer?.icon
  }), /*#__PURE__*/React.createElement(FooterContent, null, footer ? timestamp ? `${footer.text} • ${parseDate(new Date(timestamp))}` : footer.text : timestamp ? parseDate(new Date(timestamp)) : null)));
};