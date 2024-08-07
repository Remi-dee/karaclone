// components/PrivacyPolicy.tsx
"use client";
import Footer from "@/Components/LandingPage/Footer";
import Navbar from "@/Components/LandingPage/Navbar";
import React, { useState } from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-black mb-4 text-center text-slate-800 py-20 bg-slate-50">
        Privacy Policy
      </h1>
      <div className="p-6 max-w-6xl mx-auto text-slate-900 prose text-sm">
        <h2 className=" font-semibold mt-6 mb-2">Our privacy Policy</h2>
        <p className="mb-4 text-sm text-slate-700">
          ‍At Fx Karasell, we value your privacy and strive to protect your
          personal information. “Personal information” refers to any information
          from which your identity could reasonably be ascertained. Fx Karasell
          will only collect and use your personal information in accordance with
          this Privacy Policy and the terms of your agreements with Karasell
        </p>
        <p className=" mt-6 mb-2">This Privacy Policy explains</p>
        <ul className="list-disc list-inside ml-5 mb-4 text-slate-700">
          <li>The type of personal information we collect</li>
          <li>How we collect personal information</li>
          <li>How we use cookies</li>
          <li>How we use your personal information</li>
          <li>Disclosure of personal information</li>
          <li>Security of your personal information</li>
          <li>Global company</li>
          <li>Additional matters relating to personal information</li>
        </ul>
        <h2 className=" font-semibold mt-6 mb-2">
          What information do we collect?
        </h2>
        <p className="mb-4 text-sm text-slate-700">
          ‍In order to enable us to deal with your inquiries, open and operate
          an account or to generally provide you with our products and services
          and comply with laws and regulations, we may need to and/or may be
          required to collect, record, hold, use, disclose and store (i.e.
          “process”) personal information and financial information about you,
          including but not limited to:
        </p>
        <ul className="list-disc list-inside ml-5 mb-4 text-slate-700">
          <li>
            Personal information to establish your identity and background.
          </li>
          <li>
            Personal information that you provide when you apply for any of our
            products and services.
          </li>
        </ul>
        <h2 className=" font-semibold mt-6 mb-2">
          How we collect personal information?
        </h2>
        <p className="mb-4 text-sm text-slate-700">
          ‍We obtain personal information in various ways, including but not
          limited to:
          <br />
          <br /> When you register an account with Fx Karasell through our
          website; through your relationship with us, for example information
          provided by you when using our products or services, when taking part
          in customer surveys, competitions and promotions; from an analysis of
          the way you use and manage your account with us, from the transactions
          you make and from the payments which are made to/from your account;
          when you contact Fx Karasell through various methods such as
          application forms, email, letters and telephone calls. If you contact
          us or we contact you using telephone, we may monitor or record the
          phone call for quality assurance, training and security purposes; when
          we obtain any data and information from third parties (e.g. credit
          reference agencies, regulatory and enforcement agencies, identity
          verification services) and/or from such other sources in respect of
          which you have given your consent to disclose information relating to
          you and/or where not otherwise restricted.
        </p>
        <h2 className=" font-semibold mt-6 mb-2">How we use cookies</h2>
        <p className="mb-4 text-sm text-slate-700">
          ‍Cookies help us give you the best experience of using our site. In
          this policy we use the term "cookies" to refer to cookies and other
          similar technologies.
          <br />
          <br />
          Cookies are small data files that we or companies we work with may
          place on your computer or other device when you visit our website.
          They allow us to remember your actions or preferences over time.
          <br />
          We use cookies to collect data that helps us to:
          <br /> <br />
          <ul className="list-disc list-inside ml-5 mb-4">
            <li>Track site usage and browsing behaviour;</li>
            <li>
              Allow you to log-in to your account and navigate through the
              website;
            </li>
            <li>
              Monitor the effectiveness of our promotions and advertising; and
            </li>
            <li>Mitigate risk, enhance security and help prevent fraud.</li>
            <li>
              We use both session and persistent cookies. Session cookies are
              deleted when you close down your browser, while persistent cookies
              remain on your device until they expire or you delete them.
              Persistent cookies allow us to remember things about you when you
              visit our website again.
            </li>
          </ul>
          To help us monitor the effectiveness of our promotions and
          advertising, we may provide site usage data obtained through the use
          of cookies to select third-party service providers. Any data provided
          by us to these third parties will be non-personally identifiable.
          <br />
          By signing-up for an account with Fx Karasell, or continuing to use
          our website, you agree to our use of cookies as set out in this
          policy. You may decline our cookies if your browser or browser add-on
          permits, but doing so may interfere with your use of Fx Karasell's
          services. For information on how to delete or reject cookies, you can
          consult the "help" function within your browser, or visit
          www.allaboutcookies.org, where you will also find more information
          about cookies generally.
        </p>

        <h2 className=" font-semibold mt-6 mb-2">
          Disclosure of personal informationn
        </h2>
        <p className="mb-4 text-sm text-slate-700">
          Other than as stated above, we may use your personal information for
          one or more of the following purposes: to verify your account in
          accordance with Know Your Customer (KYC) and Anti-Money Laundering
          (AML) regulations;
          <br />
          <br />
          <ul className="list-disc list-inside ml-5 mb-4">
            <li>
              To verify your account in accordance with Know Your Customer (KYC)
              and Anti-Money Laundering (AML) regulations;
            </li>
            <li>To assess your application for our products and services;</li>
            <li>To manage and maintain your account with us;</li>
            <li>
              To better manage our business and your relationship with us;
            </li>
            <li>
              To improve our products and services and to develop new products
              and services;
            </li>
            <li>
              To notify you about benefits and changes to the features of
              products and services;
            </li>
            <li>To administer offers, competitions and promotions;</li>
            <li>
              To respond to your enquiries and complaints and to generally
              resolve disputes;
            </li>
            <li>
              To update, consolidate and improve the accuracy of our records;
            </li>
            <li>
              To produce data, reports and statistics which have been anonymised
              or aggregated in a manner that does not identify you as an
              individual;
            </li>
            <li>
              To conduct research for analytical purposes including but not
              limited to data mining and analysis of your transactions with us;
            </li>
            <li>
              To meet the disclosure requirements of any law binding on Fx
              Karasell;
            </li>
            <li>For audit, compliance and risk management purposes;</li>
            <li>To assess financial and insurance risks;</li>
            <li>
              To conduct anti-money laundering checks; for crime detection,
              prevention and prosecution; to comply with any sanction
              requirements;
            </li>
            <li>
              For any other purpose that is required or permitted by any law,
              regulations, guidelines or relevant regulatory authorities.
            </li>
          </ul>
          <br />
          Please be assured that we will ask for your consent before using your
          personal information for a purpose other than those set out in this
          Privacy Policy and in the terms in your agreements with Fx Karasell.
        </p>

        {/* section  */}
        <h2 className=" font-semibold mt-6 mb-2">
          Disclosure of personal information
        </h2>
        <p className="mb-4 text-sm text-slate-700">
          As a part of providing you with our products and services, and for the
          management and operations of these products and services, and to
          comply with legal and regulatory requirements, we may be required or
          need to disclose information about you and your account with us to the
          following third parties:
          <br />
          <br />
          <ul className="list-disc list-inside ml-5 mb-4">
            <li>
              Companies and organisations that act as our agents, affiliates
              and/or professional advisers;
            </li>
            <li>
              Companies and organisations that assist us in processing or
              otherwise fulfilling transactions that you have requested;
            </li>
            <li>Law enforcement, regulatory and governmental agencies;</li>
            <li>
              Your advisers (including but not limited to accountants, auditors,
              lawyers, financial advisers or other professional advisers) where
              authorised by you;
            </li>
            <li>
              Any other person notified by you as authorised to give
              instructions or to use the accounts, facilities, products or
              services on your behalf.
            </li>
            <li>
              The aforementioned third parties may in some instances be located
              outside of your country.
            </li>
          </ul>
          <br />
          We will otherwise treat your personal information as private and
          confidential and will not disclose your information to anyone outside
          Fx Karasell except:
          <br />
          <br />
          <ul className="list-disc list-inside ml-5 mb-4">
            <li>Where you have given permission;</li>
            <li>Where we are required or permitted to do so by law;</li>
            <li>
              Where required or authorised by any order of court, tribunal or
              authority, whether governmental or quasi-governmental with
              jurisdiction over Fx Karasell;
            </li>
            <li>
              Where we may transfer rights and obligations pursuant to our
              agreement with you;
            </li>
            <li>
              Where we are required to meet our obligations to any relevant
              regulatory authority (whether in or outside your country).
            </li>
          </ul>
        </p>
      </div>
      <Footer/>

    </div>
  );
};

export default PrivacyPolicy;
