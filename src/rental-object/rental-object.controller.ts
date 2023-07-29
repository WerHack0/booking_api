import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RentalObjectService } from './rental-object.service';
import { RentalObject } from './rental-object';

@Controller('rental-object')
export class RentalObjectController {
    constructor(private rentalObjectService: RentalObjectService) {}
    @Get(':id')
    async getRentalObject(@Param('id') id:number): Promise<RentalObject>{
        return this.rentalObjectService.getRentalObject(id)
    } 
    @Get()
    async getAllRentalObjects(): Promise<RentalObject[]>{
        return this.rentalObjectService.getAllRentalObjects();
    } 
    @Post()
    async createRentalObject(@Body() rentalObject: RentalObject): Promise<RentalObject>{
        return this.rentalObjectService.createRentalObject(rentalObject);
}
   
}
