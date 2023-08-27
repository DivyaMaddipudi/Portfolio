import { contact } from "../../portfolio";
import "./Contact.css";

const Contact = () => {
  if (!contact.email) return null;

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      <span>Email: {contact.email}</span>
      <span>Phone No. {contact.phone}</span>
      <span>Address. {contact.address}</span>
    </section>
  );
};

export default Contact;
