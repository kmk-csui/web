import React from 'react'
import { useEffect, useState } from 'react';
import './Cards.css'
import CardItems from 'components/CardItems/CardItems'
import SectionHeader from 'components/SectionHeader/SectionHeader'
import { fetchWrapper } from 'components/FetchAPI/apiHandlers';
import LoadingSpinner from 'components/Spinner/Spinner';

function Cards() {
  const [acaraFuture, setAcaraFuture] = useState([])
  const [acaraPast, setAcaraPast] = useState([])
  const [acaraTemp, setAcaraTemp] = useState()
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    const TANGGAL = new Date()
    TANGGAL.setHours(0,0,0,0)
    if(acaraTemp !== undefined){
      if(acaraTemp.length !==0){
        setAcaraFuture([])
        setAcaraPast([])
        acaraTemp.forEach(acara => {
          if(new Date(acara.fields.tanggal).setHours(0,0,0,0) < TANGGAL){
            console.log("test 1")
            console.log(acara)
            setAcaraPast(acaraPast => [...acaraPast, acara])
          }
          else{
            setAcaraFuture(acaraFuture => [...acaraFuture, acara])
          }
        })
        setAcaraTemp([])
      }
      setLoading(false)
    }
  },[acaraTemp])

  useEffect(()=>{
    const fetchData = async () => {
      await fetchWrapper.get("acara/json")
        .then((res)=>{
          setAcaraTemp(res)
        }).catch((error) => {
          alert(error)
        });
    };
    fetchData();
  },[])
  
  if(loading){
    return(
      <div className="loading">
        <div className="inner"><LoadingSpinner></LoadingSpinner></div>  
      </div>
    )
  }
  return (
    <div className='cards'>
      <div className='cards__container'>
          <div className='cards__wrapper'>
            <SectionHeader color="#CFE7E7" isGallerypage={true}>Upcoming Events</SectionHeader>
            {acaraFuture.length===0 &&<>
              <div className="no_event">
                <h2 className="no_event_text">No Upcoming Event</h2>
              </div>
            </>}
            {acaraFuture.length!==0 && <>
              <div className='cards__items'>
                {acaraFuture.map((acara)=>{
                  return(
                    <CardItems 
                      key={acara.pk}
                      src={acara.fields.image}
                      text={acara.fields.nama}
                      label={acara.fields.nama}
                      tanggal={new Date(acara.fields.tanggal).toDateString()}
                      jam={acara.fields.waktu}
                      lokasi={acara.fields.lokasi}
                      link={acara.fields.link}
                      division={acara.fields.divisi}
                    />
                  )
                })
                } 
              </div>
            </>
            } 
            {acaraPast.length!==0 &&<>
              <hr className='main__break__line'></hr>
              <SectionHeader color="#CFE7E7" isGallerypage={true}>Previous Events</SectionHeader>
              <div className='cards__items'>
                {acaraPast.map((acara)=>{
                  return(
                    <CardItems 
                      key={acara.pk}
                      src={acara.fields.image}
                      text={acara.fields.nama}
                      label={acara.fields.nama}
                      tanggal={new Date(acara.fields.tanggal).toDateString()}
                      jam={acara.fields.waktu}
                      lokasi={acara.fields.lokasi}
                      link={acara.fields.link}
                      division={acara.fields.divisi}
                    /> 
                  )
                })
                }
              </div>
            </>
            }
          </div>
      </div>
    </div>
  )
}

export default Cards