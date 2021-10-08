import * as React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import PageTitle from "../components/PageTitle";

const pageTitle = "About Us";

const Page = () => (
  <DefaultLayout pageTitle={pageTitle} isFront>
    <PageTitle>{pageTitle}</PageTitle>
    <div className="container">
      <div className="card">
        <div className="card-body">Lorem ipsum</div>
      </div>
    </div>
  </DefaultLayout>
);

export default Page;
