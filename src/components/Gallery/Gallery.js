import "./Gallery.css";
import GalleryItem from "./GalleryItem";

const baseURL = `${process.env.PUBLIC_URL}/gallery`
const images = [
  {src: `${baseURL}/kut-2019/1.jpg`, event: 'KUT 2019', year: '2019'},
  {src: `${baseURL}/kut-2019/2.jpg`, event: 'KUT 2019', year: '2019'},
  {src: `${baseURL}/kut-2019/3.jpg`, event: 'KUT 2019', year: '2019'},
  {src: `${baseURL}/weekend-2019/1.jpg`, event: 'Weekend 2019', year: '2019'},
  {src: `${baseURL}/weekend-2019/2.jpg`, event: 'Weekend 2019', year: '2019'},
  {src: `${baseURL}/weekend-2019/3.jpg`, event: 'Weekend 2019', year: '2019'},
  {src: `${baseURL}/weekend-2020/1.jpg`, event: 'Weekend 2020', year: '2020'},
  {src: `${baseURL}/weekend-2020/2.jpg`, event: 'Weekend 2020', year: '2020'},
  {src: `${baseURL}/weekend-2020/3.jpg`, event: 'Weekend 2020', year: '2020'},
  {src: `${baseURL}/wisgan-2019_2020/1.jpg`, event: 'WisGan 2019_2020', year: '2019'},
  {src: `${baseURL}/wisgan-2019_2020/2.jpg`, event: 'WisGan 2019_2020', year: '2019'},
  {src: `${baseURL}/wisgan-2019_2020/3.jpg`, event: 'WisGan 2019_2020', year: '2019'},
  {src: `${baseURL}/kumpul-bersama.png`, event: 'Kumpul Bersama', year: '2019'},
]

export default function Gallery() {
  return (
    <section className="Gallery">
      {
        images.map((image, index) => {
          return (
            <GalleryItem
              key={index}
              src={image.src}
              event={image.event}
              year={image.year}
            />
          )
        })
      }
    </section>
  );
}
