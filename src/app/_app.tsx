import StoreProvider from './StoreProvider'; // Adjust the path to your StoreProvider

function MyApp({ Component, pageProps }: { Component: React.FC; pageProps: any }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
