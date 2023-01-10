import styles from "./Logo.module.scss";
import logoIcon from "../../public/image/jalapeno.jpg";
import Image from "next/image";
function Logo() {
  return (
    <div className={styles.logo}>
      <Image src={logoIcon} width={60} height={60} alt="로고" />
    </div>
  );
}

export default Logo;
