import React from 'react'
import './CardItems.css'

function CardItems(props) {
    const link = "https://"+props.link
    return (
    <div className='cards__item'>
        <div className='cards__item__link'>
            <figure className='cards__item__pic-wrap' data-category={props.label}>
                <img
                    className='cards__item__img'
                    alt='highlights'
                    src={"https://websitekmk.s3.amazonaws.com/"+props.src}
                />
            </figure>
            <div className='cards__item__info'>
                <h5 className='cards__item__text'>{props.text}</h5>
                <div className="cards__item__info__data">
                    <p className="cards__item__text__data">📅 {props.tanggal}</p>
                    <p className="cards__item__text__data">🕒 {props.jam}</p>
                    <p className="cards__item__text__data">📌 {props.lokasi}</p>
                    <p className="cards__item__text__data">🔗 <a href={link}>{props.link}</a></p>
                </div>
                <hr className='break__line'></hr>
                <p className="cards__item__division">{props.division}</p>
            </div>
        </div>
    </div>
  )
}

export default CardItems