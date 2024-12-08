import Link from 'next/link';
import css from './Header.module.css';

export const Header = () => {
  return (
    <>
      <header className={`${css.global_header}`}>
        <nav className={`${css.nav}`}>
          <Link href="/">Top</Link>
          <Link href="/collection/">Collection</Link>
          <Link href="/random/">Random</Link>
        </nav>
      </header>
    </>
  );
};
