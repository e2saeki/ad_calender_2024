import { getRandomPosts } from '@/app/_libs/getCards';
import { Bottle } from '@/app/_components/animation/Bottle';
import css from '@/app/css/Collection.module.css';

export default async function Home() {
 // 記事を取得
  const contents = await getRandomPosts();
  // ランダムなインデックスを3つ生成 (重複なし)
  const getRandomIndices = (num: number, max: number) : number[] => {
  const indices: number[] = [];
    while (indices.length < num) {
      const index = Math.floor(Math.random() * max);
      if (!indices.includes(index)) {
        indices.push(index);
      }
    }
    return indices;
  };

  const randomIndices = getRandomIndices(1, contents.length);
  // ランダムに選んだ要素
  const randomContents = randomIndices.map((index) => contents[index]);

  return (
    <>
      <h1>Your message has arrived.</h1>
      <p>海からメッセージが流れ着きました</p>
      <div className={`${css.bottle}`}><Bottle /></div>
            <ul className={`${css.list}`}>
        {randomContents.map((post) => (
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