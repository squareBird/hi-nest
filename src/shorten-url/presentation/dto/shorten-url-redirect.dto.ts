import {IsNumber, IsString} from "class-validator";

export class shortenUrlRedirectDto {

    @IsString()
    readonly url: string;

    @IsNumber()
    readonly statusCode: number = 301;

}