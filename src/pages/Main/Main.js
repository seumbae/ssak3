import React, { useEffect } from "react";
import "../../styles/main.css";

function Main () {

    useEffect(() => {
        //부모 태그의 css 없애기
        const root = document.getElementById('root');
        root.classList.remove("root-container");
    }, []);

    return (
        <div className="container">메ss인 페이지 개발</div>
    )
}

export default Main;