import React from 'react';
import styled from 'styled-components';
import twemoji from 'twemoji';
const StyledSpan = styled.span.withConfig({
  displayName: "Emoji__StyledSpan",
  componentId: "kp6e4k-0"
})(["img.emoji{height:1.375em;width:1.375em;margin:0 0.05em 0 0.1em;vertical-align:-0.1em;margin-right:5px;margin-left:8px;}"]);
export default function Emoji({
  emojis
}) {
  return /*#__PURE__*/React.createElement(StyledSpan, {
    dangerouslySetInnerHTML: {
      __html: twemoji.parse(emojis)
    }
  });
}