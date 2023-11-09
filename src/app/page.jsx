import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/images/hero.svg'
export default function Home() {
  return (
   <div className={styles.container}>
     <div className={styles.col}>
      <h1 className={styles.title}> Your Best Online Shop e-commerce destination</h1>
      <p className={styles.description}>Discover a world of endless shopping possibilities at our online store. Browser, choose, and order your favorite products from the comfort your home.</p>
      <button className={styles.button}>Shop Now</button>
     </div>
     <div className={styles.col}>
     <Image
     src={Hero} alt= 'Hexa shop' className={styles.image} width={500} height={500} />
     </div>
   
   </div>
  )
}
