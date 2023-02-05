import './App.css';
import { useState } from 'react';


function App() {
  const [isVisible, setVisible] = useState(null);
  const showWhy = () => setVisible(!isVisible);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='text-4xl font-bold text-gray-900 dark:text-teal-500'><code>VSCODE</code> OPENER</h1>
        {/* eslint-disable-next-line */}
        <h1 className='h-7'></h1>
        <a href='vscode://' ><button className='relative inline-flex items-center justify-center mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 p-2'><h1 className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 p-2 hover:scale-150 text-cyan-700 hover:text-teal-300 font-bold'><code>OPEN VSCODE</code></h1></button></a>
        <div>
          <button onClick={showWhy} className="hover:scale-105 duration-700 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-2xl shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 text-sky-100 dark:text-sky-200 hover:text-sky-200 hover:dark:text-teal-300">{isVisible? 'Hide' : 'Why?'}</button>
          {isVisible? <Why /> : null}
        </div>
      </header>
    </div>
  );
}

var code = "<a href='vscode://'><button>HI</button></a>"
const Why = () => <p className="bg_why_glassmorphism" style={{ width: 1000, }}>
  Why? I just want to test how to make a button that open <code className='VSCODE_P'>vscode</code> so I did <code className="bg-gray-500 rounded-lg text-yellow-200">{code}</code> and it worked also I just wanted to try to test publishing a website to github pages.
</p>;
export default App;
