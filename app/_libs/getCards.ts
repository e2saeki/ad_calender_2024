import { client } from './microcms';
import { CardProps } from '@/app/_types/types'

export async function getCardPosts(word:string): Promise<CardProps[]> {
  const data = await client.get({
    endpoint: 'card', // 'blog'はmicroCMSのエンドポイント名
    queries: {
      fields: 'id,title,message',  // idとtitleを取得
      filters: `title[contains]${word}`,
    },
  });
  return data.contents;
}


export async function getRandomPosts(): Promise<CardProps[]> {
  const data = await client.get({
    endpoint: 'card',
    queries: {
      limit: 100,
    },
  });
  return data.contents;
}