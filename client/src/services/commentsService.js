import  * as requester from "./requester"

const BASE_URL ="http://localhost:3030/data/comments";

export const create = async (bookId, text) => await requester.post(BASE_URL, {bookId, text});
  
export const  getAll = async (bookId) => {
  const params = new URLSearchParams({
    where: `bookId="${bookId}"`
  })

  console.log(`${BASE_URL}?${params.toString()}`);
  

 return await requester.get(`${BASE_URL}?${params.toString()}`);
}
  

