/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import styles from './style/ad_details.module.css';
import { ArchiveAdd, Fatrows, House2, InfoCircle, LampCharge, Link2, Messages3, NotificationCircle, RecordCircle, Ruler, UsdCoin } from 'iconsax-react';

function page({ params }: any) {
    const id = params.id;
    return (
        <div className={styles.adDetailsContainer}>
            <div className={styles.adTopPiece}>
                <div className={styles.adGalleryWrapper}>
                    <img src="/assets/images/villa.png" alt="" className={styles.mainPic} />
                    <img src="/assets/images/plan.png" alt="" className={styles.planPic} />
                </div>
                <div className={styles.adDetailsWrapper}>
                    <div className={styles.adTitlesWrapper}>
                        <div className={styles.adTitle}>112 متر نوساز کلید نخورده ، ساری</div>
                        <div className={styles.adSubtitle}>نیم ساعت پیش در تهران ، سهروردی</div>
                    </div>

                    <div className={styles.adActionBarContainer}>
                        <div className={styles.adShareWrapper}>
                            <Link2 className={styles.adShareBtn} />
                            <ArchiveAdd className={styles.adShareBtn} />
                        </div>
                        <div className={styles.adCommunicationWrapper}>
                            <div className={`${styles.primaryButton} ${styles.btnChat}`}>
                                <div className={styles.primaryBtnText}>چت</div>
                                <Messages3 className={styles.primaryBtnIcon} />
                            </div>
                            <div className={`${styles.primaryButton} ${styles.btnCallInfo}`}>
                                <div className={styles.primaryBtnText}>اطلاعات تماس</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.adDetailsListTileWrapper}>
                        <div className={styles.detailsListTile}>
                            <div className={styles.listTileBody}>24,000,000,000 تومان</div>
                            <div className={styles.listTileTitle}>قیمت کل :</div>
                            <UsdCoin className={styles.listTileIcon} />
                        </div>
                        <div className={styles.detailsListTile}>
                            <div className={styles.listTileBody}>23,000,000 تومان</div>
                            <div className={styles.listTileTitle}>قیمت هر متر :</div>
                            <Ruler className={styles.listTileIcon} />
                        </div>

                        <div className={styles.detailsListTile}>
                            <div className={styles.listTileBody}>املاک ایوان</div>
                            <div className={styles.listTileTitle}>آژانس املاک :</div>
                            <House2 className={styles.listTileIcon} />
                        </div>

                        <div className={styles.detailsListTile}>
                            <div className={styles.listTileBody}>۳ از ۶</div>
                            <div className={styles.listTileTitle}>طبقه :</div>
                            <Fatrows className={styles.listTileIcon} />
                        </div>
                    </div>

                    <div className={styles.adFeaturesContainer}>
                        <div className={styles.descriptionHeader}>ویژگی ها و خدمات</div>
                        <div className={styles.featuresWrapper}>
                            <div className={styles.featureBox}>
                                انباری
                            </div>
                            <div className={styles.featureBox}>
                                پارکینگ
                            </div>
                            <div className={styles.featureBox}>
                                آسانسور
                            </div>
                        </div>
                    </div>
                    <div className={styles.adVerificationTrustBox}>
                        <div className={styles.adVerificationTrustText}>
                            !همین حالا نشان اعتماد را به آگهی خود اضافه کنید
                        </div>
                        <div className={styles.adVerificationTrustButton}>
                            <LampCharge className={styles.adVerificationTrustButtonIcon} />
                            <div className={styles.adVerificationTrustButtonText}>برای دریافت اطلاعات بیشتر کلیک کنید</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.adBottomPiece}>
                <div className={styles.imgSlider}>
                    <img src="/assets/images/villa.png" alt="" className={styles.sliderImageCard} />
                    <img src="/assets/images/villa.png" alt="" className={styles.sliderImageCard} />
                    <img src="/assets/images/villa.png" alt="" className={styles.sliderImageCard} />
                    <img src="/assets/images/villa.png" alt="" className={styles.sliderImageCard} />
                    <img src="/assets/images/villa.png" alt="" className={styles.sliderImageCard} />
                </div>
                <div className={styles.descriptionContainer}>
                    <div className={styles.descriptionHeader}>توضیحات</div>
                    <div className={styles.descriptionBody}>
                        <div className={styles.descriptionItem}>
                            <RecordCircle className="text-Blue-Primary" variant='Bold' />

                            <div className={styles.descriptionItemText}>
                                3 خوابه 1 خواب مستر
                            </div>
                        </div>

                        <div className={styles.descriptionItem}>
                            <RecordCircle className="text-Blue-Primary" variant='Bold' />
                            <div className={styles.descriptionItemText}>
                                3 خوابه 1 خواب مستر
                            </div>
                        </div>

                        <div className={styles.descriptionItem}>
                            <RecordCircle className="text-Blue-Primary" variant='Bold' />

                            <div className={styles.descriptionItemText}>
                                3 خوابه 1 خواب مستر
                            </div>
                        </div>

                        <div className={styles.descriptionItem}>
                            <RecordCircle className="text-Blue-Primary" variant='Bold' />

                            <div className={styles.descriptionItemText}>
                                3 خوابه 1 خواب مستر
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;
