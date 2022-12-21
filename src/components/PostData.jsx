import React , {useState}from 'react';
import axios from 'axios';
import '../styles/PostDataStyle.css';
import icon from '../images/icon.jpg'

import "bootstrap/dist/css/bootstrap.min.css";
import {useNavigate} from 'react-router-dom';



const PostData = () => {
    const navigate = useNavigate();

    const [author,finalauthor] = useState('')
    const [location,finallocation] = useState('')
    const [description,finaldescription] = useState('')
   const [imageData,final] = useState('')

   
        const handleSubmit =  (e) =>{
            e.preventDefault();
            const data = new FormData();
            data.append("imageData1",imageData)
            data.append("description1",description)
            data.append("author1",author)
            data.append("location1",location)
            // data.append("intialData1",intialData)
            for (var key of data.entries()) {
                console.log(key[0] + ', ' + key[1])
            }
            
            axios.post('https://insta-backened.onrender.com/PostData',data).then(res =>{
                console.log(res)
                navigate('/PostView')
            } ).catch(err => console.log(err))

        
             
        }
  

    return(
        <>
         <div className='page-layout'>
         <div className="topBox">
                <div className='pics'>
                    <img src={icon} alt='app icons' />
                </div>
                <p className='heading'>Instaclone</p>
            </div>
            <div className='line'></div>
        <div className="container2">
            <form onSubmit={handleSubmit} >
                <div>
                    <input className="form-control mb-3" type="file" id="postData"   
                    onChange={e => { 
                     final(e.target.files[0])
                        } }
                            accept=".png, .jpg, .jpeg" />
                </div>
        <div>
            <input className="form-control mb-3" type="text" placeholder="Author"  
            onChange={(e) =>{
 finalauthor(e.target.value)

}} 
/>
        </div>

        <div>
            <input className="form-control mb-3" type="text" placeholder="Location"  
            onChange={(e) =>{
                 finallocation(e.target.value)

}}
/>
        </div>
        <div>
        <input className="form-control mb-3" type="text" placeholder="Description"  
        onChange={(e) =>{
finaldescription( e.target.value)

} } 
/>

        </div>
      
       <div className="button">
       <button type="submit" className="btn-success">Post</button>
        </div> 
        
            </form>
        </div>
        </div>
        </>
    )
}


export default PostData;