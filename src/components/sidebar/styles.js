import styled from "styled-components";
import { v } from "../../styles/variables";
import { Link } from "react-router-dom";

export const SSidebar = styled.div`
width= ${({ isOpen }) => (!isOpen ? `auto` : v.sidebarWidth)};
Background:${({ theme }) => theme.bg};
height:100vh;
padding:${v.lgSpacing};

position: relative;

`;

export const SSidebarButton = styled.button`
  position: absolute;
  top: ${v.xxlSpacing};
  right: ${({ isOpen }) => (isOpen ? `-16px` : `-40px`)};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.bg};
  box-shadow: 0 0 4px ${({ theme }) => theme.bg3},
    0 0 7px ${({ theme }) => theme.bg};
  display: flex;
  align-item: center;
  justify-item: center;
  cursor: pointer;

  transform: ${({ isOpen }) => (isOpen ? `rotate(180deg)` : `initial`)};
`;

export const SLogo = styled.div`
width= 52px;
img{
    max-width:100%;
    width:30px;
    height:auto;
}
cursor:pointer;
margin-bottom:${v.lgSpacing};
`;

export const SSearch = styled.div`
  background: ${({ theme }) => theme.bgAlpha};
  border: 1px solid ${({ theme }) => theme.bg3};
  border-radius: ${v.borderRadius};
  input {
    padding: 0 ${v.smSpacing};
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 14px;
    width: 100%;
    outline: none;
    border: none;
    color: inherit;
    background: transparent;
  }
  display: flex;
`;
export const SSearchIcon = styled.button`
  padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};
  display: flex;
  cursor: pointer;

  svg {
    font-size: 14px;
  }
`;

export const SDrivider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg3};
  margin: ${v.lgSpacing} 0;
`;

export const SLinkContainer = styled.div`
  background: ${({theme,isActive})=> (!isActive ? `transparent` : theme.bg3)};
  border-radius: ${v.borderRadius};
  margin: 8px 0;

  :hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
  }
`;
export const SLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${v.smSpacing} - 2px) 0;
`;
export const SLinkIcon = styled.div`
  padding: ${v.smSpacing} ${v.mdSpacing};
  display: flex;

  svg {
    font-size: 16px;
  }
`;
export const SLinkLabel = styled.span`
  display: block;
  flex: 1;
  margin-left: ${v.smSpacing};
`;
export const SLinkNotification = styled.div`
  font-size: 11px;
  padding: calc(${v.smSpacing} / 3) calc(${v.smSpacing} / 1.5);
  border-radius: calc(${v.borderRadius} / 2);
  background: ${({ theme }) => theme.primary};
  color: white;
  margin-right: ${v.smSpacing};
`;
export const STheme = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

export const SThemeLabel = styled.span`
  display: block;
  flex: 1;
`;
export const SThemeToggler = styled.button`
  margin: 0 auto;
  cursor: pointer;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: ${({ theme, isActive }) =>
    !isActive ? theme.bg3 : theme.primary};

  position: relative;
`;

export const SToggleThumb = styled.div`
  height: 18px;
  width: 18px;
  position: absolute;
  top: 0;
  bottom: 0;
  transition: 0.2s ease right;
  right: calc(100% - 18px -1px);
  border-radius: 50%;
  background: ${({ theme }) => theme.bg};
`;
