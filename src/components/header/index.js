import React from "react";
import {
  PrimaryAction,
  SlantedBackground, Heading, LeftColumn, TwoColumn,
  HeroContainer, OpacityOverlay, Container, StyledHeader
} from './styles'
import { NavLink, NavLinks, PrimaryLink } from "../headers/light.js";

export default function Home() {

  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">
        Sobre nós
      </NavLink>
      <NavLink href="#">
        Visite
      </NavLink>
      <NavLink href="#">
        Imigre
      </NavLink>
      <NavLink href="#">
        Estude
      </NavLink>
      <NavLink href="#">
        Trabalhe
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/#">
        Login
      </PrimaryLink>
    </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <TwoColumn>
          <LeftColumn>
            <Heading>
              <span>O caminho mais curto entre</span>
              <br />
              <SlantedBackground>seu sonho e seu novo destino no mundo!</SlantedBackground>
            </Heading>
            <PrimaryAction>Read Customer Stories</PrimaryAction>
          </LeftColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
