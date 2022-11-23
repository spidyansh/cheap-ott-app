import React from 'react'
// import Data from './Data';

export default function Card(props) {
    return (
        <>
            <div className="row row-cols-1 ">
                <div className="col">
                    <div className="card">
                        {/* <img src={props.imgsrc}
                        className="card-img-top" alt="..." /> */}
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <h6 className="card-title">{props.platform}</h6>
                            <p className="card-text">{props.content} </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
