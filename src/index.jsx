import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Counter from './components/counter'
import MoviesList from './components/movies'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter /> */}
    <MoviesList />
  </React.StrictMode>,
)
