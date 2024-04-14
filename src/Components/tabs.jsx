// import React from 'react';

const Tabs = () => {
    return (
        <div>
            <div className="flex overflow-x-auto overflow-y-hidden ml-5 flex-nowrap  dark:text-gray-800 border-b-4 mr-5 border-black">
                <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600">
                    <span>Read Books</span>
                </a>
                <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900">
                    <span>Wishlist Books</span>
                </a>
            </div>
        </div>
    );
};

export default Tabs;