import { NextPage } from "next";
import Layout from "@/components/layout/Layout";
import PageNotFound from "@/components/screens/404/404";

const Page404: NextPage = () => (
  <Layout title="404" className="404">
    <PageNotFound />
  </Layout>
);

export default Page404;
