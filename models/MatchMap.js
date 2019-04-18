import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity
export class MatchMap {
    @PrimaryGeneratedColumn id: number;
    @Column matchId: number;
    @Column sourceType: string;
    @Column sourceId: string;
    @Column({localTimezone: true}) createAt: Date;
    @Column({localTimezone: true}) updateAt: Date;
}