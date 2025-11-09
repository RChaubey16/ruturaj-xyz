import Fade from "@/components/animation/Fade";
import { ContactForm } from "../components/ContactForm";

const Contact = () => {
  return (
    <Fade>
      <div className="pt-30">
        <ContactForm />
      </div>
    </Fade>
  );
};

export default Contact;
