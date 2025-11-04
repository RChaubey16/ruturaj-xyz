import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";

export function AccordionComponent() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="accordion-header group">
          <div className="flex gap-4">
            <div>
              <Image
                src="/images/qed42.jpeg"
                width={48}
                height={48}
                alt="QED42 Logo"
                className="object-contain rounded-sm"
              />
            </div>
            <div>
              <h3 className="company">QED42</h3>
              <p className="role">Engineer - Full Stack</p>
            </div>
          </div>

          <div className="w-48 flex gap-4 justify-between">
            <div>
              <p className="duration">May 2023 - Present</p>
              <p className="location">Pune, India</p>
            </div>
            <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </div>
        </AccordionTrigger>

        <AccordionContent className="flex flex-col gap-4 para-text">
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="accordion-header group">
          <div className="flex gap-4">
            <div>
              <Image
                src="/images/qed42.jpeg"
                width={48}
                height={48}
                alt="QED42 Logo"
                className="object-contain rounded-sm"
              />
            </div>
            <div>
              <h3 className="company">QED42</h3>
              <p className="role">Associate Engineer - Full Stack</p>
            </div>
          </div>

          <div className="w-48 flex gap-4 justify-between">
            <div>
              <p className="duration">May 2022 - April 2023</p>
              <p className="location">Pune, India</p>
            </div>
            <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </div>
        </AccordionTrigger>

        <AccordionContent className="flex flex-col gap-4 para-text">
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="accordion-header group">
          <div className="flex gap-4">
            <div>
              <Image
                src="/images/qed42.jpeg"
                width={48}
                height={48}
                alt="QED42 Logo"
                className="object-contain rounded-sm"
              />
            </div>
            <div>
              <h3 className="company">QED42</h3>
              <p className="role">Intern</p>
            </div>
          </div>

          <div className="w-48 flex gap-4 justify-between">
            <div>
              <p className="duration">August 2021 - April 2022</p>
              <p className="location">Pune, India</p>
            </div>
            <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
          </div>
        </AccordionTrigger>

        <AccordionContent className="flex flex-col gap-4 para-text">
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
