import {Column, PrimaryGeneratedColumn} from "typeorm";

@Entity
export class Match {
    @PrimaryGeneratedColumn id: number;
    @Column leagueId: number;
    @Column seasonId: number;
    @Column sports: string;
    @Column({localTimezone: true}) startTime: Date;
    @Column homeScore: number;
    @Column awayScore: number;
    @Column status: string;
    @Column('enum') result: string;
    @Column({localTimezone: true}) createAt: Date;
    @Column({localTimezone: true}) updateAt: Date;
}