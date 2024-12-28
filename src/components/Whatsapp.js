import "../styles/Whatsapp.css";
import Link from "next/link";
import Image from "next/image";

export default function WhatsApp() {
  return (
    
      <div className="whatsapp-conatainer">
        <Link href="/#" className="whatsapp-fixed">
          <Image src="/images/whatsapp-icon.png" width={60} height={60} alt="WhatsApp" />
        </Link>
      </div>
    
  );
}
