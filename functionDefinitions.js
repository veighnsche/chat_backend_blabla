const functionDefinitions = [
  {
    name: 'createBook',
    description: 'Function to create a new book',
    parameters: {
      type: 'object',
      properties: {
        'newBook': {
          type: 'object',
          description: 'The book object to be created',
          properties: {
            'id': {
              type: 'string',
              description: 'The ID of the new book',
            },
            'title': {
              type: 'string',
              description: 'The title of the new book',
            },
            'author': {
              type: 'string',
              description: 'The author of the new book',
            },
            'isbn': {
              type: 'string',
              description: 'The ISBN of the new book',
            },
          },
        },
      },
      required: ['newBook'],
    },
  },
  {
    name: 'readAllBooks',
    description: 'Function to read all books',
    parameters: {
      type: 'object',
      properties: {},
    },
  },
  {
    name: 'readBookById',
    description: 'Function to read a book by its ID',
    parameters: {
      type: 'object',
      properties: {
        'bookId': {
          type: 'string',
          description: 'The ID of the book to read',
        },
      },
      required: ['bookId'],
    },
  },
  {
    name: 'updateBookById',
    description: 'Function to update a book by its ID',
    parameters: {
      type: 'object',
      properties: {
        'bookId': {
          type: 'string',
          description: 'The ID of the book to update',
        },
        'title': {
          type: 'string',
          description: 'The new title of the book (optional)',
        },
        'author': {
          type: 'string',
          description: 'The new author of the book (optional)',
        },
        'isbn': {
          type: 'string',
          description: 'The new ISBN of the book (optional)',
        },
      },
      required: ['bookId', 'updatedBook'],
    },
  },
  {
    name: 'deleteBookById',
    description: 'Function to delete a book by its ID',
    parameters: {
      type: 'object',
      properties: {
        'bookId': {
          type: 'string',
          description: 'The ID of the book to delete',
        },
      },
      required: ['bookId'],
    },
  },
  {
    name: 'searchBooks',
    description: 'Function to search for books by title or author',
    parameters: {
      type: 'object',
      properties: {
        'query': {
          type: 'string',
          description: 'The search query (title or author)',
        },
      },
      required: ['query'],
    },
  },
]
