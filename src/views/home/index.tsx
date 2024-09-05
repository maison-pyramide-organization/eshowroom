import s from "./_s.module.scss";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import aboutImg1 from "@a/images/about-image-1.png";
import aboutImg2 from "@a/images/about-image-2.png";

const VIDEO_LANDSCAPE =
  "https://res.cloudinary.com/dhqpdvngy/video/upload/q_60/v1725533298/H-Showroom_Video.mp4";

const VIDEO_PORTRAIT =
  "https://res.cloudinary.com/dhqpdvngy/video/upload/q_60/v1725534168/V-Showroom_Video.mp4";

const Home = () => {
  const mpRef = useRef<any>(null);
  const showroomRef = useRef<any>(null);
  const { hash } = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    if (hash == "#maison-pyramide") {
      const x = mpRef.current!.offsetTop;
      window.scrollTo({ top: x - 120 });
    } else if (hash == "#showroom") {
      const x = showroomRef.current!.offsetTop;
      window.scrollTo({ top: x - 120 });
    }
  });

  return (
    <>
      <div className={s.video_container}>
        {/* HERO VIDEO */}
        <video
          className={s.video}
          id="video"
          preload="true"
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
        >
          <source
            media="orientation: portrait"
            src={VIDEO_PORTRAIT}
            type="video/mp4"
          />
          <source src={VIDEO_LANDSCAPE} type="video/mp4" />
        </video>
      </div>

      <section className={s.about_section}>
        {/* ABOUT ITEM 1 */}
        <div className={s.about_item} id="showroom" ref={showroomRef}>
          <div className={`${s.about_item_image} ${s.first}`}>
            <img src={aboutImg1} />
          </div>

          <div className={s.about_item_w}>
            <h2 className={s.about_item_title}>
              ABOUT
              <span>THE SHOWROOM</span>
            </h2>
            <p className={s.about_item_body}>
              Based in the heart of Paris, The Showroom is more than a sales and
              distribution platform, it’s a global hub of influence. Since its
              establishment in 2016, it has swiftly garnered recognition for its
              unique curation, bringing together leading young brands and
              celebrated designers, presenting a fresh approach to advanced and
              contemporary womenswear and jewelry. The Showroom seeks to fuel a
              generation of rising talent and consumer brands fostering
              collaborative partnerships and championing quality and
              sustainability. From its inception, it has cultivated a network of
              top-tier retailers, media outlets, and influencers, amplifying the
              reach of its carefully curated collections. Throughout initiatives
              like a pioneering financing programme, The Showroom not only sets
              industry standards but also empowers both creators and consumers
              alike.
            </p>
            <a
              className={s.about_item_link}
              target="_blank"
              href="https://jooraccess.com/sign_in"
            >
              EXPLORE OUR BRANDS
            </a>
          </div>
        </div>
        {/* ABOUT ITEM 2 */}
        <div className={s.about_item} id="maison_pyramide" ref={mpRef}>
          <div className={s.about_item_image}>
            <img src={aboutImg2} />
          </div>

          <div className={s.about_item_w}>
            <h2 className={s.about_item_title}>
              ABOUT
              <span>MAISON PYRAMIDE</span>
            </h2>
            <p className={s.about_item_body}>
              Maison Pyramide is a premier brand building platform with offices
              in Paris, Dubai, Cairo and Riyadh. Our integrated services span
              sales, press, communications, social media, events, marketing,
              brand strategy, and talent management. Our commitment is to drive
              growth through strategic and profoundly inspirational solutions to
              support the innovation and growth of both emerging and established
              entities in the fashion, retail, lifestyle, and media sectors. We
              empower our clients to connect with today’s world, boosting brand
              reputation and reach.
            </p>
            <a
              className={s.about_item_link}
              target="_blank"
              href="https://www.maisonpyramide.com/"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
