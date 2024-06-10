import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    const newContacts = Array.from({ length: number }, createFakeContact);
    const updatedContacts = contacts.concat(newContacts);
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts), 'utf-8');
    console.log(`Added ${number} new contacts.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

await generateContacts(5);
