import React from 'react';
import { Link } from 'react-router-dom';


export default function Tours(props) {

    const arr = props.arr;
    const card = arr.map(tour =>

    (
        <div className="card col-md-3 offset-1 my-5" key={tour.id}>
            <Link to={'/tour/' + tour.id}>
                <img src={tour.image} class="card-img-top" alt="Fissure in Sandstone" />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{tour.name}</h5>
                <p className="card-text">{tour.price} Jd</p>
                <a href={'tour/' + tour.id} className="btn btn-primary">View</a>
            </div>
        </div >
    ));

    return card;
};



