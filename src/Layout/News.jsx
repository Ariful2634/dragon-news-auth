import React from 'react';
import { Link } from 'react-router-dom';

const News = ({news}) => {
    const {title,image_url,details,_id}=news;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>
        {
                details.length > 200 ? <p>{details.slice(0,200)}  <Link to={`/news/${_id}`} className='text-red-600 font-bold'>Read More...</Link></p>  :
                <p>{details}</p>

        }
    </p>
   
  </div>
</div>
    );
};

export default News;