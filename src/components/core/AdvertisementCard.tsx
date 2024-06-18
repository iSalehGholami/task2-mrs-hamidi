import classes from "./styles/AdvertisementCard.module.scss";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { Lamp, Ruler } from "iconsax-react";

interface myComponentProps {
    image: string | StaticImageData;
    title: string;
    price?: string;
    address?: string;
    rooms?: string;
    surface?: string
}
const AdvertisementCard = (props: myComponentProps) => {
    return (
        <div className={classes.card + " bg-White dark:bg-Raisin-Black"}>
            <Image src={props.image} className={classes.image} alt="advertisement image" width={265} height={202} />
            <h1 className={classes.title}>{props.title}</h1>
            <div className={classes.price}>
                <span className="text-Blue-Primary">{props.price}</span>
            </div>
            <div className="flex flex-col gap-2">
                <div className={classes.location}>
                    <span>{props.address}</span>
                </div>
                <div className={classes.detail + " flex flex-row items-center justify-end self-stretch"}>
                    <div className="flex flex-row gap-1 items-center justify-center">
                         متر<span>{props.surface}</span>
                        <Ruler />
                    </div>
                    <div className={"flex flex-row gap-1 items-center justify-center"}>
                        خوابه<span>{props.rooms}</span>
                        <Lamp />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AdvertisementCard;
