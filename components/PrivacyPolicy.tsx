import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-32 pb-20 bg-stone-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4">Privacy and Policy</h1>
          <p className="text-sm text-stone-500">Last updated: November 24, 2024</p>
        </div>

        {/* Content */}
        <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-stone-100 prose prose-stone max-w-none">

          <p className="text-lg text-stone-700 leading-relaxed mb-8">
            Charmétique ("we," "us," "our") is committed to protecting your privacy. This Privacy Policy explains how personal information is collected, used, and disclosed when you visit or make a purchase from www.charmetique.com ("Site") or otherwise interact with us.
          </p>

          <section className="mb-10" id="what-personal-information-we-collect">
            <h2 className="text-2xl font-serif text-stone-900 mb-4">What Personal Information We Collect</h2>
            <p className="text-stone-600 mb-4">When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.</p>
            <p className="text-stone-600 mb-4">Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as "Device Information."</p>
            <p className="text-stone-600 mb-4">We collect Device Information using the following technologies:</p>
            <ul className="list-disc pl-6 text-stone-600 space-y-2 mb-4">
              <li>"Cookies" are data files that are placed on your device or computer and often include an anonymous unique identifier.</li>
              <li>"Log files" track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</li>
              <li>"Web beacons," "tags," and "pixels" are electronic files used to record information about how you browse the Site.</li>
            </ul>
            <p className="text-stone-600">When you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information, email address, and phone number. We refer to this information as "Order Information."</p>
          </section>

          <section className="mb-10" id="how-we-use-your-information">
            <h2 className="text-2xl font-serif text-stone-900 mb-4">How We Use Your Information</h2>
            <p className="text-stone-600 mb-4">We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).</p>
            <p className="text-stone-600 mb-4">Additionally, we use this Order Information to:</p>
            <ul className="list-disc pl-6 text-stone-600 space-y-2 mb-4">
              <li>Communicate with you;</li>
              <li>Screen our orders for potential risk or fraud;</li>
              <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
            </ul>
            <p className="text-stone-600">We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site.</p>
          </section>

          <section className="mb-10" id="how-we-share-your-information">
            <h2 className="text-2xl font-serif text-stone-900 mb-4">How We Share Your Information</h2>
            <p className="text-stone-600 mb-4">We share your Personal Information with third parties to help us use your Personal Information, as described above. We use third-party services to power our online store and process payments securely.</p>
            <p className="text-stone-600 mb-4">We may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>
          </section>

          <section className="mb-10" id="your-rights">
            <h2 className="text-2xl font-serif text-stone-900 mb-4">Your Rights</h2>
            <p className="text-stone-600 mb-4">If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.</p>
            <p className="text-stone-600 mb-4">Additionally, if you are a European resident, we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above.</p>
            <p className="text-stone-600">Please note that your information will be transferred outside of Europe, including to the United States and other countries.</p>
          </section>

          <section className="mb-10" id="cookies-and-tracking">
            <h2 className="text-2xl font-serif text-stone-900 mb-4">Cookies and Tracking</h2>
            <p className="text-stone-600 mb-4">We use cookies to help us understand how visitors use our Site. Cookies are small text files that are stored on your browser or device by websites, apps, online media, and advertisements.</p>
            <p className="text-stone-600 mb-4">You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies can negatively impact your user experience and parts of our website may no longer be fully accessible.</p>
            <p className="text-stone-600">Most browsers automatically accept cookies, but you can choose whether or not to accept cookies through your browser controls, often found in your browser's "Tools" or "Preferences" menu.</p>
          </section>

          <section className="mb-10" id="data-retention">
            <h2 className="text-2xl font-serif text-stone-900 mb-4">Data Retention</h2>
            <p className="text-stone-600">When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.</p>
          </section>

          <section className="mb-10" id="changes-to-this-policy">
            <h2 className="text-2xl font-serif text-stone-900 mb-4">Changes to This Policy</h2>
            <p className="text-stone-600">We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons. We encourage you to review this Privacy Policy periodically for any changes.</p>
          </section>

          <section id="contact-us">
            <h2 className="text-2xl font-serif text-stone-900 mb-4">Contact Us</h2>
            <p className="text-stone-600 mb-4">For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href="mailto:info@charmetique.com" className="text-stone-900 underline hover:no-underline">info@charmetique.com</a> or by mail using the details provided below:</p>
            <div className="text-stone-600">
              <p>Charmétique B.V.</p>
              <p>Jan de Louterstraat 22, 1063 KX</p>
              <p>Amsterdam, The Netherlands</p>
              <p className="mt-2">KvK: 94703256</p>
              <p>BTW-ID: NL866864921B01</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
