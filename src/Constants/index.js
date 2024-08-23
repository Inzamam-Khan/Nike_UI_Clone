
import bigShoe1 from '../assets/bg-images/bigShoe1.png'
import bigShoe2 from '../assets/bg-images/bigShoe2.png'
import bigShoe3 from '../assets/bg-images/bigShoe3.png'
import shoe4 from '../assets/bg-images/shoe4.svg'
import shoe5 from '../assets/bg-images/shoe5.svg'
import shoe6 from '../assets/bg-images/shoe6.svg'
import shoe7 from '../assets/bg-images/shoe7.svg'
// import shoe8 from '../assets/bg-images/bigShoe8.png'
import thumbnailShoe1 from '../assets/bg-images/thumbnailShoe1.svg'
import thumbnailShoe2 from '../assets/bg-images/thumbnailShoe2.svg'
import thumbnailShoe3 from '../assets/bg-images/thumbnailShoe3.svg'


// 
import shieldTick from '../assets/icons/shieldTick.svg'
import truckFast from '../assets/icons/truckFast.svg'
import support from '../assets/icons/support.svg'



// 
import customer1 from '../assets/bg-images/customer1.jpeg'
import customer2 from '../assets/bg-images/customer2.svg'

// 

import facebook from '../assets/icons/facebook.svg';
import twitter from '../assets/icons/twitter.svg';
import instagram from '../assets/icons/instagram.svg'



export const navBarLinks=[
    {
        href:"#home",label:"Home"
    },
    {
        href:"#about-us",
        label:"About Us"
    },
    {
        href:"#products",
        label:"products"
    },
    {
        href:"#contact-us",
        label:"Contact Us"
    },
    
];
export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];


export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];


export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
        rating:"4.5"
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
        rating:"4.2"
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
        rating:"3.5"
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
        rating:"4.5"
    },
];



export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];


export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Jane Doe',
        rating: 4.3,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    },  {
        imgURL: "https://bit.ly/code-beast",
        customerName: 'Hazer',
        rating: 4.7,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
     {
        imgURL: "https://bit.ly/kent-c-dodds",
        customerName: 'Bob',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    }
    ,  {
        imgURL:"https://bit.ly/dan-abramov",
        customerName: 'MR.Ben',
        rating: 4.1,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: 'https://bit.ly/ryan-florence',
        customerName: 'John Doe',
        rating: 4.9,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
];


export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];



export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "", link: "tel:+91-55XXXXXX54" },
        ],
    },
];