import { getCardPosts } from '@/app/_libs/microcms';
import css from '@/app/css/Collection.module.css';

// ISR の再生成間隔を指定 
export const revalidate = 120;

export default async function Home() {
  const posts = await getCardPosts();

  return (
    <>
      <ul className={`${css.list}`}>
        {posts.map((post) => (
          <li key={post.id}>
          <article className={`${css.message_wrap}`}>
          <h2 className={`${css.head}`}>Dear...</h2>
            <div className={`${css.message}`}>
              {post.message || 'メッセージはありません'}
            </div>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
