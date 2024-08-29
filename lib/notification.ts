import { EmailContact } from '@/types';

export async function addContact(contact: EmailContact) {
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.EMAIL_PROVIDER_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  };

  const response = await fetch(
    'https://app.loops.so/api/v1/contacts/create',
    options,
  );
  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Failed to add contact: ${response.status} ${errorBody}`);
  }
  return response.json();
}
