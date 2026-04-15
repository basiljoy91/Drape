import { ContentPanel, FormField, PageHero, SectionTitle } from "../../components/brand-ui";
import { SiteFrame } from "../../components/site-frame";

export default function ContactPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Contact"
        title="Speak with the Drape team."
        description="Use this page for bridal consultations, styling support, order assistance, and boutique inquiries."
      />

      <section className="shell info-grid">
        <ContentPanel>
          <SectionTitle
            eyebrow="Reach Us"
            title="Appointments, styling, and support."
            description="Clients can use this space to book private assistance, wedding styling sessions, and fit guidance."
          />
          <div className="contact-list">
            <p>Email: concierge@drape-house.com</p>
            <p>Phone: +91 90000 00000</p>
            <p>Studio Hours: Monday to Saturday, 10 AM to 7 PM</p>
          </div>
        </ContentPanel>

        <ContentPanel>
          <SectionTitle
            eyebrow="Inquiry Form"
            title="Send a message"
            description="A standard premium store should make contact easy from any stage of the shopping journey."
          />
          <form className="newsletter-form">
            <FormField label="Full Name" placeholder="Enter your name" />
            <FormField label="Email Address" type="email" placeholder="Enter your email" />
            <FormField label="Message" placeholder="Tell us what you need help with" textarea />
            <button type="submit" className="cta-button">
              Send Inquiry
            </button>
          </form>
        </ContentPanel>
      </section>
    </SiteFrame>
  );
}
