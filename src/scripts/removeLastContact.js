import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    contacts.splice(contacts.length - 1);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts));
    console.log('Last contact delete');
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
