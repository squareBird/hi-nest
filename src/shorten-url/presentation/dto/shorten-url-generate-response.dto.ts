import {IsNumber, IsString } from "class-validator";

export class generateShortenUrlDto {

    @IsString()
    readonly originUrl: string;

    @IsString()
    readonly shortenUrl: string;

}