import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { ShortenUrlController } from './shorten-url/presentation/shorten-url.controller';
import { ShortenUrlService } from './shorten-url/application/shorten-url.service';

@Module({
  imports: [],
  controllers: [MoviesController, ShortenUrlController],
  providers: [MoviesService, ShortenUrlService],
})
export class AppModule {}
