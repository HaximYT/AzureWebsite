import "../styles/globals.css";

function Footer() {
    return (
        <footer className="bg-tone pt-4 pb-8 xl:pt-8">
            <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray-400 dark:text-gray-300">
                <div className="text-center sm:pt-1 flex items-center justify-center">
                    <p>Copyright © 2021 Eternity Inc. All rights reserved.</p>
                </div>
                <p className="text-center opacity-50 flex items-center justify-center sm:pt-0.5">Made with ❤ by WendoJ</p>
            </div>
        </footer>
    );
}

export default Footer;