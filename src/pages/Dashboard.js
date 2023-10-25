import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import '../styles/dashboard.css';

const URL = 'https://6538f1b3a543859d1bb23e2e.mockapi.io/test';

const Dashboard = () => {

    const [films, setFilms] = useState([]);

    const getListFilm = async () => {
        const res = await axios.get(`${URL}`);
        if (res.status === 200) {
            setFilms(res.data);
        }
    }

    useEffect(() => {
        getListFilm();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm(`Are you sure that you want to delete a film with ID: ${id}`)) {
            const res = await axios.delete(`${URL}/${id}`);
            if (res.status === 200) {
                getListFilm();
                toast.success("Deleted Successfully ~");
            } else {
                toast.error("Delete: Error!");
            }
        }
    }

    return (
        <div className="film-table">
            <div className="btn-add">
                <Link to={'/add/'}>
                    <button className='add-film-btn'>ADD NEW FILM</button>
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Year</th>
                        <th>Nation</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {films && films.map((film) => (
                        <tr key={film.id}>
                            <td>{film.id}</td>
                            <td>{film.Title}</td>
                            <td><img src={film.Image} alt={film.id} /></td>
                            <td>{film.Year}</td>
                            <td>{film.Nation}</td>
                            <td>{film.Description}</td>
                            <td>
                                <Link to={`/update/${film.id}`}><button>Edit</button></Link>
                                <button onClick={() => handleDelete(film.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;