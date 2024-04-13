// component
import Logo from '@/components/commons/Logo';

export default function Header() {
  return (
    <header className="flex items-center justify-center sticky top-0 h-[60px] w-full max-w-[500px] z-10 bg-white">
      <Logo />
    </header>
  );
};

