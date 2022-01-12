import "./GalleryItem.css";

export default function GalleryItem({src, event, year}) {
  return (
    <div className="GalleryItem" data-content={event + "\n" + year}>
      <img src={src} alt={`${event} - ${year}`} className="GalleryItem_Image"/>
    </div>
  );
}
