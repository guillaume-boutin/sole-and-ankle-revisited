import React from 'react';
import styled from 'styled-components/macro';

import {COLORS, QUERIES, WEIGHTS} from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import {Menu, Search, ShoppingBag} from "react-feather";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>
  const onMenuClick = (e) => {
    setShowMobileMenu(true);
  }

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>

        <Nav>
          <NavLink href="/sale">Sale</NavLink>

          <NavLink href="/new">New&nbsp;Releases</NavLink>

          <NavLink href="/men">Men</NavLink>

          <NavLink href="/men">Men</NavLink>

          <NavLink href="/men">Men</NavLink>

          <NavLink href="/women">Women</NavLink>

          <NavLink href="/kids">Kids</NavLink>

          <NavLink href="/collections">Collections</NavLink>
        </Nav>

        <Side />

        <IconsWrapper>
          <UnstyledButton>
            <ShoppingBag />

            <VisuallyHidden>Open cart</VisuallyHidden>
          </UnstyledButton>

          <UnstyledButton>
            <Search />

            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>

          <UnstyledButton onClick={onMenuClick}>
            <Menu />

            <VisuallyHidden>Menu</VisuallyHidden>
          </UnstyledButton>
        </IconsWrapper>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  //height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  
  overflow-x: scroll;
  
 @media(${QUERIES.tabletAndDown}) {
   align-items: center;
 }
  
  @media(${QUERIES.mobileAndDown}) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;
  
  @media(${QUERIES.tabletAndDown}) {
    flex: revert;
  }
`

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    8.9vw - 4.25rem,
    3rem
  );
  margin: 0px 48px;
  
  @media(${QUERIES.tabletAndDown}) {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const IconsWrapper = styled.div`
  display: none;
  
  @media(${QUERIES.tabletAndDown}) {
    display: flex;
    gap: 40px;
  }
  
  @media(${QUERIES.mobileAndDown}) {
    gap: 24px;
  }
`;

export default Header;
