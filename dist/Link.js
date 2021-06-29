import styled from 'styled-components';
export const Link = styled.a.withConfig({
  displayName: "Link",
  componentId: "wo9hhu-0"
})(["color:", ";cursor:pointer;:link,:visited{text-decoration:none;}:hover,:active{text-decoration:underline;}"], props => props.theme.mode === 'dark' ? 'hsl(197, 100%, 47.8%)' : 'hsl(212, 100%, 43.9%)');
export const AuthorLink = styled(Link).withConfig({
  displayName: "Link__AuthorLink",
  componentId: "wo9hhu-1"
})(["color:inherit;"]);