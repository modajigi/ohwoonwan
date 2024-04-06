import Header from './RootLayout/Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header />
      <main>123{children}</main>
    </div>
  );
};

export default MainLayout;
