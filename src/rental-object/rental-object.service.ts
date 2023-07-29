import { Injectable, NotFoundException } from '@nestjs/common';
import { RentalObject } from './rental-object';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RentalObjectService {
    constructor(
        @InjectRepository(RentalObject)
        private readonly rentalObjectRepository: Repository<RentalObject>
    ){}
    async getRentalObject(id: number): Promise<RentalObject>{
        const rentalObject =  await this.rentalObjectRepository.findOneBy({id});
        if(!rentalObject){
            throw new NotFoundException(`Nie znaleziono obiektu o takim ID`);
        }
        return rentalObject;
    } 
    async createRentalObject(rentalObject: RentalObject): Promise<RentalObject>{
        return await this.rentalObjectRepository.save(rentalObject)
    }
    async getAllRentalObjects(): Promise<RentalObject[]>{
        return await this.rentalObjectRepository.find();
    }
    
}
