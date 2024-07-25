import * as request from "./requester";

const BASE_URl = "http://localhost:3030/jsonstore/books";

export const getAll = async () => {
    const result = await request.get(BASE_URl);

    const books = Object.values(result);

    return books
}
                      