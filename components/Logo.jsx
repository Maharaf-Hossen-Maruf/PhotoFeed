import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={'/'}>
      <Image
        className="max-w-[100px] md:max-w-[165px]"
        // src="/assets/lws_logo.png"
        src="/assets/lws_logo.png"
        alt="Lws"
        width={100}
        height={165}
      />
    </Link>
  );
}
