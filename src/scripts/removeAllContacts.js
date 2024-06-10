import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    const updetedContacts = [];
    await fs.writeFile(PATH_DB, JSON.stringify(updetedContacts));
    console.log('All contacts clear');
  } catch (error) {
    console.log(error);
  }
};

await removeAllContacts();
