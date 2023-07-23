import { styled } from 'styled-components';
import Navigation from '../navigation/Navigation';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <>
            <HeaderStyled>
                <NavLinkStyled to='/' aria-label='Dashboard'>
                    <Heading1Styled>{props.brandName}</Heading1Styled>
                    <ParagraphStyled>{props.brandSlogan}</ParagraphStyled>
                </NavLinkStyled>
                <Navigation />
            </HeaderStyled>
        </>
    );
};

Header.propTypes = {
    brandName: PropTypes.string.isRequired,
    brandSlogan: PropTypes.string.isRequired
};

export default Header;

const HeaderStyled = styled.header`
    flex: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    padding: 1.25rem 1.375rem;
    background-color: #ffffff;
    box-shadow: 0px 0px 2px 0px rgba(79, 94, 113, 0.12),
        0px 2px 4px 0px rgba(79, 94, 113, 0.11),
        0px 4px 8px 0px rgba(79, 94, 113, 0.1);
`;

const NavLinkStyled = styled(NavLink)`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`;

const Heading1Styled = styled.h1`
    margin: 0;
    font-family: 'Roboto-Black';
    font-size: 1.25rem;
    color: #252a31;
`;
const ParagraphStyled = styled.p`
    margin: 0;
    font-family: 'Roboto-LightItalic';
    font-size: 0.875rem;
    color: #252a31;
`;
