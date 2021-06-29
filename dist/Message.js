import React from 'react';
import styled from 'styled-components';
import { MessageAvatar } from './Avatar';
import { MessageBotTag, MessageAuthorName, MessageContent, MessageSentAt } from './Content';
import { VerifiedBotTag } from './VerifiedBotTag';
const Container = styled.div.withConfig({
  displayName: "Message__Container",
  componentId: "sc-1akdsde-0"
})(["display:flex;flex-direction:row;padding-bottom:14px;"]);
var AvatarType;

(function (AvatarType) {
  AvatarType[AvatarType["blurple"] = 0] = "blurple";
  AvatarType[AvatarType["grey"] = 1] = "grey";
  AvatarType[AvatarType["green"] = 2] = "green";
  AvatarType[AvatarType["orange"] = 3] = "orange";
  AvatarType[AvatarType["red"] = 4] = "red";
  AvatarType[AvatarType["pink"] = 5] = "pink";
})(AvatarType || (AvatarType = {}));

const FlexContainer = styled.div.withConfig({
  displayName: "Message__FlexContainer",
  componentId: "sc-1akdsde-1"
})(["display:flex;"]);
const InlineFlexContainer = styled.div.withConfig({
  displayName: "Message__InlineFlexContainer",
  componentId: "sc-1akdsde-2"
})(["display:inline-flex;align-items:baseline;"]);
const VerifiedBot = styled(VerifiedBotTag).withConfig({
  displayName: "Message__VerifiedBot",
  componentId: "sc-1akdsde-3"
})(["align-self:center;"]);
export const Message = ({
  children,
  avatar,
  authorName,
  components,
  at,
  parseDate = date => {
    const isToday = new Date().getDate() === date.getDate();
    const isYesterday = new Date().getDate() - date.getDate() === 1;
    const properDate = isToday || isYesterday ? `${isToday ? 'Today' : 'Yesterday'} at ${date.getHours()}:${date.getMinutes()}` : `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    return properDate;
  },
  roleColor,
  bot
}) => {
  const url = avatar in AvatarType ? `https://cdn.discordapp.com/embed/avatars/${AvatarType[avatar]}.png` : avatar;
  const date = parseDate(at);
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(MessageAvatar, {
    src: url
  }), /*#__PURE__*/React.createElement(MessageContent, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MessageAuthorName, {
    as: "span",
    roleColor: roleColor
  }, authorName), bot && /*#__PURE__*/React.createElement(MessageBotTag, {
    as: "span"
  }, /*#__PURE__*/React.createElement(InlineFlexContainer, null, bot?.verified && /*#__PURE__*/React.createElement(VerifiedBot, null), bot?.label ?? 'BOT')), /*#__PURE__*/React.createElement(MessageSentAt, {
    as: "span"
  }, date)), children, /*#__PURE__*/React.createElement("div", null, components?.map((actionrow, i) => /*#__PURE__*/React.createElement(FlexContainer, {
    key: i
  }, actionrow.map((component, index) => /*#__PURE__*/React.createElement("span", {
    key: index
  }, component)))))));
};