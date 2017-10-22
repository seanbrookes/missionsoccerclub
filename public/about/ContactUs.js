import React from 'react';

const ContactUs = () => {
  return (
    <div className="webpageModule moduleDetail">
      <h1>Contact Us</h1>
      <p>Mission Soccer Club appreciates your feedback. Please visit our
        <a href="index.php?src=gendocs&amp;ref=ClubOfficials&amp;category=Main">
          <span style="text-decoration: underline;">
            <strong>Club Officials Page</strong>
          </span>
        </a>
        to contact any of the Club Officials Directly. Otherwise you can direct all general inquires to:
      </p>
      <address><strong>Mission Soccer Club</strong></address>
      <address><strong>PO BOX 3164</strong></address>
      <address><strong>MISSION, BC</strong></address>
      <address><strong>V2V 4J4</strong></address>
      <p>Email:
        <span style="text-decoration: underline;">
          <strong>
            <a href="index.php?src=forms&amp;ref=Contact%20Us">CONTACT US</a>
          </strong>
        </span>
      </p>
    </div>
  );
};

export default ContactUs;
