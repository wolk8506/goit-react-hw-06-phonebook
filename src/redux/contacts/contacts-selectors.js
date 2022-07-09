export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = state => {
  const normalizeFilter = getFilter(state);
  const contacts = getContacts(state);
  return contacts.filter(c => c.name.toLowerCase().includes(normalizeFilter));
};
