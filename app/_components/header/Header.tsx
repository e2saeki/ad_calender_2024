import Link from 'next/link';
import css from './Header.module.css';
import { Bottle } from '@/app/_components/animation/Bottle';

export const Header = () => {
  return (
    <>
      <header className={`${css.global_header}`}>
        <h1 className={`${css.title}`}>Message in a Bottle</h1>
        <nav className={`${css.nav}`}>
          <Link href="/">Top</Link>
          <Link href="/collection/">Collection</Link>
          <Link href="/random/">Random</Link>
        </nav>
        <div className={`${css.bottle}`}>
          <Bottle />
        </div>
      </header>
    </>
  );
};
