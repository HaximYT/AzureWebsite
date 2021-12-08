import "../styles/globals.css";

function Header() {
  return (
    <div className="pb-12 disappear">
      <div className="items-center justify-between flex bg-tone px-12 py-4 my-4 mx-auto shadow-2xl w-11/12 min-w-2xl">
        <div className="text-2xl text-white font-semibold inline-flex items-center">
          <span>Eternity</span>
        </div>
        <div className="items-center flex-wrap">
          <ul className="flex text-white">
            <li className="ml-5 px-2 py-1 hover:text-gray-200 focus:opacity-70">
              <a href="/exploits">Exploits</a>
            </li>
            <li className="ml-5 px-2 py-1 hover:text-gray-200 focus:opacity-70">
              <a href="/scripts">Scripts</a>
            </li>
            <li className="ml-5 px-2 py-1 hover:text-gray-200 focus:opacity-70">
              <a href="/functions">Functions</a>
            </li>
            <li className="ml-5 px-3 py-1 group border border-gray-300 rounded text-white hover:text-gray-200 focus:opacity-70">
              <a href="https://link-to.net/326216/EternityKey">Get Key</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
