import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Game {
  readonly id: string;
  readonly title: string;
  readonly players: number;
  readonly invite: string;
  readonly password: string;
  readonly reports: number;
  readonly creator: string;
  readonly created: string;
  constructor(init: ModelInit<Game>);
  static copyOf(source: Game, mutator: (draft: MutableModel<Game>) => MutableModel<Game> | void): Game;
}