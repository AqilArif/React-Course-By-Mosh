import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Counter from './components/counter'
import CountersList from './components/countersList'
import MoviesList from './components/movies'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter /> */}
    <CountersList />
    {/* <MoviesList /> */}
  </React.StrictMode>,
)
