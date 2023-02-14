import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const NotFoundPage = () => {
   const router = useRouter()
   const [count, setCount] = useState(3)

   useEffect(() => {
      setInterval(() => {
         setCount(count - 1)
      }, 1000)
      if (count === 0) {
         router.push('/')
      }
   }, [count])

   return (
      <div className='not-found'>
         <h1>Ой...</h1>
         <h2>Такой страницы здесь нет!</h2>
         <p>
            Перехожу на <Link href='/'>главную страницу</Link> через {count}
            секунды...
         </p>
      </div>
   )
}

export default NotFoundPage
