import { ContentPanel, PageHero, SectionTitle } from "../../components/brand-ui";
import { ContactInquiryForm } from "../../components/contact-inquiry-form";
import { SiteFrame } from "../../components/site-frame";
import { createMetadata } from "../../lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description: "Contact Drape for bridal appointments, styling support, and customer care.",
  path: "/contact",
});

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
          <ContactInquiryForm />
        </ContentPanel>
      </section>
    </SiteFrame>
  );
}
