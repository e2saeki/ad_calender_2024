import { getCardPosts } from '@/app/_libs/getCards';
import { Bottle } from '@/app/_components/animation/Bottle';
import css from './Collection.module.css';

export default async function Home() {
  const posts = await getCardPosts();

  return (
    <>
      <h1>Messages received so far</h1>
      <div className={`${css.bottle}`}><Bottle /></div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
          <article className={`${css.message_wrap}`}>
          <h2 className={`${css.head}`}>Dear...</h2>
            {/* messageをHTMLとして表示 */}
            <div  className={`${css.message}`}
              dangerouslySetInnerHTML={{
                __html: post.message || 'メッセージはありません',
              }}
            />
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
