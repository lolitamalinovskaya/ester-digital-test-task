import './App.scss';
import './reset.scss';

function App() {
  return (
    <section className="gallery">
      <header className="gallery__header">
          <h1 className="gallery__title">Virtual tour</h1>
      </header>
        <div className="gallery__inner">
            <a href="https://www.google.com/maps/@48.8606882,2.3356791,3a,90y,328.36h,87.55t/data=!3m7!1e1!3m5!1sAF1QipMZ9YgnArbwEIbTDANeSQYFu9gNqpW_2Sv8FBvY!2e10!3e12!7i4352!8i1815"
                 target="_blank"
                 class="gallery_link">
                <figure className="gallery__item">
                    <img src="/images/royal-palace.png" alt="royal-palace" />
                    <figcaption className="gallery__item-description">
                        <h2 className="gallery__item-title">Royal Palace</h2>
                        <p className="gallery__item-text">360° Virtual Tour</p>
                        <p className="gallery__item-mini">Google Street Panorama View</p>
                    </figcaption>
                </figure>
            </a>
            <a href="https://www.google.com/maps/@48.8563254,2.3352706,3a,75y,90t/data=!3m7!1e1!3m5!1sAF1QipNRj_CwP4coDMYdCHj6qHeBeJpI2VxU5BUsOX4F!2e10!3e12!7i11000!8i5500"
               target="_blank"
               className="gallery_link">
            <figure className="gallery__item">
                <img src="/images/denon-wing.png" alt="denon-wing.png" />
                <figcaption className="gallery__item-description">
                    <h2 className="gallery__item-title">Denon Wing</h2>
                    <p className="gallery__item-text">360° Virtual Tour</p>
                    <p className="gallery__item-mini">Google Street Panorama View</p>
                </figcaption>
            </figure>
            </a>
            <a href="https://www.google.com/maps/@48.8601723,2.3395439,3a,88.4y,322.04h,84.25t/data=!3m7!1e1!3m5!1sAF1QipNMZGQuEA-pAUvIG_eP_2f3gWTKZEJ6XLVJ-Pgb!2e10!3e12!7i10240!8i5120"
               target="_blank"
               className="gallery_link">
            <figure className="gallery__item">
                <img src="/images/colonnade-perrault.png" alt="colonnade-perrault" />
                <figcaption className="gallery__item-description">
                    <h2 className="gallery__item-title">Colonnade Perrault</h2>
                    <p className="gallery__item-text">360° Virtual Tour</p>
                    <p className="gallery__item-mini">Google Street Panorama View</p>
                </figcaption>
            </figure>
            </a>
            <a href="https://www.google.com/maps/@48.860183,2.3356156,3a,90y,177.69h,95.61t/data=!3m7!1e1!3m5!1sAF1QipP7uFZnTITRe-7AEVAgHAfqiCL-03gvBHcYWgF3!2e10!3e12!7i5472!8i2736"
               target="_blank"
               className="gallery_link">
            <figure className="gallery__item">
                <img src="/images/greek-hall.png" alt="greek-hall" />
                <figcaption className="gallery__item-description">
                    <h2 className="gallery__item-title">Greek hall</h2>
                    <p className="gallery__item-text">360° Virtual Tour</p>
                    <p className="gallery__item-mini">Google Street Panorama View</p>
                </figcaption>
            </figure>
            </a>
            <a href="https://www.google.com/maps/@48.8598788,2.3355157,3a,82.2y,7.53h,94t/data=!3m7!1e1!3m5!1sAF1QipO1wkUUbyzpPjj-OR0mR5etZJT-xl-40XK8rDQ3!2e10!3e12!7i10240!8i5120"
               target="_blank"
               className="gallery_link">
            <figure className="gallery__item">
                <img src="/images/mona-lisa.png" alt="mona-lisa" />
                <figcaption  className="gallery__item-description">
                    <h2 className="gallery__item-title">Mona Lisa</h2>
                    <p className="gallery__item-text">360° Virtual Tour</p>
                    <p className="gallery__item-mini">Google Street Panorama View</p>
                </figcaption>
            </figure>
            </a>
            <a href="https://www.google.com/maps/@48.8563254,2.3352706,3a,90y,21.26h,79.91t/data=!3m7!1e1!3m5!1sAF1QipPpGAowYatVyk3MMGnZAaQkYm2EUk-Dlca06SS5!2e10!3e12!7i11304!8i5652"
               target="_blank"
               className="gallery_link">
            <figure className="gallery__item">
                <img src="/images/night-palace.png" alt="night-palace" />
                <figcaption className="gallery__item-description">
                    <h2 className="gallery__item-title">Night Palace</h2>
                    <p className="gallery__item-text">360° Virtual Tour</p>
                    <p className="gallery__item-mini">Google Street Panorama View</p>
                </figcaption>
            </figure>
            </a>
        </div>
    </section>
  );
}

export default App;
