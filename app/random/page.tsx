import { getRandomPosts } from '@/app/_libs/getCards';

export default async function Home() {
 // 記事を取得
  const contents = await getRandomPosts();
  // 配列のランダムなインデックスを生成
  const randomIndex = Math.floor(Math.random() * contents.length);
  // ランダムに選んだ要素
  const randomContent = contents[randomIndex];

  return (
    <main>
      <h1>Your message has arrived.</h1>
      <article>
        <h2>{randomContent.title}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: randomContent.message || "メッセージはありません" }}
        />
      </article>
    </main>
  );
}