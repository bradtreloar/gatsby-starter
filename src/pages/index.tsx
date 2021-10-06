import * as React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

const pageTitle = "Wood 'n' Doors";

const Page = () => (
  <DefaultLayout pageTitle={pageTitle} isFront>
    <div className="container">Home</div>
  </DefaultLayout>
);

export default Page;
