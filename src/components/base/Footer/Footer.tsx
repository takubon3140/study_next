import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="flex justify-center items-center p-5 mt-10 border-t border-gray-300 bg-gray-100">
            <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} takumi okubo. All rights reserved.</p>
        </footer>
    );
}

export default Footer;