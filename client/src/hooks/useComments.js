import { useEffect, useState } from "react";
import * as commentsService from "../services/commentsService"

export function useCreateComment() {
    const createHandler = (bookId, comment) => commentsService.create(bookId, comment);    
    return createHandler;
}

export function useGetAllComments(bookId) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await commentsService.getAll(bookId);
            console.log("useComments, allComents", result);
            
            setComments(result);   
        })();
    }, [bookId])

    return [comments, setComments];
}

