import { svgIcon } from "./svgIcon"
import EventIcon from '../../public/icon/events-icon.png'
import PlaceIcon from '../../public/icon/place-icon.png'
import ExpIcon from '../../public/icon/experiences-icon.png'
import SignUpIcon from '../../public/icon/signUp-icon.png'
import SignInIcon from '../../public/icon/signIn-icon.png'
import DownloadIcon from '../../public/icon/download-icon.png'

export const menus = [
    { id: 1, name: "Home", link: "#", icon: svgIcon.home },
    { id: 2, name: "Discover", link: "#", icon: svgIcon.discover, children: [
        { id: 1, name: "Places", link: "#", icon: EventIcon, useImage: true },
        { id: 2, name: "Events", link: "#", icon: PlaceIcon, useImage: true },
        { id: 3, name: "Experiences", link: "#", icon: ExpIcon, useImage: true },
    ] },
    { id: 3, name: "Guides", link: "#", icon: svgIcon.guides },
]

export const profileMenus = [
    { id: 1, name: "Sign up", link: "#", icon: SignInIcon, useImage: true },
    { id: 2, name: "Sign in", link: "#", icon: SignUpIcon, useImage: true },
    { id: 3, name: "Download the app", link: "#", icon: DownloadIcon, useImage: true },
]


export const footerMenus = [
    { id: 1, title: "Company", children: [
        { id: 1, name: "About Us", link: "#" },
        { id: 2, name: "Careers", link: "#" },
        { id: 3, name: "Blog", link: "#" },
        { id: 4, name: "Badges", link: "#" },
    ]},
    { id: 2, title: "Legal", children: [
        { id: 1, name: "Privacy Policy", link: "#" },
        { id: 2, name: "Terms of Use", link: "#" },
        { id: 3, name: "EULA", link: "#" },
        { id: 4, name: "Ticketing Policy", link: "#" },
    ]},
    { id: 3, title: "Contact Us", children: [
        { id: 1, name: "info@zormor.com", link: "#" },
        { id: 2, name: "(+44) 07864 572216", link: "#" },
    ]},
]

export const socialMedias = [
    {id: 1, link: "#", icon: "fa-brands fa-facebook"},
    {id: 2, link: "#", icon: "fa-brands fa-x-twitter"},
    {id: 3, link: "#", icon: "fa-brands fa-instagram"},
    {id: 4, link: "#", icon: "fa-brands fa-linkedin"},
]