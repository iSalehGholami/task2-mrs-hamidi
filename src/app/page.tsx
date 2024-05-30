'use client';

import MainLayout from "@/view/layout/MainLayout";
import styles from "./styles/page.module.css";
import { Provider } from "react-redux";
import store from "@/store/store";
import UserInfo from "@/components/userinfo";


export default function Home() {
  return (
    <MainLayout>
      <center>
        <h2>Main Page</h2>
        <UserInfo />
      </center>
    </MainLayout>
  );
}
