import React, { useState, useEffect } from 'react';

function MoviesList() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('movies.json')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error(error));
    }, []);

    const handleDelete = (id) => {

        const updatedMovies = movies.filter((movie) => movie.id !== id);
        
        setMovies(updatedMovies);
    };

    return (
        <React.Fragment>
            <h1 className={movies.length === 0 ? 'font-bold mb-3 m-4 text-center' : 'font-bold mb-3 m-4'}>
                {
                    movies.length === 0 ? 'There are no movies in the database.' :
                    `Showing ${movies.length} movies from the database.`
                }
            </h1>

            <div className="relative overflow-x-auto shadow-md rounded-md m-4">
                <table className="w-full text-sm text-left bg-gray-500 text-white rounded-md">
                    {movies.length > 0 && (
                        <thead className="text-xs uppercase text-white">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Id
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Genre
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    In Stock
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Year
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Rating
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                    )}

                    <tbody>
                        {movies.map((movie) => (
                            <tr key={movie.id} className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>

                                <td scope="row" className='px-6 py-4 font-medium  whitespace-nowrap dark:text-white'>
                                    {movie.id}
                                </td>

                                <td className='px-6 py-4'>{movie.title}</td>

                                <td className='px-6 py-4'>{movie.genre}</td>

                                <td className='px-6 py-4'>{movie.numberInStock}</td>

                                <td className='px-6 py-4'>{movie.year}</td>

                                <td className='px-6 py-4'>{movie.rating}</td>

                                <td className='px-6 py-4'>
                                    <button
                                        type='button'
                                        className='bg-red-500 rounded-md px-5 py-2 text-white'
                                        onClick={() => handleDelete(movie.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}

export default MoviesList;