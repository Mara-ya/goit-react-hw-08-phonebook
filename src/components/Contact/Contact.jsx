import { ButtonContacts } from 'components/AdditionalStyles/ButtonContacts.styled';
import PropTypes from 'prop-types';
import { Wrapper } from "./Contact.styled";

export const Contact = ({contact, onDelete}) => {
    const { id, name, number } = contact;
    return (
        <Wrapper>
            <snap>{name}: {number}</snap>
            <ButtonContacts type='button' onClick={() => onDelete(id)}>
                Delete
            </ButtonContacts>
        </Wrapper>
    )
}

Contact.propType = {
    contact: PropTypes.object.isRequired,
}