import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <div className="terms-content">
        <header className="terms-header">
          <div className="header-overlay"></div>
          <h1>Terms and Conditions</h1>
          <p className="last-updated">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <div className="company-contact">
            <p>Greenworks Carpet Service Cleaning</p>
            <p>16824 44th Ave W Unit-170, Lynnwood, WA 98037</p>
            <p><a href="tel:2068996862">(206) 899-6862</a> | <a href="mailto:info@greenworkscarpetcleaning.com">info@greenworkscarpetcleaning.com</a></p>
          </div>
        </header>

        <div className="terms-main-content">
          <section className="terms-section">
            <div className="section-header">
              <div className="section-number">1</div>
              <h2>Service Agreement</h2>
            </div>
            <div className="section-content">
              <p>
                By booking our services, you agree to the following terms:
              </p>
              <ul>
                <li>All services must be scheduled in advance</li>
                <li>A cancellation fee may apply if appointment is cancelled less than 24 hours before scheduled time</li>
                <li>We reserve the right to refuse service if conditions are unsafe or unsanitary</li>
                <li>Pets must be secured during service for their safety and our technicians' safety</li>
              </ul>
            </div>
          </section>

          <section className="terms-section">
            <div className="section-header">
              <div className="section-number">2</div>
              <h2>Pricing and Payments</h2>
            </div>
            <div className="section-content">
              <p>
                Our pricing structure is as follows:
              </p>
              <ul>
                <li>Quotes are based on square footage and condition of carpets</li>
                <li>Final price may vary if actual conditions differ from initial assessment</li>
                <li>Payment is due upon completion of service unless prior arrangements are made</li>
                <li>We accept cash, checks, and all major credit cards</li>
                <li>A $35 fee will be charged for returned checks</li>
              </ul>
            </div>
          </section>

          <section className="terms-section">
            <div className="section-header">
              <div className="section-number">3</div>
              <h2>Service Guarantee</h2>
            </div>
            <div className="section-content">
              <p>
                We stand behind our work with the following guarantees:
              </p>
              <ul>
                <li>100% satisfaction guarantee - if you're not happy, we'll re-clean the area at no additional cost</li>
                <li>Stain removal results vary based on type and age of stain - we'll provide honest assessment before treatment</li>
                <li>Guarantee valid when concerns are reported within 48 hours of service</li>
                <li>Does not cover pre-existing damage or wear to carpets</li>
              </ul>
            </div>
          </section>

          <section className="terms-section">
            <div className="section-header">
              <div className="section-number">4</div>
              <h2>Customer Responsibilities</h2>
            </div>
            <div className="section-content">
              <p>
                To ensure the best results, customers agree to:
              </p>
              <ul>
                <li>Remove small furniture and personal items from areas to be cleaned</li>
                <li>Inform us of any special concerns or delicate fabrics</li>
                <li>Provide access to water and electricity as needed</li>
                <li>Keep children and pets away from work areas during service</li>
                <li>Ventilate the area properly after service</li>
              </ul>
            </div>
          </section>

          <section className="terms-section">
            <div className="section-header">
              <div className="section-number">5</div>
              <h2>Liability</h2>
            </div>
            <div className="section-content">
              <p>
                Greenworks Carpet Service Cleaning maintains proper insurance and takes all reasonable precautions, however:
              </p>
              <ul>
                <li>We are not responsible for damage due to pre-existing weak or worn carpet conditions</li>
                <li>Some stains may not be completely removable due to their nature or age</li>
                <li>Color loss or texture changes may occur with certain carpet types</li>
                <li>We must be notified of any concerns within 48 hours of service completion</li>
              </ul>
              <p>
                Our maximum liability for any claim is limited to the amount paid for the service in question.
              </p>
            </div>
          </section>

          <section className="terms-section">
            <div className="section-header">
              <div className="section-number">6</div>
              <h2>General Terms</h2>
            </div>
            <div className="section-content">
              <ul>
                <li>These terms constitute the entire agreement between you and Greenworks Carpet Service Cleaning</li>
                <li>We reserve the right to modify these terms at any time</li>
                <li>Washington state law governs this agreement</li>
                <li>Any disputes will be resolved through mediation in Snohomish County</li>
                <li>By booking our services, you acknowledge you have read and agree to these terms</li>
              </ul>
              <address>
                For questions about these terms, contact:<br />
                Greenworks Carpet Service Cleaning<br />
                16824 44th Ave W Unit-170<br />
                Lynnwood, WA 98037<br />
                Phone: <a href="tel:2068996862">(206) 899-6862</a><br />
                Email: <a href="mailto:info@greenworkscarpetcleaning.com">info@greenworkscarpetcleaning.com</a>
              </address>
            </div>
          </section>
        </div>

        <footer className="terms-footer">
          <p>© {new Date().getFullYear()} Greenworks Carpet Service Cleaning. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default TermsAndConditions;