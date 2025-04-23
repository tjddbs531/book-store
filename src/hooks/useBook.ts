import { useEffect, useState } from "react"
import { BookDetail } from "../models/book.model";
import { fetchBook, likeBook, unlikeBook } from "../api/books.api";
import { useAuthStore } from "../store/authStore";
import { useAlert } from "./useAlert";

export const useBook = (bookId: string | undefined) => {
    const [book, setBook] = useState<BookDetail | null>(null);
    const showAlert =useAlert();

    const { isloggedIn } = useAuthStore();
    const likeToggle = () => {

        if(!isloggedIn){
            showAlert('로그인이 필요합니다.');
            return;
        }
    

        if (!book) return;

        if(book.liked) {
            //라이크 상태 -> 언라이크 실행
            unlikeBook(book.id).then(() => {
                setBook({
                    ...book,
                    liked : false,
                    likes: book.likes - 1,
                })
            })
        } else{
            likeBook(book.id).then(() => {
                setBook({
                    ...book,
                    liked: true,
                    likes: book.likes + 1,
                });
            });
        };
    };
    useEffect(() => {
        if(!bookId) return;
        
        fetchBook(bookId).then((book) => {
            setBook(book);
        })
    },[bookId])
    return { book, likeToggle };
}