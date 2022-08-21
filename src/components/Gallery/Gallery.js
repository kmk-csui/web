import "./Gallery.css";
import GalleryItem from "./GalleryItem";
import { useEffect, useState } from 'react';
import { fetchWrapper } from 'components/FetchAPI/apiHandlers';
import LoadingSpinner from 'components/Spinner/Spinner';

export default function Gallery() {
  const [images,setImages] = useState()
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    const fetchData = async () => {
      await fetchWrapper.get("gallery/json")
        .then((res)=>{
          setImages(res)
        }).catch((error) => {
          alert(error)
        });
    };
    fetchData();
  },[])
  useEffect(()=>{
    if(images!==undefined)
      setLoading(false)
  },[images])
  if(loading){
    return(
      <div className="loading">
        <div className="inner"><LoadingSpinner></LoadingSpinner></div>  
      </div>
    )
  }else{
    return (
      <section className="Gallery">
        {
          images?.map((image, index) => {
            return (
              <GalleryItem
                key={index}
                src={"https://websitekmk.s3.amazonaws.com/"+image.fields.image}
                event={image.fields.nama}
                year={new Date(image.fields.tanggal).getFullYear()}
              />
            )
          })
        }
      </section>
    );
  }
}
