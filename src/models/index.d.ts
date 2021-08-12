import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ModelAttributeTypes {
  NULL = "_null",
  BINARY = "binary",
  BINARY_SET = "binarySet",
  BOOL = "bool",
  LIST = "list",
  MAP = "map",
  NUMBER = "number",
  NUMBER_SET = "numberSet",
  STRING = "string",
  STRING_SET = "stringSet"
}

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export declare class Game {
  readonly _deleted?: boolean;
  readonly _lastChangedAt: number;
  readonly _version: number;
  readonly created: string;
  readonly createdAt: string;
  readonly creator: string;
  readonly id: string;
  readonly invite: string;
  readonly password: string;
  readonly players: number;
  readonly reports: number;
  readonly title: string;
  readonly updatedAt: string;
  constructor(init: ModelInit<Game>);
}

export declare class ModelGameConnection {
  readonly items?: (Game | null)[];
  readonly nextToken?: string;
  readonly startedAt?: number;
  constructor(init: ModelInit<ModelGameConnection>);
}

