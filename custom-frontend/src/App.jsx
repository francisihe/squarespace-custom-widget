import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // Set the state from url parameters using useEffect and useState
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  // Get the URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const keywordFromUrl = urlParams.get('keyword');
  const categoryFromUrl = urlParams.get('category');

  useEffect(() => {
    // Set the state with the URL parameters
    setKeyword(keywordFromUrl);
    setCategory(categoryFromUrl);
  }, [keywordFromUrl, categoryFromUrl]);

  return (
    <>
      <div>
        The keyword obtained: {keywordFromUrl} <br />
        The Category from the URL: {categoryFromUrl}
      </div>
      <br />
      <br />
      <div>
        The keyword from state: {keyword} <br />
        The Category from state: {category}
      </div>
    </>
  )
}

export default App
