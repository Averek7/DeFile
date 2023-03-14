import styles from "../styles/Home.module.css";
import HomeBg from "../components/HomeBg";
import Layout from "../components/Layout";
import Community from "../components/Community";
import Help from "../components/Help";
import Collection from "../components/Collection";

export default function Home() {
  return (
    <>
      <Layout>
        <HomeBg />
        <Collection />
        <Community />
        <Help />
      </Layout>
    </>
  );
}
