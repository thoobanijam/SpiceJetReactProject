import React from "react";
import {
  Phone,
  Mail,
  Smartphone,
  Share2,
} from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "About Us",
      links: [
        ["Spice Route Magazine", "https://corporate.spicejet.com/SpiceRoute.aspx"],
        ["Corporate Overview", "https://corporate.spicejet.com/CorporateOverview.aspx"],
        ["Fleet", "https://corporate.spicejet.com/Fleet.aspx"],
        ["Careers", "https://corporate.spicejet.com/careers.aspx"],
        ["Media Center", "https://corporate.spicejet.com/PressReleaseNews.aspx"],
        ["Awards and Applaud", "https://corporate.spicejet.com/AwardsandApplaud.aspx"],
      ],
    },
    {
      title: "Contact Us",
      links: [
        ["Airports", "https://corporate.spicejet.com/Airports.aspx"],
        ["International Offices", "https://corporate.spicejet.com/InternationalOffices.aspx"],
        ["Corporate Head Office", "https://corporate.spicejet.com/ContactUs.aspx"],
        ["Advertise with Us", "https://corporate.spicejet.com/MediaSale.aspx"],
        ["RFP", "https://corporate.spicejet.com/Content/pdf/GSA-RFP.pdf"],
      ],
    },
    {
      title: "Travel Info",
      links: [
        ["Citizen's Charter", "https://corporate.spicejet.com/Charter.aspx"],
        ["FAQ", "https://corporate.spicejet.com/GeneralAirTravelFaq.aspx"],
        ["Fitness To Fly Guideline", "https://corporate.spicejet.com/Content/pdf/FitnessFlyGuidelines.pdf"],
        ["Flight Schedules", "https://corporate.spicejet.com/Schedules.aspx"],
        ["Terms of Carriage", "https://corporate.spicejet.com/Tnc.aspx"],
        ["Fees and Charges", "https://corporate.spicejet.com/FeesCharges.aspx"],
        ["Know Your Rights", "https://www.civilaviation.gov.in/ministry-documents/passenger-charter-of-rights"],
        ["Book Any Test From Any Lab", "http://flebo.in/"],
        ["Book Any Test From Any Lab in Delhi", "https://flebo.in/health/delhi/"],
      ],
    },
    {
      title: "Investors",
      links: [
        ["Corporate Governance", "https://corporate.spicejet.com/InvestorsCorporateGovernance.aspx"],
        ["Financial Information", "https://corporate.spicejet.com/InvestorsFinancialInformation.aspx"],
        ["Notices", "https://corporate.spicejet.com/InvestorsNotices.aspx"],
        ["Corporate Announcements", "https://corporate.spicejet.com/InvestorCorporateAnnouncements.aspx"],
        ["Shareholding Pattern", "https://corporate.spicejet.com/InvestorsShareholdingPattern.aspx"],
        ["Investor Services", "https://corporate.spicejet.com/InvestorServices.aspx"],
        ["Disclosure Regulation 46", "https://corporate.spicejet.com/Regulation46.aspx"],
      ],
    },
  ];

  const bottomLinks = [
    ["Privacy Policy", "https://corporate.spicejet.com/PrivacyPolicy.aspx"],
    ["Disclaimer", "https://corporate.spicejet.com/Disclaimer.aspx"],
    ["GST Information", "https://corporate.spicejet.com/GstInformation.aspx"],
    ["Sitemap", "https://corporate.spicejet.com/Sitemap.aspx"],
  ];

  return (
    <footer className="w-full bg-[white] text-black">

      {/* Main Footer */}
      <div className="mx-auto grid w-[90%] grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">

        {/* Footer Links */}
        {footerSections.map((section, index) => (
          <div key={index}>
            <h2 className="mb-5 border-b border-gray-600 pb-3 text-lg font-bold text-[#faad46]">
              {section.title}
            </h2>

            <ul className="flex flex-col gap-3">
              {section.links.map(([name, url], i) => (
                <li key={i}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-black transition hover:text-[#faad46]"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Customer Support */}
        <div>
          <h2 className="mb-5 border-b border-gray-600 pb-3 text-lg font-bold text-[#faad46]">
            Reservations or Customer Support
          </h2>

          <div className="flex flex-col gap-4 text-xl text-black">
            <div className="flex items-start gap-3">
              <Phone size={20} className="shrink-0 text-[#faad46]" />
              <p>
                +91 (0)124 4983410
                <br />
                +91 (0)124 7101600
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Mail size={20} className="shrink-0 text-[#faad46]" />
              <a
                href="mailto:custrelations@spicejet.com"
                className="break-all hover:text-[#faad46]"
              >
                custrelations@spicejet.com
              </a>
            </div>
          </div>
        </div>

        {/* Social Media and App */}
        <div>
          <h2 className="mb-5 border-b border-gray-600 pb-3 text-lg font-bold text-[#faad46]">
            Follow us
          </h2>

        <div className="mb-8 flex flex-wrap gap-4 text-xl">
  <a href="https://www.facebook.com/SpiceJet" target="_blank" rel="noreferrer">
    Facebook
  </a>

  <a href="https://www.instagram.com/spicejetairlines/" target="_blank" rel="noreferrer">
    Instagram
  </a>

  <a href="https://twitter.com/flyspicejet" target="_blank" rel="noreferrer">
    Twitter
  </a>

  <a href="https://www.youtube.com/user/SpiceJet" target="_blank" rel="noreferrer">
    YouTube
  </a>
</div>

          <h2 className="mb-4 text-lg font-bold text-[#faad46]">
            Download our mobile app
          </h2>

          <div className="flex items-center gap-3">
            <Smartphone size={30} className="text-[#faad46]" />
            <p className="text-xl text-black">
              Download the SpiceJet app for easy booking.
            </p>
          </div>
        </div>

      </div>

      {/* Note */}
      <div className="border-t border-gray-700 px-5 py-5 text-center">
        <p className="text-xl text-black-">
          <span className="font-bold text-black">Note:</span>
          {" "}We log the IP addresses of the visitors on our website for security reasons.
        </p>
      </div>

      {/* Copyright */}
      <div className="bg-[#1b1b1b] px-5 py-6 text-center">
        <p className="mb-2 text-sm text-gray-300">
          © Copyright Spicejet India. All Rights Reserved
        </p>

        <p className="mb-5 text-xs text-gray-400">
          Registered Office: SpiceJet Ltd, 319, Udyog Vihar, Phase IV,
          Gurgaon, Haryana - 122016
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-400">
          {bottomLinks.map(([name, url], index) => (
            <React.Fragment key={index}>
              {index !== 0 && <span>•</span>}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#faad46]"
              >
                {name}
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>

    </footer>
  );
};

export default Footer;