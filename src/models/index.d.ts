import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Team {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly nextGames?: (NextGames | null)[];
  constructor(init: ModelInit<Team>);
  static copyOf(source: Team, mutator: (draft: MutableModel<Team>) => MutableModel<Team> | void): Team;
}

export declare class NextGames {
  readonly id: string;
  readonly home: string;
  readonly away: string;
  readonly date: string;
  readonly team?: Team;
  constructor(init: ModelInit<NextGames>);
  static copyOf(source: NextGames, mutator: (draft: MutableModel<NextGames>) => MutableModel<NextGames> | void): NextGames;
}

export declare class Blog {
  readonly id: string;
  readonly name: string;
  readonly posts?: (Post | null)[];
  constructor(init: ModelInit<Blog>);
  static copyOf(source: Blog, mutator: (draft: MutableModel<Blog>) => MutableModel<Blog> | void): Blog;
}

export declare class Post {
  readonly id: string;
  readonly title: string;
  readonly blog?: Blog;
  readonly comments?: (Comment | null)[];
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

export declare class Comment {
  readonly id: string;
  readonly post?: Post;
  readonly content: string;
  constructor(init: ModelInit<Comment>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}