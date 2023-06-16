import { NextPage } from "next";
import Layout from "@/components/layout/Layout";
import NotFoundPage from "@/components/screens/404/404";

const Page404: NextPage = () => (
  <Layout title="404" className="404">
    <NotFoundPage />
  </Layout>
);

export default Page404;
