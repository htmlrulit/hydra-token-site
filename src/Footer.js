import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    padding: 2rem 1rem;
    background-color: #000;
    color: #fff;
    text-align: center;
    border-top: 1px solid #00ff00;

    @media (max-width: 768px) {
        padding: 1rem 0.5rem;
    }
`;

const FooterText = styled.p`
  margin: 0.5rem 0;
`;

const FooterLink = styled.a`
  color: #00ff00;
  text-decoration: none;
  margin: 0.5rem 0;
  display: block;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin: 0.3rem 0;
  }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>Официальный канал токена $HYDRA</FooterText>
            <FooterLink href="https://t.me/farmizen" target="_blank" rel="noopener noreferrer">Утилити — @farmizen</FooterLink>
            <FooterLink href="https://t.me/Hydra_Radar" target="_blank" rel="noopener noreferrer">Мониторинг — @Hydra_Radar</FooterLink>
            <FooterLink href="https://t.me/+24j6_NYbMy5lYTEy" target="_blank" rel="noopener noreferrer">Форум — t.me/+24j6_NYbMy5lYTEy</FooterLink>
            <FooterLink href="https://tonhydra.com" target="_blank" rel="noopener noreferrer">Сайт — tonhydra.com</FooterLink>
        </FooterContainer>
    );
};

export default Footer;
