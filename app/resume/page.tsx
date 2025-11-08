import Fade from "@/components/animation/Fade";
import ResumePDFViewer from "../components/ResumePDFViewer";

export default function Home() {
  return (
    <section className="pt-20 bg-background">
      <Fade>
        <ResumePDFViewer />
      </Fade>
    </section>
  );
}
