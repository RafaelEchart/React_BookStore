const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SoFHFedlk3bcfD8UKWpr';

export const getBooks = async () => {
  const booksData = await fetch(`${API}/books`);
  const data = await booksData.json();
  return data;
};

export const newBook = async (data) => {
  await fetch(`${API}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const deleteBook = async (id) => {
  await fetch(`${API}/books/${id}`, {
    method: 'DELETE',
  });
};
