import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class UserModel {
  readonly id: string;
  readonly user_name?: string;
  constructor(init: ModelInit<UserModel>);
  static copyOf(source: UserModel, mutator: (draft: MutableModel<UserModel>) => MutableModel<UserModel> | void): UserModel;
}