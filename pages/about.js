import Head from 'next/head'

export default function AboutPage() {
   return (
      <>
         <Head>
            <title>Жирные Бургеры | О Нас</title>
            <meta name='title' content='Все о жирных бургерах' />
         </Head>
         <div>
            <h1>О нас</h1>
            <p>
               Жирные бургеры - это старые добрые бургеры по классической
               рецептуре, нужных размеров и за приемлемую цену.
            </p>
            <p>
               Готовят их на американский, мексиканский и итальянский манер, не
               жалея ни соуса, ни начинки.
            </p>
            <p>
               Для тех, кто изрядно проголодался, есть необъятный «Самый жирный
               бургер» с пятью говяжьими котлетами, кукурузными чипсами и сыром.
            </p>
         </div>
      </>
   )
}
