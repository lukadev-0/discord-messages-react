import styled from 'styled-components';
export const Link = styled.a.withConfig({
  displayName: "Link",
  componentId: "wo9hhu-0"
})(["color:", ";:link,:visited{text-decoration:none;}:hover,:active{text-decoration:underline;}"], props => props.theme.mode === 'dark' ? 'hsl(197, 100%, 47.8%)' : 'hsl(212, 100%, 43.9%)');