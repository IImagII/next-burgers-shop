import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '@/styles/Burgers.module.css'

//формируем путь генерации нашей страницы
export const getStaticPaths = async () => {
   const res = await fetch('http://localhost:5000/items/')
   const burgers = await res.json()

   const paths = burgers.map(burger => {
      return {
         params: { id: burger.id },
      }
   })

   return {
      paths,
      fallback: false, // это нужно для отображения статической страницы если ее нет будет показіваться 404
   }
}

//создаем функцию для получения каждого конкретного бургера
export async function getStaticProps({ params }) {
   const res = await fetch(`http://localhost:5000/items/${params.id}`)
   const burger = await res.json()

   return {
      props: {
         burger,
      },
   }
}

//шаблон страницы каждого бургера
const Details = ({ burger }) => {
   //будет доступен по следующему пути http://localhost:3000/burgers/:id
   return (
      <div className={styles.singleBurger}>
         <div className={styles.singleBurgerId}>
            <h1>{burger.name}</h1>
            <div className={styles.burgerContainer}></div>
            <Image
               src={burger.image}
               width={350}
               height={300}
               alt={burger.name}
            />
            <div>Price : {burger.price} грн.</div>
            <div>
               <p>{burger.desc}</p>
            </div>
         </div>
      </div>
   )
}

export default Details
