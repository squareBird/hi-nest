import {Body, Controller, Get, Param, Post, Redirect} from '@nestjs/common';
import {ShortenUrlService} from "../application/shorten-url.service";
import {ShortenUrl} from "../domain/entities/shorte-url.entity";
import {generateShortenUrlDto} from "./dto/shorten-url-generate-request.dto";

@Controller('shorten-urls')
export class ShortenUrlController {

    constructor(private readonly shortenUrlService: ShortenUrlService) { }

    // 단축 URL 생성
    @Post()
    create(@Body() requestData: generateShortenUrlDto) {
        this.shortenUrlService.create(requestData);
    }

    // 단축 URL을 통해 이동
    @Redirect()
    @Get("/:id")
    move(@Param('id') id: string) {

        let url: string = this.shortenUrlService.move(id);

        return {
            "url" : url,
            "statusCode" : 301
        }

    }

    @Get()
    getAll(): ShortenUrl[] {
        return this.shortenUrlService.getAll();
    }

}
