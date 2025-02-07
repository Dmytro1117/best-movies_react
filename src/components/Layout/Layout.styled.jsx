import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
`;

export const Content = styled.div`
  flex: 1;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 2px solid #3a97e8;
`;

export const Navigation = styled.nav``;

export const Header = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  width: 1200px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 14px;
  font-weight: 600;
  font-size: 22px;
  color: #191d1e;

  &.active {
    color: #007bff;
  }

  &:hover {
    color: #007bff;
  }
`;

export const SearchLogo = styled.img`
  width: 50px;
`;

export const Logo = styled(NavLink)`
  margin: auto 10px;
`;
