// libs/microcms.ts
import { createClient } from 'microcms-js-sdk';
import { CardProps } from '@/app/_types/types';

// 環境変数にMICROCMS_SERVICE_DOMAINが設定されていない場合はエラーを投げる
if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

// 環境変数にMICROCMS_API_KEYが設定されていない場合はエラーを投げる
if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

// Client SDKの初期化を行う
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

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
};