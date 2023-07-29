import { Booking } from "src/booking/booking";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RentalObject {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable: true})
    type: string;
    @Column({nullable: true})
    price: number;
    @Column({nullable: true})
    city: string;
    @Column({nullable: true})
    capacity: number;
    @OneToMany(() => Booking, (booking: Booking) => booking.objectId)
    bookings: Booking[];
}
