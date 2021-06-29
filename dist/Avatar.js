import styled from 'styled-components';
export const Avatar = styled.img.withConfig({
  displayName: "Avatar",
  componentId: "sc-196h8os-0"
})(["border-radius:50%;"]);
export const MessageAvatar = styled(Avatar).withConfig({
  displayName: "Avatar__MessageAvatar",
  componentId: "sc-196h8os-1"
})(["margin-top:6px;width:40px;height:40px;"]);
export const EmbedAvatar = styled(Avatar).withConfig({
  displayName: "Avatar__EmbedAvatar",
  componentId: "sc-196h8os-2"
})(["width:24px;height:24px;margin-right:5px;"]);