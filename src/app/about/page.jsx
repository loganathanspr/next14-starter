import Image from "next/image"
import styles from "./about.module.css"

export const metadata = {
    title: "About page",
    description: "About description"
}

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About Agency</h2>
                <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better</h1>
                <p className={styles.desc}>We create digital ideas that are bigger, bolder, braver and better by pushing the boundaries of innovation. Our team thrives on challenges, turning them into opportunities for groundbreaking solutions. With a relentless pursuit of excellence, we redefine industry standards and exceed expectations. Every project is a canvas for our creativity, where we craft experiences that leave a lasting impact. Join us in shaping the future of technology and design.</p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Years of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Years of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>Years of experience</p>
                    </div>                    
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/about.png" alt="About Image" fill  className={styles.img}/>
            </div>
        </div>
    )
}

export default AboutPage