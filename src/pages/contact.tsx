import * as React from "react";
import ContactForm from "../components/ContactForm";
import DefaultLayout from "../layouts/DefaultLayout";
import PageTitle from "../components/PageTitle";

const pageTitle = "Contact Us";

const Page = () => (
  <DefaultLayout pageTitle={pageTitle} isContact>
    <PageTitle>{pageTitle}</PageTitle>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h2 className="mb-3">Contact Details</h2>
          <div className="card shadow mb-5">
            <div className="card-body">
              <p>
                <strong>Address</strong>
                <br />
                <br />
                <br />
              </p>
              <p>
                <strong> Phone</strong>
                <br />
                <a href="tel:+61"></a>
              </p>
              <p>
                <strong>Email</strong>
                <br />
                <a href="mailto:"></a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <h2 className="mb-3">Enquiry Form</h2>
          <div className="card shadow p-2 p-sm-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
);

export default Page;
