'use client';
import css from './CardCreation.module.css';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // テキストエリアの参照
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // テキストエリアの高さを自動調整
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    // 高さを一旦リセットしてから再計算
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      // 入力されたメッセージを取得
      const message = textareaRef.current?.value || '';
      // API Routeにデータを送信
      
      const response = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      // レスポンスの確認
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || '送信に失敗しました');
      }
      // 成功時に別のページにリダイレクト
      router.push('/collection');
    } catch {
      setError('エラーが発生しました');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={`${css.contents_wrap}`}>
      <p>メッセージをボトルにいれて海に流してみましょう</p>
      <form onSubmit={handleSubmit}>
        <div className={`${css.form_wrap}`}>
          <div className={`${css.form_inner}`}>
            <label htmlFor="message" className={`${css.label}`}>
              Dear...
            </label>
            <textarea
              ref={textareaRef}
              className={`${css.textarea}`}
              name="message"
              placeholder="Write your message here"
              required
              defaultValue=""
              onInput={handleInput}
            ></textarea>
            {error && <p className={`${css.error}`}>{error}</p>}
            <button type="submit" disabled={isSubmitting} className={`${css.button}`}>
              {isSubmitting ? '送信中...' : 'メッセージを送る'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
