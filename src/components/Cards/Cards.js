import React from 'react'
import './Cards.css'
import CardItems from 'components/CardItems/CardItems'
import SectionHeader from 'components/SectionHeader/SectionHeader'

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
          <div className='cards__wrapper'>
            <SectionHeader color="#CFE7E7" isGallerypage={true}>Upcoming Events</SectionHeader>
            <div className='cards__items'>
                <CardItems
                src='../gallery/kut-2019/1.jpg'
                text='kut 2019'
                label='kut'
                path='/event'
                tanggal='Friday, July 1'
                jam='13.00'
                lokasi='Discord'
                link='bit.ly/daftar'
                division='PSDM'
                />
                <CardItems
                src='../gallery/kut-2019/2.jpg'
                text='kut 2019'
                label='kut'
                path='/event'
                tanggal='Friday, July 1'
                jam='13.00'
                lokasi='Discord'
                link='bit.ly/daftar'
                division='PSDM'
                />
                <CardItems
                src='../gallery/kut-2019/3.jpg'
                text='kut 2019'
                label='kut'
                path='/event'
                tanggal='Friday, July 1'
                jam='13.00'
                lokasi='Discord'
                link='bit.ly/daftar'
                division='PSDM'
                />
                <CardItems
                src='../gallery/kut-2019/1.jpg'
                text='kut 2019'
                label='kut'
                path='/event'
                tanggal='Friday, July 1'
                jam='13.00'
                lokasi='Discord'
                link='bit.ly/daftar'
                division='PSDM'
                />
                <CardItems
                src='../gallery/kut-2019/1.jpg'
                text='kut 2019'
                label='kut'
                path='/event'
                tanggal='Friday, July 1'
                jam='13.00'
                lokasi='Discord'
                link='bit.ly/daftar'
                division='PSDM'
                />
                <CardItems
                src='../gallery/kut-2019/1.jpg'
                text='kut 2019'
                label='kut'
                path='/event'
                tanggal='Friday, July 1'
                jam='13.00'
                lokasi='Discord'
                link='bit.ly/daftar'
                division='PSDM'
                />
            </div>

            <hr className='main__break__line'></hr>

            <SectionHeader color="#CFE7E7" isGallerypage={true}>Previous Events</SectionHeader>
            <div className='cards__items'>
                <CardItems
                src='../gallery/kut-2019/1.jpg'
                text='kut 2019'
                label='kut'
                path='/event'
                tanggal='Friday, July 1'
                jam='13.00'
                lokasi='Discord'
                link='bit.ly/daftar'
                division='PSDM'
                />
                <CardItems
                src='../gallery/kut-2019/2.jpg'
                text='kut 2019'
                label='kut'
                path='/event'
                tanggal='Friday, July 1'
                jam='13.00'
                lokasi='Discord'
                link='bit.ly/daftar'
                division='PSDM'
                />
                <CardItems
                src='../gallery/kut-2019/3.jpg'
                text='kut 2019'
                label='kut'
                path='/event'
                tanggal='Friday, July 1'
                jam='13.00'
                lokasi='Discord'
                link='bit.ly/daftar'
                division='PSDM'
                />
                <CardItems
                src='../gallery/kut-2019/1.jpg'
                text='kut 2019'
                label='kut'
                path='/event'
                tanggal='Friday, July 1'
                jam='13.00'
                lokasi='Discord'
                link='bit.ly/daftar'
                division='PSDM'
                />
                <CardItems
                src='../gallery/kut-2019/1.jpg'
                text='kut 2019'
                label='kut'
                path='/event'
                tanggal='Friday, July 1'
                jam='13.00'
                lokasi='Discord'
                link='bit.ly/daftar'
                division='PSDM'
                />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Cards