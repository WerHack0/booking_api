import { Client } from "src/client/client";
import { RentalObject } from "src/rental-object/rental-object";
import { Column, Entity, EntityRepository, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Repository } from "typeorm";

@Entity()
export class Booking {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(()=> Client,(client: Client) => client.id)
    @JoinColumn({name: 'clientId'})
    clientId: Client;
    @ManyToOne(()=> RentalObject,(object: RentalObject) => object.bookings, {eager: true})
    @JoinColumn({name:'objectId'})
    objectId: number;
    @Column()
    day: number;
    @Column()
    price: number;
}

