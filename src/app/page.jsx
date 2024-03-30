import Image from "next/image";
import styles from "./home.module.css"

const Home = () => {
  //throw new Error("Error in Home");
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative Thoughts Agency</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat expedita officiis ipsum repudiandae ratione, enim quisquam soluta dolorem, minima libero molestias repellendus voluptatem id, consequatur vel. Omnis odit eos nam?</p>
      <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
      </div>
    </div>
    <div className={styles.imageContainer}>
      <Image src="/hero.gif" alt=""  width={500} height={500}  className={styles.heroImg} />
    </div>
  </div>;
};

export default Home;