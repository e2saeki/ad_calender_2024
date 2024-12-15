import CardCreationForm from '@/app/_components/card/CardCreationForm';

export default async function Home() {
  return (
    <>
      <h1>Message in a Bottle</h1>
      <p>メッセージをボトルにいれて海に流してみましょう</p>
      <div>
        <CardCreationForm />
      </div>
    </>
  );
}
