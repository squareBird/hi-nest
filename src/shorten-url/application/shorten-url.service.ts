import { Injectable } from '@nestjs/common';
import {ShortenUrl} from "../domain/entities/shorte-url.entity";
import {generateShortenUrlDto} from "../presentation/dto/shorten-url-generate-request.dto";

@Injectable()
export class ShortenUrlService {

    private shortenUrls: ShortenUrl[] = [];

    create(requestData: generateShortenUrlDto) {

        this.shortenUrls.push({
            id: this.shortenUrls.length + 1,
            ...new ShortenUrl(),
            ...requestData
        });

    }

    move(id: string): string {

        let shortenUrl = this.shortenUrls.find(x => {
            if(x.shortenUrl === id) {
                return x.originUrl;
            }
        });
        shortenUrl.useCount++;
        return shortenUrl.originUrl;

    }

    getAll(): ShortenUrl[] {
        return this.shortenUrls;
    }

}
