import {IsNumber, IsString, isString} from "class-validator";

export class generateShortenUrlDto {

    @IsString()
    readonly originUrl:string;

}