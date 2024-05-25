import { Youtube, Instagram, Send2 } from "iconsax-react";
import styles from "./styles/AuthFooter.module.css";
import Link from "next/link";

const AuthFooter = () => {
    return <div className={styles.footer}>
        <Link href={""} className={styles.footerItemWrapper}>
            <Send2 />
            <div className={styles.footerItemText}>Telegram</div>
        </Link>
        <Link href={""} className={styles.footerItemWrapper}>
            <Instagram />
            <div className={styles.footerItemText}>Instagram</div>
        </Link>
        <Link href={""} className={styles.footerItemWrapper}>
            <Youtube />
            <div className={styles.footerItemText}>Youtube</div>
        </Link>

    </div>
}

export default AuthFooter;