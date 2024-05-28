
"use client";
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import Image from 'next/image';
import {
    Minus, User, Call, Edit2, Google, Lock
} from "iconsax-react";

import lock from "/public/assets/images/lock.png";
import AuthLayout from '@/view/layout/AuthLayout';2
import styles from './style/signup.module.css';

function Signup() {
    const [name, setName] = useState("");
    const [family, setFamily] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [nationalCode, setNationalCode] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    function handleNationalCode(e: any) {
        if (e.key.length === 1 && /\D/.test(e.key)) {
            e.preventDefault();
        }
    }``
    return (
        <AuthLayout>
            <div className={styles.main__container}>
                <form className={styles.formContainer}>
                    <div className={styles.infoPiece}>
                        <div className={styles.smartvest_description}>
                            <div className={styles.smartvest}>اسمارت وست</div>
                            <div className={styles.subTitle}>پلتفرمی امن برای خرید و فروش زمین و املاک شما</div>
                        </div>
                        <div className={styles.lockContainer}>
                            <div className={styles.lockShape}></div>
                            <Image src={lock} className={styles.lockImage} alt="Lock Icon" />
                        </div>
                        <div className={styles.linksWrapper}>
                            <div className={styles.button_text}>پشتیبانی</div>
                            <div>
                                <Minus />
                            </div>
                            <div className={styles.button_text}>قوانین و مقررات</div>
                        </div>
                    </div>
                    <div className={styles.formPiece}>
                        <div className={styles.card_text}>
                            <div className={styles.text_title}>همین حالا ثبت نام کنید</div>
                            <div className={styles.text_description}>اطلاعات شخصی فرم را وارد کنید</div>
                        </div>
                        <div className={styles.inputFieldsContainer}>
                            <div className={styles.inputFieldWrapper}>
                                <input type='text' className={styles.inputField} placeholder='نام' onChange={(event) => setName(event.target.value)} value={name} />
                                <User />
                            </div>
                            <div className={styles.inputFieldWrapper}>
                                <input type='text' className={styles.inputField} placeholder='نام خانوادگی' onChange={(event) => setFamily(event.target.value)} value={family} />
                                <User />
                            </div>

                            <div className={styles.inputFieldWrapper}>
                                <input type='text' maxLength={11} className={styles.inputField} placeholder='شماره موبایل' pattern='((0?9)|(\+?989))((14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96)|(32)|(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41)|(20)|(21)|(22)|(23)|(31)|(34)|(9910)|(9911)|(9913)|(9914)|(9999)|(999)|(990)|(9810)|(9811)|(9812)|(9813)|(9814)|(9815)|(9816)|(9817)|(998))\d{7}' onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
                                <Call />

                            </div>

                            <div className={styles.inputFieldWrapper}>
                                <input type='text' className={styles.inputField} maxLength={10} onKeyDown={handleNationalCode} placeholder='کدملی' onChange={(event) => setNationalCode(event.target.value)} value={nationalCode} />
                                <Edit2 />

                            </div>

                            <div className={styles.inputFieldWrapper}>
                                <input type='email' className={styles.inputField} placeholder='ایمیل' onChange={(event) => setEmailAddress(event.target.value)} value={emailAddress} />
                                <Google />

                            </div>

                            <div className={styles.inputFieldWrapper}>
                                <input type='password' className={styles.inputField} placeholder='رمزعبور' onChange={(event) => setPassword(event.target.value)} value={password} />
                                <Lock />
                            </div>
                        </div>
                        <div className={styles.actionButtonWrapper}>
                            <input type='submit' className={`${styles.button} ${styles.button_sign_up}`} value="ثبت نام" />
                            <input type='submit' className={`${styles.button} ${styles.button_login}`} value="ورود" />
                        </div>
                    </div>
                </form>
            </div>
        </AuthLayout>
    );
}

export default Signup;

