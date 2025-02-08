import { useState, useEffect, useRef } from 'react' //this file would request access for your cam & audio then we set up a stream in the react
const useMediaStream = () => {
    const [state, setState] = useState(null);
    const isStreamSet = useRef(false); // To execute the below code only once.

    useEffect(() => {
        if (typeof window === "undefined") return; // ✅ Runs only in the browser

        if (isStreamSet.current) return;
        isStreamSet.current = true;

        const initStream = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: true
                });
                console.log("Setting your stream");
                setState(stream);
            } catch (e) {
                console.error("Error in Media Navigator", e);
            }
        };
        initStream();
    }, []);

    return {
        stream: state
    };
};

export default useMediaStream