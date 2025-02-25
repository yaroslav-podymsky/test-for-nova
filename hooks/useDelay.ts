import { useEffect, useRef, useState } from "react";

const useDelay = () => {
    const timer = useRef<NodeJS.Timeout | null>(null);
    const [isLoading, setiILoading] = useState(false)

    const delay = async () => {
        setiILoading(true);
        await new Promise((resolve) => {
            timer.current = setTimeout(() => {
                resolve({});
            }, 2000);
        });

        setiILoading(false);
    };

    useEffect(() => {
        return () => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
        };
    }, []);

    return { delay, isLoading }
}
export default useDelay