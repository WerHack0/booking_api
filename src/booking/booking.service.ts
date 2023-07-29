import { Injectable } from '@nestjs/common';
import { Booking } from './booking';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RentalObject } from 'src/rental-object/rental-object';

@Injectable()
export class BookingService {
    constructor(
        @InjectRepository(Booking)
        private bookingRepository: Repository<Booking>,
        @InjectRepository(RentalObject)
        private rentalObjectRepository: Repository<RentalObject>
        ){}
    private calculateTotalPrice(day: number, pricePerDay: number): number{
        return day * pricePerDay;
    } 
    async createBooking(booking: Booking): Promise<Booking>{
          
        const rentalObj = await this.rentalObjectRepository.findOne({where: {id: booking.objectId}});
        const price = this.calculateTotalPrice(booking.day, rentalObj.price);
        booking.price = price;
        return await this.bookingRepository.save(booking);
    }

    async getAllBookings(): Promise<Booking[]>{
        return await this.bookingRepository.find({relations:['clientId','objectId']});
    }
    async getBooking(id: number): Promise<Booking>{
        return await this.bookingRepository.findOne({
            where:{id},
            relations:['clientId','objectId']});
    }
}
