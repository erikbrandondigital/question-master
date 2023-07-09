import { styled } from 'styled-components';
import NavButton from '../buttons/NavButton';

const Navigation = () => {
    return (
        <>
            <Nav>
                <NavButton to='/' text='Dashboard' />
                <NavButton to='/answers' text='Answers' />
                <NavButton to='/final-answers' text='Final Answer' />
                <NavButton to='/account' text='Account' />
            </Nav>
        </>
    );
};

export default Navigation;

const Nav = styled.nav`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 1rem;
`;
