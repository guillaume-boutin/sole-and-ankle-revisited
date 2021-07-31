/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import {COLORS, QUERIES, WEIGHTS} from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import {X} from "react-feather";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <DismissButton onClick={onDismiss}>
          <X />
        </DismissButton>

        <Filler />

        <Nav>
          <a href="/sale">Sale</a>

          <a href="/new">New&nbsp;Releases</a>

          <a href="/men">Men</a>

          <a href="/women">Women</a>

          <a href="/kids">Kids</a>

          <a href="/collections">Collections</a>
        </Nav>

        <Footer>
          <a href="/terms">Terms and Conditions</a>

          <a href="/privacy">Privacy Policy</a>

          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: hsl(220deg 5% 40% / 0.8);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  background-color: white;
  height: 100%;
  width: 300px;
  padding: 32px 22px 32px 32px;
  display: flex;
  flex-direction: column;
`;

const DismissButton = styled.button`
  background-color: transparent;
  padding: 16px;
  color: ${COLORS.gray[900]};
  border: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 0;
`;

const Nav = styled.nav`
  a {
    display: block;
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-weight: ${WEIGHTS.medium};
    font-size: ${18/16}rem;
    text-transform: uppercase;
    
    &:first-of-type {
      color: ${COLORS.secondary};
    }
    
    &:not(:first-of-type) {
      margin-top: 16px;
    }
  }
`;

const Filler = styled.div`
  flex: 1;
`

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  a {
    display: block;
    text-decoration: none;
    color: ${COLORS.gray[700]};
    font-size: ${14/16}rem;
    font-weight: ${WEIGHTS.normal};
    
    &:not(:first-of-type) {
      margin-top: 14px;
    }
  }
`;

export default MobileMenu;
