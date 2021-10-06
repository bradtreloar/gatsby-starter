import * as React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import PageTitle from "../components/PageTitle";

const pageTitle = "About Us";

const Page = () => (
  <DefaultLayout pageTitle={pageTitle} isFront>
    <PageTitle>{pageTitle}</PageTitle>
    <div className="container">
      <div className="card p-3 p-sm-4 p-md-5 mb-5">Lorem ipsum</div>
    </div>
  </DefaultLayout>
);

export default Page;
