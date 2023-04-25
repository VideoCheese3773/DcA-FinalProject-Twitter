export enum postProps{
    "userimg"="userimg",
    "username"="username",
    "usertag"="usertag",
    "message"="message",
    "image"="image",
    "comcount"="comcount",
    "retcount"="retcount",
    "likescount"="likescount"
}

export default class Post extends HTMLElement{
    userimg?: string;
    username?: string;
    usertag?: string;
    message?: string;
    image?: string;
    comcount: number=0;
    retcount: number=0;
    likescount: number=0;
}