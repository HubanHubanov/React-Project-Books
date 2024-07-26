import  * as requester from "./requester"

const BASE_URL ="http://localhost:3030/jsonstore/books";

const buildUrl = (bookId) => `${BASE_URL}/${bookId}/comments`;

export const create = async (bookId, username, comment) => {
   const result = await requester.post(buildUrl(bookId), {username, comment});
    
  return result
}

export const getAll = async (bookId) => {
 const result = await requester.get(buildUrl(bookId));

 const comments = Object.values(result);

 return comments;
}