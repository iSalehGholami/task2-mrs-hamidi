"use client";
import { useState } from 'react';
import Image from 'next/image';
import {
    Minus, Call, Lock
} from "iconsax-react";

import lock from "/public/assets/images/lock.png";
import AuthLayout from '@/view/layout/AuthLayout';
import styles from './styles/login.module.css';
import { useDispatch } from 'react-redux';
import { login } from '@/store/userSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


function Login() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const router = useRouter();
    function handleLoginSubmit(event: React.MouseEvent<HTMLInputElement>) {
        event.preventDefault();
        dispatch(login({ phoneNumber, password }));
        router.push('/');
    }

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
                                <input required={true} type='text' maxLength={11} className={styles.inputField} placeholder='شماره موبایل' pattern='((0?9)|(\+?989))((14)|(13)|(12)|(19)|(18)|(17)|(15)|(16)|(11)|(10)|(90)|(91)|(92)|(93)|(94)|(95)|(96)|(32)|(30)|(33)|(35)|(36)|(37)|(38)|(39)|(00)|(01)|(02)|(03)|(04)|(05)|(41)|(20)|(21)|(22)|(23)|(31)|(34)|(9910)|(9911)|(9913)|(9914)|(9999)|(999)|(990)|(9810)|(9811)|(9812)|(9813)|(9814)|(9815)|(9816)|(9817)|(998))\d{7}' onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
                                <Call />
                            </div>

                            <div className={styles.inputFieldWrapper}>
                                <input required={true} type='password' className={styles.inputField} placeholder='رمزعبور' onChange={(event) => setPassword(event.target.value)} value={password} />
                                <Lock />
                            </div>
                        </div>
                        <div className={styles.actionButtonWrapper}>
                            <div className={styles.actionForgetPassword}>فراموشی رمز عبور؟</div>
                            <input type='submit' className={`${styles.button} ${styles.button_login}`} value="ورود" onClick={handleLoginSubmit} />
                            <Link href={"/auth/signup"} className={`${styles.button} ${styles.button_sign_up}`}>ساخت حساب</Link>
                        </div>
                    </div>
                </form>
            </div>
        </AuthLayout>
    );
}

export default Login;

