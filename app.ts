interface Human {
    name: string;
    skill: string;
    killed: number;
}

 interface Hero {
    name: string;
    skill: string;
    killed: number;
}
interface Villain {
    name: string;
    skill: string;
    killed: number;
}

class HumanService {
 
    private humans: Array<Human> = [
        {name: 'Superman', skill: 'fly', killed : 1},
        {name: 'Spiderman', skill: 'spider-sense', killed : 2},
        {name: 'Thanos', skill: 'kills', killed : 1},
        {name: 'Joker', skill: 'kills', killed : 3},
    ];

//Returns the number of people killed by this Human:

    public getKilled(name: string, killed: number) : number;

    public getKilled(name: string, skill: string): number ;
      
    public getKilled(name: string, a: any) : number{
        return this.humans.find((human: Human) => human.name === name && human.killed === a || human.skill === a ).killed;
    }
}

 class HeroService extends HumanService{

    private heroes: Array<Hero> = [
        {name: 'Superman', skill: 'fly', killed : 2},
        {name: 'Spiderman', skill: 'spider-sense', killed : 3},
        {name: 'Batman', skill: 'superhuman power', killed : 3},
        {name: 'Flash', skill: 'run', killed : 4},
    ];

//Returns the number of people killed by this Hero:

    public getKilled(name: string, killed: number) : number;

    public getKilled(name: string, skill: string): number ;
      
    public getKilled(name: string, a: any) : number{
        return this.heroes.find((hero: Hero) => hero.name === name && hero.killed === a || hero.skill === a ).killed;
    }
}

class VillainService extends HumanService{

    private villains: Array<Villain> = [
        {name: 'Joker', skill: 'kill', killed : 3},
        {name: 'Phantom', skill: 'kill', killed : 1},
        {name: 'Mister X', skill: 'kill', killed : 5},
        {name: 'Thanos', skill: 'kill', killed : 5},
    ];

//Returns the number of people killed by this Villain:

    public getKilled(name: string, killed: number) : number;

    public getKilled(name: string, skill: string): number ;
      
    public getKilled(name: string, a: any) : number{
        return this.villains.find((villain: Villain) => villain.name === name && villain.killed === a || villain.skill === a ).killed;
    }
}