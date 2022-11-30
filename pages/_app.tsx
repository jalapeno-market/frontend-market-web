import { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component />
    </Layout>
  );
}

export default MyApp;
