import { FormEvent } from 'react';

export function searchOnGoogle(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  const data = Object.fromEntries(formData);

  const searchValue = data.search as string;
  const formattedValue = searchValue.split(' ').join('+');

  const searchUrl = 'https://www.google.com/search?q=';

  window.open(`${searchUrl}${formattedValue}`);
}
