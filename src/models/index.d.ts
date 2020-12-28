import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Roast {
  readonly id: string;
  readonly Roast?: string[];
  readonly Ground?: string[];
  readonly Roasttosel?: Selection[];
  constructor(init: ModelInit<Roast>);
  static copyOf(source: Roast, mutator: (draft: MutableModel<Roast>) => MutableModel<Roast> | void): Roast;
}

export declare class Selection {
  readonly id: string;
  readonly origin?: string[];
  readonly blend?: string[];
  readonly bagweight?: number[];
  readonly quantity: number;
  readonly roastID: string;
  constructor(init: ModelInit<Selection>);
  static copyOf(source: Selection, mutator: (draft: MutableModel<Selection>) => MutableModel<Selection> | void): Selection;
}