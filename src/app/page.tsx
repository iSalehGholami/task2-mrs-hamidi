'use client';

import MainLayout from "@/view/layout/MainLayout";
import styles from "./styles/page.module.css";
import { Provider } from "react-redux";
import store from "@/store/store";
import UserInfo from "@/components/userinfo";
import { ArrowCircleLeft } from "iconsax-react";
import AdvertisementCard from "@/components/core/AdvertisementCard";
import Image from "next/image";
import { ReactNode } from "react";


export default function Home() {
  const elements : Array<ReactNode> = [];
    for (let i = 0; i < 15; i++) {
    elements.push(
      <AdvertisementCard image={"/assets/images/villa.png"} address="تهران،جردن" price="3,500,000,000 تومان" rooms="4" surface="430" title="ویلا ۵۰۰ متری نوساز" />
    );
  }
  return (
    <MainLayout>
        <h2>Main Page</h2>
        <UserInfo />
        <div className={styles.suggestionContainer}>
          <div className={styles.suggestionHeader}>
              <div className={styles.suggestionHeaderViewAllBox}>
                  <ArrowCircleLeft className={styles.suggestionHeaderViewIcon} />
                  <div className={styles.suggestionHeaderViewText}>مشاهده همه</div>
              </div>
              <div className={styles.suggestionHeaderTitle}>آگهی های پیشنهادی</div>
          </div>
          <div className={styles.suggestionList}>
            {...elements}
          </div>
        </div>
    </MainLayout>
  );
}
