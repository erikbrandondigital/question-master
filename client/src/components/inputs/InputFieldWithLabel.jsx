import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const InputFieldWithLabel = (props) => {
    return (
        <>
            <LabelStyled htmlFor={props.name}>
                {props.label}
                <InputStyled
                    type={props.type}
                    id={props.name}
                    name={props.name}
                    placeholder={props.label}
                />
            </LabelStyled>
        </>
    );
};

InputFieldWithLabel.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default InputFieldWithLabel;

const LabelStyled = styled.label`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto-Medium';
    font-size: 0.875rem;
    color: #252a31;
`;

const InputStyled = styled.input`
    padding: 0.75rem;
    outline: none;
    border: 1px solid #bac7d5;
    border-radius: 0.1875rem;
    font-family: 'Roboto-ThinItalic';
    font-size: 0.875rem;
    color: #697d95;
    &:focus {
        border: 1px solid #0172cb;
        box-shadow: 2px 2px 0px 0px #e8f4fd, 2px -2px 0px 0px #e8f4fd,
            -2px 2px 0px 0px #e8f4fd, -2px -2px 0px 0px #e8f4fd;
    }
`;
