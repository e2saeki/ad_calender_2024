import { getCardPosts } from '@/app/_libs/getCards';


export default async function Home() {
// 配列からランダムなキーワードを選択
  const keywords = ["あ", "てす", "も",];
  const randomIndex = Math.floor(Math.random() * keywords.length); // ランダムなインデックスを生成
  const word = keywords[randomIndex]; // ランダムなキーワードを取得
const posts = await getCardPosts(word);

  return (
    <main>
      <h1>Your message has arrived.</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
              {post.title} {/* タイトルを表示 */}
              <div>
                {post.message} {/* タイトルを表示 */}
              </div>
          </li>
        ))}
      </ul>
    </main>
  );
}