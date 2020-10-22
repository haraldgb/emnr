import React, { useCallback, useEffect, RefObject,useState, useRef } from 'react';
import emnrLogo from '../assets/images/emnr_long.svg';
import { useHistory} from 'react-router-dom';
import styled from "styled-components";
import {Hamburger} from './Hamburger';
import {HrLineWhite} from '../styles/Containers';



const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  left: 0;
  height: 100%; 
  width: 100%;
  position: fixed;
  background-color: ${({ theme }) => theme.blue};
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  transition: transform 0.4s ease-in-out; //ease-ease-in-out
  transform: ${({ open }) =>
    open ? "translateX(65%)" : "translateX(100%)"}; 

  @media (max-width: 576px) {
    transform: ${({ open }) =>
    open ? "translateX(0%)" : "translateX(100%)"}; 
  }
`;

const StyledLink = styled.a`
  margin: 7px 0 7px 5%;

  width: fit-content;
  font-size: 18px;
  font-family: gilroyxbold;
  color: ${({ theme }) => theme.white}; 
  float: left;
  cursor: pointer;
  @media (max-width: 576px) {
    margin: 7px 0 7px 20%;
  }

  :hover {
    color: ${({ theme }) => theme.lightBlue};
  }
`;

const LogOutLink = styled(StyledLink)`
  margin-top: 10px;
  text-decoration: underline;
`;

const Logo = styled.img`
  padding: 10px;
  cursor: pointer;
  width: 100px;
`;



const useOnClickOutside = (
    ref: RefObject<HTMLDivElement>,
    closeMenu: () => void
  ) => {
    useEffect(() => {
      const listener = (event: MouseEvent) => {
        if (
          ref.current &&
          event.target &&
          ref.current.contains(event.target as Node)
        ) {
          return;
        }
        closeMenu();
      };
  
      document.addEventListener("mousedown", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
      };
    }, [ref, closeMenu]);
  };




export const Menu: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const node = useRef<HTMLDivElement>(null);
    const close = () => setOpen(false);
  
    useOnClickOutside(node, () => setOpen(false));

    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/'), [history]);
    const handleClickMe = useCallback(() => history.push('/me'), [history]);
  

      //
      // 
  
    return (
      <div ref={node}>

        <StyledMenu open={open}>
          <StyledLink onClick={handleOnClick}>Gå til forsiden</StyledLink>
          <StyledLink onClick={handleClickMe}>Gå til min side</StyledLink>
          <StyledLink onClick={() => close()}>Om EMNR</StyledLink>
          <HrLineWhite/>
          <LogOutLink onClick={() => close()}>Logg ut</LogOutLink>
        </StyledMenu>
        <Hamburger open={open} setOpen={setOpen} />
  
  
      </div>
    );
  };
  
