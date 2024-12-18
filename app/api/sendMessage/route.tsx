import { NextResponse } from 'next/server';

// POSTリクエストを処理するAPIエンドポイント
export async function POST(request: Request) {
  try {
    // クライアントから送信されたデータを取得
    const { message } = await request.json();

    // メッセージが空の場合のエラーチェック
    if (!message) {
      return NextResponse.json(
        { error: 'メッセージは必須です' },
        { status: 400 }
      );
    }

    // microCMSにリクエストを送信
    const microCMSResponse = await fetch('https://ccgallery.microcms.io/api/v1/card', {
      headers: {
        'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY || '',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ message }),
    });

    // microCMSのレスポンスを確認
    if (!microCMSResponse.ok) {
      const error = await microCMSResponse.json();
      return NextResponse.json(
        { error: error.message || '送信に失敗しました' },
        { status: microCMSResponse.status }
      );
    }

    // 成功時のレスポンス
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}
