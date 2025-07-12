import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import Stat from '../stats/Stat';
import FullWidthButton from '../buttons/FullWidthButton';

import { IconContext } from 'react-icons';
import {
    LiaCheckCircleSolid,
    LiaTimesCircleSolid,
    LiaQuestionCircleSolid,
    LiaTrophySolid
} from 'react-icons/lia';

const StatsCard = (props) => {
    return (
        <>
            <SectionStyled>
                <Heading3Styled>{props.title}</Heading3Styled>
                <ParagraphStyled>{props.description}</ParagraphStyled>
                <DivStyled>
                    <IconContext.Provider
                        value={{ size: 30, style: { display: 'block' } }}
                    >
                        <Stat
                            icon={
                                <LiaCheckCircleSolid
                                    color='#28a138'
                                    role='img'
                                    aria-label='Green circle with a checkmark.'
                                />
                            }
                            value={props.correctAnswers}
                        />
                        <Stat
                            icon={
                                <LiaTimesCircleSolid
                                    color='#d21c1c'
                                    role='img'
                                    aria-label='Red circle with a checkmark.'
                                />
                            }
                            value={props.incorrectAnswers}
                        />
                        <Stat
                            icon={
                                <LiaQuestionCircleSolid
                                    color='#252a31'
                                    role='img'
                                    aria-label='Black circle with a question mark.'
                                />
                            }
                            value={props.attemptedAnswers}
                        />
                        <Stat
                            icon={
                                <LiaTrophySolid
                                    color='#ffc700'
                                    role='img'
                                    aria-label='A yellow trophy.'
                                />
                            }
                            value={props.successRate}
                        />
                    </IconContext.Provider>
                </DivStyled>
                <FullWidthButton to={props.ctaTo} text={props.cta} />
            </SectionStyled>
        </>
    );
};

StatsCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cta: PropTypes.string.isRequired,
    ctaTo: PropTypes.string.isRequired,
    correctAnswers: PropTypes.string,
    incorrectAnswers: PropTypes.string,
    attemptedAnswers: PropTypes.string,
    successRate: PropTypes.string
};

export default StatsCard;

const Heading3Styled = styled.h3`
    margin: 0;
    font-family: 'Roboto-Bold';
    font-size: 1rem;
    color: #252a31;
`;

const ParagraphStyled = styled.p`
    margin: 0;
    font-family: 'Roboto-LightItalic';
    font-size: 0.875rem;
    color: #252a31;
`;

const DivStyled = styled.div`
    margin: 1.5rem 0;
`;

const SectionStyled = styled.section`
    flex: 1;
    padding: 1.5rem;
    border: 1px solid #e8edf1;
    border-radius: 0.1875rem;
`;
