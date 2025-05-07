const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: '2022-02-02',
      category: 'Sport',
      author: 'John Doe'
    },
    {
      id: '2',
      title: 'Article title 2',
      shortDescription: 'Short description of the article 2...',
      content: 'Main content of the article 2',
      publishedDate: '2025-02-02',
      category: 'News',
      author: 'Piotr Lecicki'
    },
    {
      id: '3',
      title: 'Article title 3',
      shortDescription: 'Short description of the article 3...',
      content: 'Main content of the article 3',
      publishedDate: '2025-02-02',
      category: 'Movies',
      author: 'Grzegorz Krzeslo'
    },
  ],

  categories: ['Sport', 'News', 'Movies'],
};

export default initialState;