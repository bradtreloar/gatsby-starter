import * as React from "react";
import { Link } from "gatsby";
import DefaultLayout from "../layouts/DefaultLayout";

const Page = () => (
  <DefaultLayout pageTitle="Page Not Found">
    <div className="container">
      <h1>404: Page not found.</h1>
      <p>
        The page you are looking for does not exist.{" "}
        <Link to="/">Go back.</Link>
      </p>
    </div>
  </DefaultLayout>
);

export default Page;
