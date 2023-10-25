import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../styles/formAddEdit.css';

const URL = 'https://6538f1b3a543859d1bb23e2e.mockapi.io/test';

const initialState = {
    Title: '',
    Image: '',
    Year: '',
    Nation: '',
    Description: '',
    Trailer: ''
}

const error_init = {
    Title_err: '',
    Image_err: '',
    Year_err: '',
    Nation_err: '',
    Description_err: '',
    Trailer_err: ''
}

const FormAddEdit = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [state, setState] = useState(initialState);
    const { Title, Image, Year, Nation, Description, Trailer } = state;
    const [errors, setErrors] = useState(error_init);

    const getOneFilm = async (id) => {
        const res = await axios.get(`${URL}/${id}`);
        if (res.status === 200) {
            setState(res.data);
        }
    }

    useEffect(() => {
        if (id) getOneFilm(id);
    }, [id]);

    const updateFilm = async (filmID, data) => {
        const res = await axios.put(`${URL}/${filmID}`, data);
        if (res.status === 200) {
            toast.success(`Updated Film with ID: ${filmID} successfully ~`);
            navigate('/dashboard');
        }
    }

    const addNewFilm = async (data) => {
        const res = await axios.post(`${URL}`, data);
        if (res.status === 200 || res.status === 201) {
            toast.success("New Film has been added successfully ~");
            navigate('/dashboard');
        }
    }

    // validate
    const validateForm = () => {
        let isValid = true;
        let errors = { ...error_init };

        if (Title.trim() === '' || Title.length < 2) {
            errors.Title = 'Title is Required';
            if (Title.length < 2) {
                errors.Title_err = 'Title must be more than 2 words';
            }
            isValid = false;
        }

        if (Image.trim() === '') {
            errors.Image_err = 'Image is required';
            isValid = false;
        }

        if (isNaN(Year) || parseInt(Year) < 1 || Year === '') {
            errors.Year_err = 'Year must be a positive number and more than 0';
            isValid = false;
        }

        if (Nation.trim() === '') {
            errors.Nation_err = 'Nation is required';
            isValid = false;
        }
        if (Description.trim() === '') {
            errors.Description_err = 'Description is required';
            isValid = false;
        }
        if (Trailer.trim() === '') {
            errors.Trailer_err = 'Trailer is required';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            if (id) updateFilm(id, state);
            else addNewFilm(state);
        } else {
            toast.error("Some info is invalid ~ Pls check again");
        }
    }

    const handleInputChange = (event) => {
        let { name, value } = event.target;
        setState((state) => ({ ...state, [name]: value }));
    }

    return (
        <div className='container'>
            <div className="form">
                <h2>{id ? "Update Form" : "Add New Film"}</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="Title">Title: </label>
                        <input type="text" name='Title' value={state.Title} onChange={handleInputChange} />
                        {errors.Title_err && <span className='error'>{errors.Title_err}</span>}
                    </div>
                    <div>
                        <label htmlFor="Image">Image: </label>
                        <input type="text" name='Image' value={state.Image} onChange={handleInputChange} />
                        {errors.Image_err && <span className='error'>{errors.Image_err}</span>}
                    </div>
                    <div>
                        <label htmlFor="Year">Year: </label>
                        <input type="number" name='Year' value={state.Year} onChange={handleInputChange} />
                        {errors.Year_err && <span className='error'>{errors.Year_err}</span>}
                    </div>
                    <div>
                        <label htmlFor="nation">Nation: </label>
                        <input type="text" name='Nation' value={state.Nation} onChange={handleInputChange} />
                        {errors.Nation_err && <span className='error'>{errors.Nation_err}</span>}
                    </div>
                    <div>
                        <label htmlFor="Trailer">Trailer: </label>
                        <input type="text" name='Trailer' value={state.Trailer} onChange={handleInputChange} />
                        {errors.Trailer_err && <span className='error'>{errors.Trailer_err}</span>}
                    </div>
                    <div>
                        <label htmlFor="Description">Description: </label>
                        <textarea type="text" name='Description' value={state.Description} onChange={handleInputChange} />
                        {errors.Description_err && <span className='error'>{errors.Description_err}</span>}
                    </div>


                    <button type='submit' className='form-button'>{id ? "Update" : "Submit"}</button>
                </form>
            </div>
        </div>
    );
};

export default FormAddEdit;