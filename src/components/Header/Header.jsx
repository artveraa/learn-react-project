import {Link} from 'react-router-dom';
import styled from "styled-components";
import colors from "../../utils/style/colors";
import {useState} from "react";
import Logo from "../../assets/images/logo.svg";

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
          props.$isFullLink &&
          `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`

function Header() {
    return (
        <HeaderContainer>
            <Link to={'/'}><img src={Logo} alt="logo"/></Link>

            <nav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelances">Profils</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
            </nav>
        </HeaderContainer>
    )
}

export default Header;