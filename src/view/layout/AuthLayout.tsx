"use client";
import AuthFooter from "@/components/core/AuthFooter";
import styles from "./styles/AuthLayout.module.css";
import authPageImage from "/public/assets/images/background2.jpg";
import Image from "next/image";
import { DetailedHTMLProps, HTMLAttributes } from "react";

const AuthLayout = ({ children }: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => {
    return (
        <div className={styles.authLayout}>
            <Image
                className={styles.image}
                src={authPageImage}
                alt="NYC Landscape"
            />
            <div className={styles.content}>{children}</div>
            <div className={styles.footer}>
                <AuthFooter />
            </div>
        </div>
    )
}

export default AuthLayout;