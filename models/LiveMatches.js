import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity
export default class LiveMatches {
    @PrimaryGeneratedColumn id: number;
    @Column matchId: number;
    @Column homeScore: number;
    @Column awayScore: number;
    @Column period: number;

    // inning quarter json
    @Column subData: string;

}