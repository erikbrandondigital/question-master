import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavButton = (props) => {
    return (
        <>
            <LinkStyled to={props.to} aria-label={props.text}>
                {props.text}
            </LinkStyled>
        </>
    );
};

NavButton.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default NavButton;

const LinkStyled = styled(NavLink)`
    font-family: 'Roboto-Medium';
    font-size: 0.875rem;
    text-decoration: none;
    color: #252a31;
    text-align: center;
    user-select: none !important;
    -moz-user-select: none !important;
    -webkit-user-select: none !important;
    -ms-user-select: none !important;
    &:hover,
    &.active {
        color: #0172cb;
    }
`;
