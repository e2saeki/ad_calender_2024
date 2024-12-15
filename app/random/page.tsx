import { getRandomPosts } from '@/app/_libs/getCards';
import { Bottle } from '@/app/_components/animation/Bottle';
import css from '@/app/css/Collection.module.css';

export default async function Home() {
 // 記事を取得
  const contents = await getRandomPosts();
  // 配列のランダムなインデックスを生成
  const randomIndex = Math.floor(Math.random() * contents.length);
  // ランダムに選んだ要素
  const randomContent = contents[randomIndex];

  return (
    <>
      <h1>Your message has arrived.</h1>
      <div className={`${css.bottle}`}><Bottle /></div>
      <article className={`${css.message_wrap}`}>
      <h2 className={`${css.head}`}>Dear...</h2>
        <div  className={`${css.message}`}
          dangerouslySetInnerHTML={{ __html: randomContent.message || "メッセージはありません" }}
        />
      </article>
    </>
  );
}