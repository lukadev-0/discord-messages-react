import styled from 'styled-components';
export const Background = styled.div.withConfig({
  displayName: "Background",
  componentId: "nvf4hf-0"
})(["background:", ";width:800px;height:600px;border-radius:4px;border:4px solid ", ";overflow:auto;> *{margin-left:10px;}"], props => props.theme.mode === 'dark' ? '#36393f' : '#fff', props => props.theme.mode === 'dark' ? '#2f3136' : '#f2f3f5');