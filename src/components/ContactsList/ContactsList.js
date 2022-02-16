import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BallTriangle } from "react-loader-spinner";
import { fetchContacts, deleteContact } from '../../redux/contacts/contacts-operation';
import IconButton from "../IconButton/IconButton";
import { List, Item } from '../Phonebook.styled';
import { ReactComponent as DeleteIcon } from '../../icons/close.svg'

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLocaleLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter),
  );
  return visibleContacts;
};

export default function ContactsList() {
  const contacts = useSelector(state => getVisibleContacts(state.contacts.items, state.contacts.filter));
  const isLoading = useSelector(state => state.contacts.loading)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <>
      {isLoading
        && <BallTriangle
              color="#000"
              height={50}
              width={50} />}
    <List>
      {contacts.map(({ id, name, phone }) => (
        <Item key={id}>
          <>
            <p>{name}</p>
            <p>{phone}</p>
            <IconButton onClick={() => dispatch(deleteContact(id))} aria-label="Delete contact">
              <DeleteIcon width="15" height="15" />
            </IconButton>
          </>
        </Item>
      ))}
      </List>
    </>
  );
};
