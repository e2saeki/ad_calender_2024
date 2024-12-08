import { client } from './microcms';
import { CardProps } from '@/app/_types/types'

export async function getCardPosts(): Promise<CardProps[]> {
  const data = await client.get({
    endpoint: 'card',
    queries: {
      fields: 'id,message',
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