import { GoHome, GoHomeFill } from "react-icons/go";
import { MdSubscriptions, MdOutlineSubscriptions } from "react-icons/md";
import { BiSolidLike, BiLike } from "react-icons/bi";
import { SiShortcut } from "react-icons/si";

export const menus = [
    {
        title: "홈",
        icon1: <GoHome />,
        icon2: <GoHomeFill />,
        src: "/",
    },
    {
        title: "구독",
        icon1: <MdOutlineSubscriptions />,
        icon2: <MdSubscriptions />,
        src: "/subscription",
    },
    {
        title: "Shorts",
        icon1: <SiShortcut />,
        icon2: <SiShortcut />,
        src: "/shorts",
    },
    {
        title: "추천",
        icon1: <BiLike />,
        icon2: <BiSolidLike />,
        src: "/recommend",
    },
];

export const subscribe = [
    {
        title: "구독자",
        icon1: <GoHome />,
        icon2: <GoHomeFill />,
        src: "/subscribe/:subscribeId",
    },
    {
        title: "구독자",
        icon1: <GoHome />,
        icon2: <GoHomeFill />,
        src: "/subscribe/:subscribeId",
    },
    {
        title: "구독자",
        icon1: <GoHome />,
        icon2: <GoHomeFill />,
        src: "/subscribe/:subscribeId",
    },
    {
        title: "구독자",
        icon1: <GoHome />,
        icon2: <GoHomeFill />,
        src: "/subscribe/:subscribeId",
    },
];
