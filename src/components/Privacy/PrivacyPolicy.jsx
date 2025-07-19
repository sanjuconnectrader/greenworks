import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-content">
        <header className="privacy-header">
          <div className="privacy-header-overlay"></div>
          <h1>Privacy Policy</h1>
          <p className="privacy-last-updated">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <div className="privacy-company-contact">
            <p>Greenworks Carpet Service Cleaning</p>
            <p>16824 44th Ave W Unit-170, Lynnwood, WA 98037</p>
            <p><a href="tel:2068996862">(206) 899-6862</a> | <a href="mailto:info@greenworkscarpetcleaning.com">info@greenworkscarpetcleaning.com</a></p>
          </div>
        </header>

        <div className="privacy-main-content">
          <section className="privacy-section">
            <div className="privacy-section-header">
              <div className="privacy-section-number">1</div>
              <h2>Information We Collect</h2>
            </div>
            <div className="privacy-section-content">
              <p>
                Greenworks Carpet Service Cleaning collects information through our website contact forms, phone calls, and service appointments. We may collect:
              </p>
              <ul>
                <li>Your name and contact information (email, phone, address)</li>
                <li>Details about your carpet cleaning needs</li>
                <li>Payment information for services rendered</li>
                <li>Service history and preferences</li>
              </ul>
              <p>
                We do not collect browsing history or use marketing cookies without your explicit consent.
              </p>
            </div>
          </section>

          <section className="privacy-section">
            <div className="privacy-section-header">
              <div className="privacy-section-number">2</div>
              <h2>How We Use Your Information</h2>
            </div>
            <div className="privacy-section-content">
              <p>
                Your information is used exclusively to:
              </p>
              <ul>
                <li>Provide and schedule cleaning services</li>
                <li>Process payments and send service confirmations</li>
                <li>Improve our services and customer experience</li>
                <li>Communicate important service updates</li>
              </ul>
              <p>
                We never sell or rent your information to third parties. Service providers (like payment processors) are contractually bound to protect your data.
              </p>
            </div>
          </section>

          <section className="privacy-section">
            <div className="privacy-section-header">
              <div className="privacy-section-number">3</div>
              <h2>Data Storage & Security</h2>
            </div>
            <div className="privacy-section-content">
              <p>
                Customer information is stored on secure, access-controlled systems with encryption. We retain service records for 3 years for warranty purposes, after which they are securely deleted.
              </p>
              <p>
                Payment information is processed through PCI-compliant services and is not stored on our systems after transaction completion.
              </p>
            </div>
          </section>

          <section className="privacy-section">
            <div className="privacy-section-header">
              <div className="privacy-section-number">4</div>
              <h2>Your Privacy Rights</h2>
            </div>
            <div className="privacy-section-content">
              <p>
                You have the right to:
              </p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal data (where applicable)</li>
                <li>Opt-out of marketing communications</li>
              </ul>
              <p>
                To exercise these rights, contact us at <a href="mailto:info@greenworkscarpetcleaning.com">info@greenworkscarpetcleaning.com</a> or call <a href="tel:2068996862">(206) 899-6862</a>. We respond to all requests within 30 days.
              </p>
            </div>
          </section>

          <section className="privacy-section">
            <div className="privacy-section-header">
              <div className="privacy-section-number">5</div>
              <h2>Policy Updates & Contact</h2>
            </div>
            <div className="privacy-section-content">
              <p>
                This policy may be updated to reflect changes in our practices or legal requirements. The "Last updated" date at the top of this page will indicate when changes were made.
              </p>
              <p>
                For privacy-related questions or concerns, please contact:
              </p>
              <address>
                Greenworks Carpet Service Cleaning<br />
                16824 44th Ave W Unit-170<br />
                Lynnwood, WA 98037<br />
                Phone: <a href="tel:2068996862">(206) 899-6862</a><br />
                Email: <a href="mailto:info@greenworkscarpetcleaning.com">info@greenworkscarpetcleaning.com</a>
              </address>
            </div>
          </section>
        </div>

        <footer className="privacy-footer">
          <p>© {new Date().getFullYear()} Greenworks Carpet Service Cleaning. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;