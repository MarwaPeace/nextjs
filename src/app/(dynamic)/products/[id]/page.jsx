import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'


async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

 export async function generateMetadata({ params} )
   {
  // read route params
  const id = params.id
 
  // fetch data
  const product = await getData(params.id)
 
 
  return {
    title: product.title,
    description: product.description
    }
  } 
export default async function Post({ params }) {
  const product = await getData(params.id)
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.description}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.postImage}
            src={product.thumbnail}
            alt="post image"
            fill={true}
          />
          <span className={styles.author}> {product.category}</span>
        </div>
      </header>
      <div className={styles.content}>
        <div className={styles.gallery}>
            {product.images.map(image =>(
                <Image
                key={product.id}
                src={image}
                alt={product.title}
                width={200}
                height={200}
                />
            )
            
             )}
        </div>
         <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          temporibus reiciendis, inventore, distinctio veritatis possimus
          perspiciatis quaerat, nihil enim repellat atque mollitia iste ea eos
          eligendi dolore magnam odit! Labore. Saepe, provident dignissimos ipsa
          fuga blanditiis consequatur! Veritatis dolorum nam vel tenetur
          temporibus facere voluptas ipsam corrupti id ratione consequuntur
          autem excepturi, quisquam quo laboriosam, eveniet sint, molestiae
          impedit! Laboriosam! Odio facilis, id, impedit sint autem voluptatem
          sunt provident unde nisi nam quam iste maiores facere animi ipsa in
          cupiditate dolore! Harum, reprehenderit iste doloremque deserunt
          eveniet aut est nam. Doloremque nesciunt nostrum quae fugit totam vero
          facilis, iure quod itaque. Officiis recusandae eius culpa voluptatibus
          fugit nostrum iure quaerat qui ipsam quam. Nihil, repellat
          consequatur. Harum ratione ipsam error. Ex nemo dicta autem at! Labore
          accusantium mollitia facilis dolores voluptates! Molestias dolorem
          aperiam est illum, quibusdam eligendi? Laudantium libero autem placeat
          quaerat tenetur molestiae delectus enim voluptatem exercitationem.
          Provident. Laboriosam at suscipit voluptate veniam provident natus
          enim! Cum asperiores accusantium facere, distinctio mollitia
          laudantium aliquid ex iusto quidem ipsum consequuntur doloribus soluta
          laborum voluptatum deleniti alias temporibus. Velit, debitis.
          Veritatis culpa, pariatur nostrum labore illo error nisi at in earum
          dicta quo aspernatur vitae, architecto consequatur recusandae adipisci
          nobis ab enim explicabo dolor! Illo explicabo voluptatibus laborum
          consequuntur dolorem. Laudantium tenetur doloribus nemo, dolore sint
          molestias, ea quisquam pariatur aliquid est autem repellendus repellat
          quod tempore deserunt saepe, perferendis numquam molestiae!
          Laboriosam, quas perferendis in consequuntur quis molestias tempora.
          Corporis pariatur ex voluptatem incidunt enim? Fugit, aut ullam. Ullam
          est numquam atque veritatis fugit rerum illum et officia, earum veniam
          libero ipsum vel totam, harum labore at, sit voluptates! Eos
          aspernatur, neque accusantium ut a, eveniet perferendis nihil
          provident harum recusandae repudiandae laborum doloremque adipisci
          eligendi dolorem tenetur unde natus. Consectetur, ea. Iure ex modi
          esse ipsam veritatis ut.
        </p> 
      </div>
    </div>
  )
}
