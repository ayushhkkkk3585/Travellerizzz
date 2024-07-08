import React, { useState } from 'react';
import Navbar from './Navbar';
import Anicursor from './Anicursor';
import './firebase';
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { serverTimestamp } from "firebase/firestore";
import { Link } from 'react-router-dom';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        from: '',
        to: '',
        date: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const validate = () => {
        let tempErrors = {};
        const nameRegex = /^[A-Za-z\s]+$/;

        if (!formData.name) {
            tempErrors.name = "Name is required.";
        } else if (!nameRegex.test(formData.name)) {
            tempErrors.name = "Name should not contain numbers.";
        }

        if (!formData.from) {
            tempErrors.from = "Source is required.";
        } else if (!nameRegex.test(formData.from)) {
            tempErrors.from = "Source should not contain numbers.";
        }

        if (!formData.to) {
            tempErrors.to = "Destination is required.";
        } else if (!nameRegex.test(formData.to)) {
            tempErrors.to = "Destination should not contain numbers.";
        }

        if (!formData.date) {
            tempErrors.date = "Date is required.";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validate()) {
            const data = {
                Name: formData.name,
                Source: formData.from,
                Destination: formData.to,
                Date: formData.date,
                timestamp: serverTimestamp(),
            };

            const db = getFirestore();
            await addDoc(collection(db, 'destinations'), data);
            console.log('Your Data has been stored:', data);

            toast('Details saved successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

           
            setFormData({
                name: '',
                from: '',
                to: '',
                date: '',
            });
            setErrors({});
        } else {
            toast.error('Please fill out all fields correctly.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    return (
        <>
            <Anicursor />
            <Navbar />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className='bg-black my-0 h-1 flex justify-center items-center w-4/5 mx-auto'></div>
            <p className='text-center font-bold text-3xl my-5'>Start Packing your bagss...</p>

            <div className="flex justify-center drop-shadow-lg">
                <div className="bg-amber-400 p-14 my-10 rounded-lg flex">
                    <form onSubmit={handleSubmit} className='flex'>
                        <div className="flex flex-col mr-4">
                            <label className='font-bold text-lg '>Enter your Name:</label>
                            <input
                                className={`rounded-md h-7 border-2 ${errors.name ? 'border-red-500' : 'border-black'}`}
                                placeholder='Enter your Name'
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <span className="text-red-500">{errors.name}</span>}
                        </div>
                        <div className="flex flex-col mr-4">
                            <label className='font-bold text-lg '>From</label>
                            <input
                                className={`rounded-md h-7 border-2 ${errors.from ? 'border-red-500' : 'border-black'}`}
                                placeholder='Enter your Source'
                                type="text"
                                id="from"
                                value={formData.from}
                                onChange={handleChange}
                            />
                            {errors.from && <span className="text-red-500">{errors.from}</span>}
                        </div>
                        <div>
                            <img src="/plane.png" className='w-24 mr-5' alt="" />
                        </div>
                        <div className="flex flex-col mr-4">
                            <label className='font-bold text-lg '>To</label>
                            <input
                                className={`rounded-md h-7 border-2 ${errors.to ? 'border-red-500' : 'border-black'}`}
                                placeholder='Enter your Destination'
                                type="text"
                                id="to"
                                value={formData.to}
                                onChange={handleChange}
                            />
                            {errors.to && <span className="text-red-500">{errors.to}</span>}
                        </div>

                        <div className="flex flex-col">
                            <label className='font-bold text-lg '>Date</label>
                            <input
                                className={`rounded-md h-7 border-2 ${errors.date ? 'border-red-500' : 'border-black'}`}
                                type="date"
                                placeholder='Enter Date'
                                id="date"
                                value={formData.date}
                                onChange={handleChange}
                            />
                            {errors.date && <span className="text-red-500">{errors.date}</span>}
                        </div>

                        <button type='submit' className='bg-teal-700 my-5 ml-5 rounded-md text-white font-bold p-2 '>Submit</button>
                    </form>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <button className='bg-teal-700 my-3 rounded-md text-white font-bold p-2 '><Link to="/flightClass">Select Flight Class</Link></button>
            </div>
            <div className='bg-black my-0 h-1 flex justify-center items-center w-4/5 mx-auto'></div>
            <div className='flex gap-7 justify-between my-5'>
                <div className='flex '>
                    <div id='about' className='w-4/5 mx-14 bg-amber-300 p-4 drop-shadow-md rounded-md font-bold text-lg '>
                        Embark on a whimsical journey through time and space, where cobblestone streets whisper secrets of ancient civilizations, and sunsets paint the sky in hues of magic. Pack your curiosity, leave behind the ordinary, and let adventure be your compass. We provide you to book a flight from our side, with minimalist approach and not much hassle. Fill the contact form which is on the right side if you have any issues while booking. 
                        <p className='my-6'>~ Regards, TravelleRizz</p>
                    </div>
                </div>

                <div >
                    <form id='contact' className='flex flex-col bg-orange-400 font-semibold p-4 pb-10 rounded-lg mx-14 drop shadow-md'>
                        <label className='font-bold text-lg'>Name</label>
                        <input className='rounded-md' type="text" />
                        <label className='font-bold text-lg'>Email</label>
                        <input className='rounded-md' type="text" />
                        <label className='font-bold text-lg'>Number</label>
                        <input className='rounded-md' type="text" />
                        <button className='bg-teal-700 my-3 rounded-md text-white font-bold'>Submit</button>
                    </form>
                </div>
            </div>
            <div className='font-bold text-xl my-5 text-center underline'>Made with Love for YOU ✈️ </div>
        </>
    )
}

export default Form;
