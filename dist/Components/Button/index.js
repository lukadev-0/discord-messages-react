import React from 'react';
import styled from 'styled-components';
import { BoldContent } from '../../Content';
import Link from './Link';
import Emoji from '../Emoji';
var Colours;

(function (Colours) {
  Colours["white_primary"] = "hsl(235, 85.6%, 64.7%)";
  Colours["white_gray"] = "#747f8d";
  Colours["white_success"] = "hsl(139, 47.3%, 43.9%)";
  Colours["white_danger"] = "hsl(359, 82.6%, 59.4%)";
  Colours["dark_primary"] = "hsl(235, 85.6%, 64.7%)";
  Colours["dark_gray"] = "#4f545c";
  Colours["dark_success"] = "hsl(139, 47.3%, 43.9%)";
  Colours["dark_danger"] = "hsl(359, 82.6%, 59.4%)";
})(Colours || (Colours = {}));

const StyledButton = styled.button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "rdj2y6-0"
})(["margin:4px 8px 4px 0;min-width:60px;min-height:32px;opacity:", ";background:", ";border-radius:3px;border:none;display:flex;align-items:center;cursor:", ";"], props => props.disabled ? '.5' : '1', props => {
  const formattedColour = props.buttonType === 'link' || props.buttonType === 'secondary' ? 'gray' : props.buttonType;
  return props.theme.mode === 'dark' ? Colours[`dark_${formattedColour}`] : Colours[`white_${formattedColour}`];
}, props => props.disabled ? 'not-allowed' : 'pointer');
const StyledLink = styled(Link).withConfig({
  displayName: "Button__StyledLink",
  componentId: "rdj2y6-1"
})(["color:white;margin-left:5px;"]);
const StyledBoldContent = styled(BoldContent).withConfig({
  displayName: "Button__StyledBoldContent",
  componentId: "rdj2y6-2"
})(["color:white;"]);
const StyledEmoji = styled(Emoji).withConfig({
  displayName: "Button__StyledEmoji",
  componentId: "rdj2y6-3"
})(["width:1.375em;height:1.375em;"]);
const StyledEmojiBoldContent = styled(StyledBoldContent).withConfig({
  displayName: "Button__StyledEmojiBoldContent",
  componentId: "rdj2y6-4"
})(["margin-right:10px;"]);
const StyledAnchor = styled.a.withConfig({
  displayName: "Button__StyledAnchor",
  componentId: "rdj2y6-5"
})(["text-decoration:none;"]);
export const Button = props => {
  const {
    children,
    disabled,
    buttonType,
    disableContent,
    emojis
  } = props;
  return /*#__PURE__*/React.createElement(StyledAnchor, props, /*#__PURE__*/React.createElement(StyledButton, {
    disabled: disabled,
    buttonType: buttonType
  }, emojis && /*#__PURE__*/React.createElement(StyledEmoji, {
    emojis: emojis
  }), disableContent ? children : emojis ? /*#__PURE__*/React.createElement(StyledEmojiBoldContent, null, children) : /*#__PURE__*/React.createElement(StyledBoldContent, null, children), buttonType === 'link' && /*#__PURE__*/React.createElement(StyledLink, null)));
};