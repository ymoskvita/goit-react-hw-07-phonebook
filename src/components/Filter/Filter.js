import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../../redux/contacts/contacts-actions';
import { InputStyled } from '../Phonebook.styled';

export default function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <label>Find contacts by name
      <InputStyled type="text" value={filter} onChange={(e) => dispatch(actions.changeFilter(e.currentTarget.value))} />
    </label>
  );
};
