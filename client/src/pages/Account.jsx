import styled from 'styled-components';
import SettingsForm from '../components/forms/SettingsForm';

function Account() {
    return (
        <>
            <ArticleStyled>
                <Heading1Styled>Settings</Heading1Styled>
                <SectionStyled>
                    <SettingsForm />
                </SectionStyled>
            </ArticleStyled>
        </>
    );
}

export default Account;

const ArticleStyled = styled.article`
    background-color: #ffffff;
    padding: 1.5rem;
`;

const SectionStyled = styled.section`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
`;

const Heading1Styled = styled.h1`
    margin: 0 0 1.5rem 0;
    font-family: 'Roboto-Bold';
    font-size: 1rem;
    color: #252a31;
`;
