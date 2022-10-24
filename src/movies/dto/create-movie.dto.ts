import {IsNumber, IsString} from "class-validator";

export class CreateMovieDto {
    @IsString()
    readonly title: string;

    @IsNumber()
    readonly year: number;

    /**
     * 요소들을 하나하나 검사하려면 {each: true}
     */
    @IsString({ each: true})
    readonly genres: string[];
}