import * as request from "./requester";

const BASE_URL = "http://localhost:3030/data/books";

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const books = Object.values(result);

    return books;
}

export const getOne =  (bookId) => {
    const result =  request.get(`${BASE_URL}/${bookId}`)
    return result;
}

export const create = async (bookData) => {
    const createdBook = await request.post(`${BASE_URL}`, bookData);
    
    return createdBook;
}

export const del = (bookId) => request.del(`${BASE_URL}/${bookId}`)


                  