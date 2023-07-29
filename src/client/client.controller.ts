import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './client';

@Controller('client')
export class ClientController {
    constructor(private clientService: ClientService){}

    @Get(':id')
    async getClient(@Param('id') id:number): Promise<Client>{
        return this.clientService.getClient(id);
    }
    @Get()
    async getClients(): Promise<Client[]>{
        return this.clientService.getAllClients();
    }
    @Post()
    async createClient(@Body() client: Client): Promise<Client>{
        return this.clientService.createClient(client);
    }
}
