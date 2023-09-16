import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
        <div className="header-contents">
            <div>
                <a href="./index.html" className="header-link">ダミーサイト</a>
            </div>

            <nav className="top-nav">
                <input id="menu-toggle" type="checkbox" />
                <label className='menu-button-container' htmlFor="menu-toggle">
                    <div className='menu-button'></div>
                </label>
                <ul className="menu">
                    <li>
                        <a href="#company" className="header-link">我が社について</a>
                    </li>
                    <li>
                        <a href="#service" className="header-link">サービス</a>
                    </li>
                    <li>
                        <a href="#inquiry" className="header-link">お問い合わせ</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    );
}

export default Header;