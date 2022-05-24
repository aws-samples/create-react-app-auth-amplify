import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Tournament {
  readonly active: number;
  readonly champion: string;
  readonly dates: string;
  readonly id: string;
  readonly location: string;
  readonly major: number;
  readonly name: string;
  readonly order: number;
  readonly url: string;
  constructor(init: ModelInit<Tournament>);
}

export declare class TournamentConnection {
  readonly items?: (Tournament | null)[];
  readonly nextToken?: string;
  constructor(init: ModelInit<TournamentConnection>);
}

