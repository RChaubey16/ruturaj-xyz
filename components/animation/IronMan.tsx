import Image from "next/image";
import { forwardRef } from "react";

const IronMan = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div
      ref={ref}
      className="absolute top-[60%] right-50 flex items-center gap-2 hidden-slide"
    >
      <Image
        src="/assets/iron-man.gif"
        alt="Iron Man animation"
        width={64}
        height={64}
        unoptimized
      />
    </div>
  );
});

IronMan.displayName = "IronMan";

export default IronMan;
