import Image from "next/image";
import Link from "next/link";

const Tech = () => {
  return (
    <div>
      <Link href={"#"}>
        <div className="relative w-10 h-10">
          <Image
            src="https://icon.icepanel.io/Technology/svg/TypeScript.svg"
            fill
            alt="Tech"
            className="object-contain"
          />
        </div>
      </Link>
    </div>
  );
};

export default Tech;
