import CardCreationForm from '@/app/_components/card/CardCreationForm';

export default async function Home() {
  return (
    <>
      <h1>Message in a Bottle</h1>
      <div>
        <CardCreationForm />
      </div>
    </>
  );
}
