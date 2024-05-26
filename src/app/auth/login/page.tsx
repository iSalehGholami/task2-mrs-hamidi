
"use client";
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import Image from 'next/image';
import {
    Minus, Call, Lock
} from "iconsax-react";

import lock from "/public/assets/images/lock.png";
import AuthLayout from '@/view/layout/AuthLayout';
import styles from './styles/login.module.css';

function Login() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    return (
        <AuthLayout>
            <div className={styles.main__container}>
                <form className={styles.formContainer}>
                    <div className={styles.infoPiece}>
                        <div className={styles.smartvest_description}>
                            <div className={styles.smartvest}>اسمارت وست پلتفرمی <span className={styles.safeText}>امن</span></div>
                        </div>
                        <div className={styles.lockContainer}>
                            <div className={styles.lockShape}></div>
                            <Image src={lock} className={styles.lockImage} alt="Lock Icon" />
                        </div>
                        <div className={styles.linksWrapper}>
                            <div className={styles.button_text}>پشتیبانی</div>
                            <Minus />
                            <div className={styles.button_text}>قوانین و مقررات</div>
                        </div>
                    </div>
                    <div className={styles.formPiece}>
                        <div className={styles.card_text}>
                            <div className={styles.text_title}>ورود به حساب کاربری</div>
                        </div>

                        <div className={styles.inputFieldsContainer}>

                            <div className={styles.inputFieldWrapper}>
                                <input type='text' maxLength={11} className={styles.inputField} placeholder='شماره موبایل' pattern='((0?9)|(\+?989))((14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96)|(32)|(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41)|(20)|(21)|(22)|(23)|(31)|(34)|(9910)|(9911)|(9913)|(9914)|(9999)|(999)|(990)|(9810)|(9811)|(9812)|(9813)|(9814)|(9815)|(9816)|(9817)|(998))\d{7}' onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
                                <Call />
                            </div>

                            <div className={styles.inputFieldWrapper}>
                                <input type='password' className={styles.inputField} placeholder='رمزعبور' onChange={(event) => setPassword(event.target.value)} value={password} />
                                <Lock />
                            </div>
                        </div>
                        <div className={styles.actionButtonWrapper}>
                            <div className={styles.actionForgetPassword}>فراموشی رمز عبور؟</div>
                            <input type='submit' className={`${styles.button} ${styles.button_login}`} value="ورود" />
                            <input type='submit' className={`${styles.button} ${styles.button_sign_up}`} value="ساخت حساب" />
                        </div>
                    </div>
                </form>
            </div>
        </AuthLayout>
    );
}

export default Login;

