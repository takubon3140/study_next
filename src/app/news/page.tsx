"use client";
import { useEffect, useState } from "react"
import { profileSection } from "./profileSection";
import { skillSection } from "./skillSection";
import workSection from "./workSection";

export default function About() {

    useEffect(() => {
        const urlHash = window.location.hash;
        if (urlHash) {
            window.scrollTo(0, 0);
            setTimeout(() => {
                scrollToAnker(urlHash);
            }, 100);
        }
    }, []);

    const scrollToAnker = (hash: string) => {
        const target = document.querySelector(hash) as HTMLElement;
        console.log(target);

        if (target) {
            const position = target.offsetTop - 80;
            window.scrollTo({
                top: position,
                behavior: 'smooth'
            });
        }
    };

    const handleAnchorClick = (event: any) => {
        const hash = event.target.getAttribute('href');
        event.preventDefault(); // デフォルトのアンカーの動作を止める
        scrollToAnker(hash);

        window.history.pushState(null, '', hash); // ハッシュを手動でURLに追加する
    };


    return (
        <>
            <header className="">
                <div className="header-contents">
                    <div>
                        <a href="./index.html" className="header-link">紹介ページ</a>
                    </div>
                    <nav className="top-nav">
                        <input id="menu-toggle" type="checkbox" />
                        <label id="menu-toggle" className='menu-button-container'>
                            <div className='menu-button'></div>
                        </label>
                        <ul className="menu">
                            <li>
                                <a href="#profile" className="header-link" onClick={handleAnchorClick} >profile</a>
                            </li>
                            <li>
                                <a href="#skill" className="header-link" onClick={handleAnchorClick}>skill</a>
                            </li>
                            <li>
                                <a href="#work" className="header-link" onClick={handleAnchorClick}>work</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="main-content px-10">
            
                {profileSection}
                {skillSection}
                {workSection()}
                
            </main>

        </>
    )
}