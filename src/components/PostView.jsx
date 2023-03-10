import React, { useEffect, useState } from 'react';
import icon from '../images/icon.jpg'
import camera from '../images/camera.jpg'
import Card from './Card';
import '../styles/PostViewStyle.css';
import axios from 'axios';

import {Link} from 'react-router-dom';

const PostView = () => {
    const [state, updateState] = useState([]);

    useEffect( () => {
        function getData() {
           
            axios.get('https://insta-backened.onrender.com/PostView')
          
            .then(ress =>{
                console.log(ress)
                updateState(ress.data)
            } )
            .catch(err => console.log(err))
        }
        getData()
    }, []);

    return (
        <div className='page'>
            <div className="box-top">
                <div className='pics'>
                    <img src={icon} alt='app icons' />
                </div>
                <p className='heading'>Instaclone</p>
                <div className='pics'>
                    <Link to='/PostData'><img src={camera} alt='cam' /></Link>
                    
                </div>
            </div>
            <div className='line'></div>
            {state.map((ele, i) => {
                return (<Card key={i} pass={ele} />)
            })}
        </div>
    )
}

export default PostView;