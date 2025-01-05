import { useState, useEffect } from 'react';
import "./scroll.css";
import photo1 from "./photos/1.png";
import photo2 from "./photos/2.png";

function Scroll() {
  const [leftPhotoPosition, setLeftPhotoPosition] = useState(-200); // Sol fotoğrafın başlangıç konumu
  const [rightPhotoPosition, setRightPhotoPosition] = useState(-200); // Sağ fotoğrafın başlangıç konumu
  const [isInView, setIsInView] = useState(false); // Fotoğrafların görünür olup olmadığını kontrol etmek için

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Sayfanın kaydırılma miktarı

      // Fotoğrafların görünür olup olmadığını kontrol et
      if (scrollY >= 500 && scrollY <= 1500) { // Fotoğraflar sayfada görünen kısmın içinde
        setIsInView(true);
      } else {
        setIsInView(false);
      }

      // Scroll hareketi ile fotoğrafların hareketini sağla
      if (isInView) {
        // Fotoğrafların X eksenindeki kayması
        setLeftPhotoPosition((scrollY / 5) - 200); // Sol fotoğrafın X pozisyonu
        setRightPhotoPosition((scrollY / 5) - 200); // Sağ fotoğrafın X pozisyonu
      } else {
        // Fotoğrafların tekrar kaybolması
        setLeftPhotoPosition(-200); // Sol fotoğraf dışarıda
        setRightPhotoPosition(-200); // Sağ fotoğraf dışarıda
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isInView]);

  return (
    <div className="container">
      <div
        className="photo left"
        style={{ left: `${leftPhotoPosition}px` }} // Sol fotoğrafın dinamik X pozisyonu
      >
        <img src={photo1} alt="photo1" className="photoImage" />
      </div>
      <div
        className="photo right"
        style={{ right: `${rightPhotoPosition}px` }} // Sağ fotoğrafın dinamik X pozisyonu
      >
        <img src={photo2} alt="photo2" className="photoImage" />
      </div>
    </div>  
  );
}

export default Scroll;
