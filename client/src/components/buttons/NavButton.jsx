import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

const LinkStyled = styled(Link)`
    font-family: 'Roboto-Medium';
    font-size: 0.875rem;
    text-decoration: none;
    color: #000000;
    text-align: center;
    &:hover,
    :focus,
    :focus-visible {
        color: #0172cb;
    }
`;
