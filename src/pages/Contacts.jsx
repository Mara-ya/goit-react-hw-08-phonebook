import { useDispatch, useSelector } from "react-redux";
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from "components/ContactForm/ContactForm";
import { getContacts, getFilter } from "redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from 'redux/contacts/operations';
import { Box } from "components/Box";

export default function App () {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => 
    {dispatch(fetchContacts());
  }, [dispatch])


  function getFilteredContacts () {
    const normalizedFilter = filter.toLowerCase();
    return contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    )
  }

  return (
    <Box as='div' p={3}>
      <Box as='div' p={3}>
        <h1>Phonebook</h1>
        <ContactForm />
      </Box>
      <Box as='div' p={3}>
        <h2>Contacts</h2>
        {contacts.items.length === 0 && 
          <p>Contacts are empty</p>
        }
        {contacts.items.length > 0 && 
          <>
            <Filter />
            <ContactList 
              filtered={getFilteredContacts()} 
            />
          </>
        }
      </Box>
    </Box>
  )
};