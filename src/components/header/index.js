import React from "react";
import { StyledResponsiveVideoEmbed, PrimaryAction, Notification, SlantedBackground, Heading, RightColumn, LeftColumn, TwoColumn, HeroContainer, OpacityOverlay, Container, StyledHeader } from './styles'
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
            <Notification>We have now launched operations in Europe.</Notification>
            <Heading>
              <span>Hire the best</span>
              <br />
              <SlantedBackground>Marketing Team.</SlantedBackground>
            </Heading>
            <PrimaryAction>Read Customer Stories</PrimaryAction>
          </LeftColumn>
          <RightColumn>
            <StyledResponsiveVideoEmbed
              url="//player.vimeo.com/video/374265101?title=0&portrait=0&byline=0&autoplay=0&responsive=1"
              background="transparent"
            />
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
