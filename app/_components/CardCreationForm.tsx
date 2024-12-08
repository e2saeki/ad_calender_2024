// app/contact/page.tsx
import { redirect } from "next/navigation";

async function submitForm(formData: FormData) {
  "use server";

  const title = formData.get("title") as string;
  const message = formData.get("message") as string;

  if (!title || !message) {
    throw new Error("タイトルとメッセージは必須です");
  }

  const response = await fetch("https://ccgallery.microcms.io/api/v1/card", {
    headers: {
      "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY || "",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ title, message }),
  });

  if (!response.ok) {
    throw new Error("送信に失敗しました");
  }

  // 送信成功時にリダイレクト
  redirect("/collection");
}

export default function Contact() {
  return (
    <form action={submitForm}>
      <input type="text" name="title" placeholder="タイトル" required />
      <textarea name="message" placeholder="メッセージ" required></textarea>
      <button type="submit">送信</button>
    </form>
  );
}
