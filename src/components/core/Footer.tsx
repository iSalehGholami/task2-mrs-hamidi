import { Facebook, Instagram, Send2, SliderVertical, Youtube } from "iconsax-react";
import styles from "./styles/Footer.module.css";
import Link from "next/link";
import Divider from "../widgets/Divider";


export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.socialWrapper}>
                <Link href={""} className={styles.socialLink}>
                    <Facebook className={styles.socialLinkIcon} />
                </Link>
                <Link href={""} className={styles.socialLink}>
                    <Instagram className={styles.socialLinkIcon} />
                </Link>
                <Link href={""} className={styles.socialLink}>
                    <Send2 className={styles.socialLinkIcon} />
                </Link>
                <Link href={""} className={styles.socialLink}>
                    <Youtube className={styles.socialLinkIcon} />
                </Link>
            </div>
            <div className={styles.pagesWrapper}>
                <Link href={""} className={styles.socialLink}>
                    درباره اسمارت وست
                </Link>
                <Divider />
                <Link href={""} className={styles.socialLink}>
                    پشتیبانی و قوانین
                </Link>
                <Divider />
                <Link href={""} className={styles.socialLink}>
                    بلاگ
                </Link>
            </div>
        </div>
    )
}
