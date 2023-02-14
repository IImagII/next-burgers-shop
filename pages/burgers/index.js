import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Burgers.module.css'

const Burgers = ({ burgers }) => {
   //будет доступен по следующему пути http://localhost:3000/burgers

   return (
      <>
         <h1>Наши бургеры</h1>
         {!!burgers.length &&
            burgers.map(burger => {
               return (
                  <Link
                     href={`/burgers/${burger.id}`}
                     key={burger.id}
                     className={styles.burgerCard}
                  >
                     <div className={styles.imageContainer}>
                        <Image
                           src={burger.image}
                           alt={burger.name}
                           width={150}
                           height={150}
                        />
                     </div>
                     <div>
                        <h2>{burger.name}</h2> <div>Цена : {burger.price}</div>
                        <div>Описание : {burger.desc}</div>
                     </div>
                  </Link>
               )
            })}
      </>
   )
}

export default Burgers

export async function getStaticProps() {
   const res = await fetch('http://localhost:5000/items/')
   const burgers = await res.json()

   return {
      props: {
         burgers,
      },
   }
}
