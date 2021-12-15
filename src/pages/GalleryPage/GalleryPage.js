import Gallery from 'components/Gallery/Gallery';
import Header from 'components/Header/Header';
import './GalleryPage.css';

export default function GalleryPage() {
    return (
        <>
            <Header headerTitle='Galeri KMK Fasilkom UI' />
            <div className='GalleryPage'>
                <Gallery />
            </div>
        </>
    )
}