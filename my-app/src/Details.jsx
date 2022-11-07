import React from 'react';
import { useParams } from 'react-router-dom';

function Details(props) {
    const arr = props.arr;
    const { id } = useParams();
    const tour = arr.find(obj => { return obj.id == id });
    return (
        <div className=" offset-3 col-6  my-5" >
            <img src={tour.image} class="card-img-top" alt="Fissure in Sandstone" />
            <div className="card-body">
                <h4 className="card-title text-dark my-3">{tour.name}</h4>
                <h5 className="card-title">{tour.info}</h5>
                <p className="card-text"> Price : {tour.price} Jd</p>
            </div>
        </div>
    );
}

export default Details;