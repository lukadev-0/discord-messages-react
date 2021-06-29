import styled from 'styled-components';
export const Avatar = styled.img.withConfig({
  displayName: "Avatar",
  componentId: "sc-196h8os-0"
})(["border-radius:50%;width:40px;height:40px;"]);
export const MessageAvatar = styled(Avatar).withConfig({
  displayName: "Avatar__MessageAvatar",
  componentId: "sc-196h8os-1"
})(["margin-top:6px;"]);