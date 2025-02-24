import { addImage } from "@/store/imagesSlice";
import { useAppDispatch } from "@/store/store";
import { useEffect, useRef, useState } from "react";

const useAddedCards = () => {
    const timer = useRef<NodeJS.Timeout | null>(null);
    const dispatch = useAppDispatch()
    const [isLoading, setiILoading] = useState(false)
    const addedCards = () => {
        setiILoading(true)
        timer.current = setTimeout(() => {
            dispatch(addImage());
            setiILoading(false)

        }, 1000);
    };

    useEffect(() => {
        return () => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
        };
    }, []);

    return { addedCards, isLoading }
}
export default useAddedCards