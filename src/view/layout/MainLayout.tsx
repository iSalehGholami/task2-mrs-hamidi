"use client";
import Footer from "@/components/core/Footer";
import Navbar from "@/components/core/Navbar";
import { DetailedHTMLProps, HTMLAttributes } from "react";

import styles from "./styles/MainLayout.module.css";

const MainLayout = ({ children }: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => {
    return <>
        <div className={styles.header}>
            <Navbar />
        </div>
        <div className={styles.mainContainer}>
            {children}
        </div>
        <div className={styles.footer}>
            <Footer />
        </div>
    </>
};

export default MainLayout;