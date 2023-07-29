import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BookingService } from './booking.service';
import { Booking } from './booking';

@Controller('booking')
export class BookingController {
    constructor(private bookingService: BookingService){}
    @Get(':id')
    async getBooking(@Param('id') id:number): Promise<Booking>{
        return this.bookingService.getBooking(id)
    }
    @Get()
    async getAllBooking(): Promise<Booking[]>{
        return this.bookingService.getAllBookings()
    }
    @Post()
    async createBooking(@Body() booking: Booking): Promise<Booking>{
        return await this.bookingService.createBooking(booking)
    }
}   
