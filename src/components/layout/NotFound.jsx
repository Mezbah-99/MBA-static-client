import React from 'react';
import {MdError} from "react-icons/md"
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <section className='notFound'>
            <main>
                <div>
                    <MdError/>
                    <h1>404</h1>
                </div>
                <p>Page Note Found, Click Below to go to Home Page.</p>
                <Link to="/">Go to Home</Link>
            </main>
        </section>
    );
};

export default NotFound;