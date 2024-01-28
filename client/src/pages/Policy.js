import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-3 ">
          <img
            src="/images/file.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <p>We receive any information You enter on our Website or give us
              in any other way, which is stored on the Company’s 
              secure servers. To clarify, personal information means and 
              includes name, email, website user account log in ID and password,
               mobile and landline phone numbers, gender, DOB, address, gift 
               message and eye prescription, but excludes any Credit Card, 
               Debit Card or Net-Banking Details, all of which are stored on the 
               Company’s secure servers and/or in cookies on your computer. 
               You can choose not to provide certain information, but then 
               You might not be able to take advantage of many of our features. 
               We use the information that You provide for such purposes as 
               responding to your requests, customizing future commercial 
               transactions, and communicating with You and utilising/disclosing, 
               without prejudice to any of Your other rights, the same for any other, 
               whether commercial or non-commercial purpose which the Company 
               in its sole discretion considers necessary for its business
                purposes or otherwise. You can review, add or update certain 
                information by writing to us at support@lenskart.com. When You
                 update information, we usually keep a copy of the prior 
                 version for our records.</p>
          {/* <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p> */}
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
