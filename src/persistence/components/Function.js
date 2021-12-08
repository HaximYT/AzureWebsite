import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import lua from 'react-syntax-highlighter/dist/esm/languages/hljs/lua';
import dark from '../styles/dark';

SyntaxHighlighter.registerLanguage('lua', lua);

function Function ({ code, description }) {
  return (
    <div className="w-11/12 items-center justify-center mx-auto">
      <SyntaxHighlighter language={lua} style={dark} className="code-block">
        {code}
      </SyntaxHighlighter>
      <p className="pt-2 pb-6 text-base">• {description}</p>
    </div>
  );
}

export default Function;