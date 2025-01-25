import { useEffect } from "react";
import "./loading.css"

function Loading() {
    const Box = document.getElementsByClassName("loaderBox");

    useEffect(() => {
        setTimeout(() => {
            let i = 0;
            setInterval(() => {
                if (i < 5) {
                    i++;
                    Box[i - 1].style.display = "block";
                }
            }, 700)
        }, 700)
    })

    return (
        <div className="container_loading">
            <div>
                <h1>
                    Loading...
                </h1>
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