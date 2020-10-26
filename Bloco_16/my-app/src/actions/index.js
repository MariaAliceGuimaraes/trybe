export const SAVEFORM = 'SAVEFORM'
export const saveForm = (name, value) => ({
  type: 'SAVEFORM',
  [name]: value,
});
