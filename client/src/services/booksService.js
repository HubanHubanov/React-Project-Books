import * as request from "./requester";

// const BASE_URL = "http://localhost:3030/jsonstore/books";
const BASE_URL = "http://localhost:3030/data/books";

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const books = Object.values(result);

    return books;
}

export const getOne = async (bookId) => {
    const result = await request.get(`${BASE_URL}/${bookId}`)
    return result;
}

export const create = (gameData) => request.post(`${BASE_URL}`, gameData)



                  