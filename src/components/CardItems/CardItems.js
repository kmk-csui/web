import React from 'react'
import {Link} from'react-router-dom'
import './CardItems.css'

function CardItems(props) {
  return (
    <div className='cards__item'>
        <div className='cards__item__link'>
            <figure className='cards__item__pic-wrap' data-category={props.label}>
                <img
                    className='cards__item__img'
                    alt='highlights'
                    src={props.src}
                />
            </figure>
            <div className='cards__item__info'>
                <h5 className='cards__item__text'>{props.text}</h5>
                <div className="cards__item__info__data">
                    <p className="cards__item__text__data">📅 {props.tanggal}</p>
                    <p className="cards__item__text__data">🕒 {props.jam}</p>
                    <p className="cards__item__text__data">📌 {props.lokasi}</p>
                    <p className="cards__item__text__data">🔗 {props.link}</p>
                </div>
                <hr className='break__line'></hr>
                <p className="cards__item__division">{props.division}</p>
            </div>
        </div>
    </div>
  )
}

export default CardItems