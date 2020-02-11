import React from 'react'
import Link from "next/link";

const Card = props => (
  <div className="card" style={{'width': '16.5rem'}}>
    <img src={props.pic} className="card-img-top" alt="..."/>
    <div className="card-body">
      <Link href="#">
        <a className='title'>{props.title}</a>
      </Link>
    </div>
    <style jsx>
      {
        `
          .card {
          border: none;
          background-color: unset;
          box-shadow: 1px 1px 3px rgba(0,0,0,.65);
          }
          .card-body {
          background: rgba(0,0,0,0.65);
          text-align: center;
          }
          .title {
          text-decoration: none;
          color: #FFF3A7;
          font-size: 1.25rem;
          
          }
        `
      }
    </style>
  </div>
);

export default Card