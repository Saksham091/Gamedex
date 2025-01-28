import { useEffect, useRef } from "react";
import "./loading.css";

function Loading() {
    const Box = document.getElementsByClassName("loaderBox");
    let timer = useRef()

    useEffect(() => {
        let i = 0;

        const startLoop = () => {
            clearInterval(timer.current);
            Array.from(Box).forEach((box) => {
                box.style.display = "none";
            });
            timer.current = setInterval(() => {
                if (i < 5) {
                    Box[i].style.display = "block"; 
                    i++;
                } else {
                    i = 0;
                    Array.from(Box).forEach((box) => {
                        box.style.display = "none"; 
                    });
                }
            }, 300); 
        };

       
        setTimeout(() => {
            startLoop();
        }, 300); 
        
        return () => clearInterval(timer.current);
    }, [Box]);

    return (
        <div className="container_loading">
            <div>
                <h1>Loading...</h1>
                <div className="loaderContainer">
                    <div className="loaderBox"></div>
                    <div className="loaderBox"></div>
                    <div className="loaderBox"></div>
                    <div className="loaderBox"></div>
                    <div className="loaderBox"></div>
                </div>
            </div>
        </div>
    );
}

export default Loading;
