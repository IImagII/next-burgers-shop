import Head from 'next/head'

export default function Reviews({ comments }) {
   console.log('comments', comments)
   return (
      <>
         <Head>
            <title>Жирные Бургеры | Отзывы</title>
            <meta name='title' content='Все о жирных бургерах' />
         </Head>
         <div>
            <h1>Отзывы</h1>
            <div className='reviews'>
               {comments.length &&
                  comments.map(comment => {
                     return (
                        <div key={comment.id} className='review'>
                           {comment.id} <br />
                           name: {comment.name}
                           <br />
                           email: {comment.email}
                           <br />
                           {comment.body}
                        </div>
                     )
                  })}
            </div>
         </div>
      </>
   )
}

export async function getServerSideProps() {
   // Fetch data from external API
   const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_limit=20`
   )
   const comments = await res.json()

   // Pass data to the page via props
   return { props: { comments } }
}
