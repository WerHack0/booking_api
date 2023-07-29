import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RentalObjectService } from './rental-object/rental-object.service';
import { RentalObjectController } from './rental-object/rental-object.controller';
import { RentalObject } from './rental-object/rental-object';
import { ClientService } from './client/client.service';
import { ClientController } from './client/client.controller';
import { BookingService } from './booking/booking.service';
import { BookingController } from './booking/booking.controller';
import { Client } from './client/client';
import { Booking } from './booking/booking';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [RentalObject, Client, Booking],
      synchronize: true,

    }),
    TypeOrmModule.forFeature([RentalObject, Client, Booking])
  ],
  controllers: [AppController, RentalObjectController, ClientController, BookingController],
  providers: [AppService, RentalObjectService, ClientService, BookingService],
})
export class AppModule {}
