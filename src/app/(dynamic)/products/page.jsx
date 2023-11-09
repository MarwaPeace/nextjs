import Link from 'next/link'
import Image from 'next/image'
import styles from '@/app/(dynamic)/products/page.module.css'


 
 

async function getData() {
  const res = await fetch('https://dummyjson.com/products')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export const metadata = {
  title: 'Marwashop - Products',
  description: 'Discover a world of endless shopping possibilities ay our online store.Browser',
}
export default async function Products({}) {
  const data = await getData()
  const products = data.products
  console.log(products)

  return (
    <div className={styles.mainContainer}>
      {
      products.map(product => (
        <Link href={`/products/${product.id}`} className={styles.post} key={product.id}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={product.thumbnail}
              fill={true}
              alt="post image"
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.text}>{product.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
