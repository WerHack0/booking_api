import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './client';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
    constructor(
        @InjectRepository(Client)
        private readonly clientRepository: Repository<Client>
    ){}

    async getClient(id: number): Promise<Client>{
        const client = await this.clientRepository.findOneBy({id});
        if(!client){
            throw new NotFoundException('Nie znaleziono klienta o danym ID');
        }
        return client;
    }
    async getAllClients(): Promise<Client[]>{
        return await this.clientRepository.find();
    }
    async createClient(client: Client): Promise<Client>{
        return await this.clientRepository.save(client);
    }
}
