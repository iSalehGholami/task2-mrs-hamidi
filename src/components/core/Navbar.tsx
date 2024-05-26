import { ArrowDown, ArrowDown2, ArrowSquareDown, Moon, Profile, SearchNormal } from "iconsax-react";
import styles from "./styles/Navbar.module.css";
import Image from "next/image";
import iranFlag from "/public/assets/icons/iranFlag.svg";
import Link from "next/link";
import Logo from "/public/assets/icons/logo.png";
import Divider from "../widgets/Divider";

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.actionsWrapper}>
        <div className={styles.circleBtn}>
          <Profile className={styles.circleBtnIcon} />
        </div>

        <div className={styles.newAdBtn}>ثبت اگهی جدید</div>

        <div className={styles.faqBtn}>سوالات متداول</div>

        <div className={styles.circleBtn}>
          <Moon className={styles.circleBtnIcon} />
        </div>

        <div className={styles.languageSelectorBtn}>
          <ArrowDown2 className={styles.languageDropDown} />
          <div className={styles.languageName}>فارسی</div>
          <Image className={styles.languageFlag} src={iranFlag} alt="پرچم ایران" />
        </div>
      </div>
      <div className={styles.routesContainer}>
        <div className={styles.linksWrapper}>
          <div className={styles.circleBtn}>
            <SearchNormal className={styles.circleBtnIcon} />
          </div>
          <Divider color="#C4C4C4" />
          <Link href={""} className={styles.navLink}>
            <div className={styles.footerItemText}>مسکونی</div>
          </Link>
          <Link href={""} className={styles.navLink}>
            <div className={styles.footerItemText}>تجاری و اداری</div>
          </Link>

          <Link href={""} className={styles.navLink}>
            <div className={styles.footerItemText}>زمین</div>
          </Link>
          <Link href={""} className={styles.navLink}>
            <div className={styles.footerItemText}>ویلا</div>
          </Link>
          <Image src={Logo} className={styles.logo} alt="SmartVest logo" />
        </div>
      </div>
    </div>
  )
}
