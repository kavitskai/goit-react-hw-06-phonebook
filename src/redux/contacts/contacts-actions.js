import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/add", ({ name, number }) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));
export const removeContact = createAction("contacts/remove");
export const filterContacts = createAction("contacts/filter");
