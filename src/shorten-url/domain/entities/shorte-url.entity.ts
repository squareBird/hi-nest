const SHORTEN_URL_LENGTH = 5;
const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export class ShortenUrl {

    id: number;
    originUrl: string;
    shortenUrl: string;
    useCount: number


    constructor() {

        let generatedUrl: string = '';

        for (let i=0; i<SHORTEN_URL_LENGTH; i++) {
            generatedUrl += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
        }

        this.shortenUrl = generatedUrl;
        this.useCount = 0;

    }

}