import { getRandomPosts } from '@/app/_libs/microcms';
import css from '@/app/css/Collection.module.css';

// ISR の再生成間隔を指定
export const revalidate = 10;

export default async function Home() {
  // 記事を取得
  const contents = await getRandomPosts();

  // ランダムなインデックスを生成(現在は1件だけど、複数いけるように作ってみた)
  const getRandomIndices = (num: number, max: number): number[] => {
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
      <ul className={`${css.list}`}>
        {randomContents.map((post) => (
          <li key={post.id}>
            <p>誰かのメッセージが流れ着きました</p>
            <article className={`${css.message_wrap}`}>
              <h2 className={`${css.head}`}>Dear...</h2>
              <div className={`${css.message}`}>{post.message || 'メッセージはありません'}</div>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
