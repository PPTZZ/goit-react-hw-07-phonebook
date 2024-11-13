import { Collapse} from '@mui/material';
import Contact from './Contact';
import { useSelector } from 'react-redux';
import { TransitionGroup } from 'react-transition-group';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.value);
  const searchWord = useSelector(state => state.search.value);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchWord.toLowerCase())
  );

  return (
      <TransitionGroup>
        {filteredContacts.map(contact => {
          const { id, name, number } = contact;
          return (
            <Collapse key={id}>
              <Contact name={name} number={number} id={id}/>
            </Collapse>
          );
        })}
      </TransitionGroup>
  );
};
export default ContactList;
