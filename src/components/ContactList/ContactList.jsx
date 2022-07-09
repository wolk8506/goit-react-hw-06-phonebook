import s from 'components/ContactList/ContactList.module.css';
import actions from '../../redux/contacts/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';

export default function ContactList() {
  const visibleContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onRemoveContact = text => dispatch(actions.removeContact(text));

  return (
    <ul className={s.list}>
      {visibleContacts.map(c => (
        <li className={s.item} key={c.id}>
          <p>
            {c.name} : {c.number}
          </p>
          <button
            className={s.btn}
            type="button"
            onClick={() => {
              onRemoveContact(c.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
