'use client';
import css from './CardCreation.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
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
      router.push('/random/');
    } catch {
      setError('エラーが発生しました');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className={`${css.form_wrap}`}>
        <label htmlFor="message" className={`${css.label}`}>Dear...</label>
      <textarea
        className={`${css.textarea}`}
        name="message"
        placeholder="Write your message here"
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      {error && <p className={`${css.error}`}>{error}</p>}
      <button type="submit" disabled={isSubmitting} className={`${css.button}`}>
        {isSubmitting ? '送信中...' : 'メッセージを送る'}
      </button>
      </div>
    </form>
  );
}
