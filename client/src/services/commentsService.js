import  * as requester from "./requester"

const BASE_URL ="http://localhost:3030/data/comments";

export const create = async (bookId, text, email) => await requester.post(BASE_URL, {bookId, text, email});
  
export const  getAll = async (bookId) => {
  const params = new URLSearchParams({
    where: `bookId="${bookId}"`,
    load: `author=_ownerId:users`
  }); 

 return await requester.get(`${BASE_URL}?${params.toString()}`);
}
  

