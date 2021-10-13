/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTeamInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelTeamConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTeamConditionInput | null > | null,
  or?: Array< ModelTeamConditionInput | null > | null,
  not?: ModelTeamConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Team = {
  __typename: "Team",
  id?: string,
  name?: string,
  description?: string | null,
  createdAt?: string,
  updatedAt?: string,
  nextGames?: ModelNextGamesConnection,
};

export type ModelNextGamesConnection = {
  __typename: "ModelNextGamesConnection",
  items?:  Array<NextGames | null > | null,
  nextToken?: string | null,
};

export type NextGames = {
  __typename: "NextGames",
  id?: string,
  home?: string,
  away?: string,
  date?: string,
  teamId?: string,
  createdAt?: string,
  updatedAt?: string,
  team?: Team,
};

export type UpdateTeamInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTeamInput = {
  id: string,
};

export type CreateNextGamesInput = {
  id?: string | null,
  home: string,
  away: string,
  date: string,
  teamId: string,
};

export type ModelNextGamesConditionInput = {
  home?: ModelStringInput | null,
  away?: ModelStringInput | null,
  date?: ModelStringInput | null,
  teamId?: ModelIDInput | null,
  and?: Array< ModelNextGamesConditionInput | null > | null,
  or?: Array< ModelNextGamesConditionInput | null > | null,
  not?: ModelNextGamesConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateNextGamesInput = {
  id: string,
  home?: string | null,
  away?: string | null,
  date?: string | null,
  teamId?: string | null,
};

export type DeleteNextGamesInput = {
  id: string,
};

export type CreateBlogInput = {
  id?: string | null,
  name: string,
};

export type ModelBlogConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelBlogConditionInput | null > | null,
  or?: Array< ModelBlogConditionInput | null > | null,
  not?: ModelBlogConditionInput | null,
};

export type Blog = {
  __typename: "Blog",
  id?: string,
  name?: string,
  createdAt?: string,
  updatedAt?: string,
  posts?: ModelPostConnection,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items?:  Array<Post | null > | null,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id?: string,
  title?: string,
  blogID?: string,
  createdAt?: string,
  updatedAt?: string,
  blog?: Blog,
  comments?: ModelCommentConnection,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items?:  Array<Comment | null > | null,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id?: string,
  postID?: string,
  content?: string,
  createdAt?: string,
  updatedAt?: string,
  post?: Post,
};

export type UpdateBlogInput = {
  id: string,
  name?: string | null,
};

export type DeleteBlogInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
  blogID: string,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  blogID?: ModelIDInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  blogID?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  postID: string,
  content: string,
};

export type ModelCommentConditionInput = {
  postID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  postID?: string | null,
  content?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type ModelTeamFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTeamFilterInput | null > | null,
  or?: Array< ModelTeamFilterInput | null > | null,
  not?: ModelTeamFilterInput | null,
};

export type ModelTeamConnection = {
  __typename: "ModelTeamConnection",
  items?:  Array<Team | null > | null,
  nextToken?: string | null,
};

export type ModelNextGamesFilterInput = {
  id?: ModelIDInput | null,
  home?: ModelStringInput | null,
  away?: ModelStringInput | null,
  date?: ModelStringInput | null,
  teamId?: ModelIDInput | null,
  and?: Array< ModelNextGamesFilterInput | null > | null,
  or?: Array< ModelNextGamesFilterInput | null > | null,
  not?: ModelNextGamesFilterInput | null,
};

export type ModelBlogFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelBlogFilterInput | null > | null,
  or?: Array< ModelBlogFilterInput | null > | null,
  not?: ModelBlogFilterInput | null,
};

export type ModelBlogConnection = {
  __typename: "ModelBlogConnection",
  items?:  Array<Blog | null > | null,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  blogID?: ModelIDInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type CreateTeamMutationVariables = {
  input?: CreateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type CreateTeamMutation = {
  createTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    nextGames?:  {
      __typename: "ModelNextGamesConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateTeamMutationVariables = {
  input?: UpdateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type UpdateTeamMutation = {
  updateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    nextGames?:  {
      __typename: "ModelNextGamesConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteTeamMutationVariables = {
  input?: DeleteTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type DeleteTeamMutation = {
  deleteTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    nextGames?:  {
      __typename: "ModelNextGamesConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateNextGamesMutationVariables = {
  input?: CreateNextGamesInput,
  condition?: ModelNextGamesConditionInput | null,
};

export type CreateNextGamesMutation = {
  createNextGames?:  {
    __typename: "NextGames",
    id: string,
    home: string,
    away: string,
    date: string,
    teamId: string,
    createdAt: string,
    updatedAt: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateNextGamesMutationVariables = {
  input?: UpdateNextGamesInput,
  condition?: ModelNextGamesConditionInput | null,
};

export type UpdateNextGamesMutation = {
  updateNextGames?:  {
    __typename: "NextGames",
    id: string,
    home: string,
    away: string,
    date: string,
    teamId: string,
    createdAt: string,
    updatedAt: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteNextGamesMutationVariables = {
  input?: DeleteNextGamesInput,
  condition?: ModelNextGamesConditionInput | null,
};

export type DeleteNextGamesMutation = {
  deleteNextGames?:  {
    __typename: "NextGames",
    id: string,
    home: string,
    away: string,
    date: string,
    teamId: string,
    createdAt: string,
    updatedAt: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateBlogMutationVariables = {
  input?: CreateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type CreateBlogMutation = {
  createBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateBlogMutationVariables = {
  input?: UpdateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type UpdateBlogMutation = {
  updateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteBlogMutationVariables = {
  input?: DeleteBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type DeleteBlogMutation = {
  deleteBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreatePostMutationVariables = {
  input?: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    createdAt: string,
    updatedAt: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input?: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    createdAt: string,
    updatedAt: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input?: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    createdAt: string,
    updatedAt: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input?: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blogID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input?: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blogID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input?: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blogID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type GetTeamQueryVariables = {
  id?: string,
};

export type GetTeamQuery = {
  getTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    nextGames?:  {
      __typename: "ModelNextGamesConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListTeamsQueryVariables = {
  filter?: ModelTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamsQuery = {
  listTeams?:  {
    __typename: "ModelTeamConnection",
    items?:  Array< {
      __typename: "Team",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetNextGamesQueryVariables = {
  id?: string,
};

export type GetNextGamesQuery = {
  getNextGames?:  {
    __typename: "NextGames",
    id: string,
    home: string,
    away: string,
    date: string,
    teamId: string,
    createdAt: string,
    updatedAt: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListNextGamessQueryVariables = {
  filter?: ModelNextGamesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNextGamessQuery = {
  listNextGamess?:  {
    __typename: "ModelNextGamesConnection",
    items?:  Array< {
      __typename: "NextGames",
      id: string,
      home: string,
      away: string,
      date: string,
      teamId: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetBlogQueryVariables = {
  id?: string,
};

export type GetBlogQuery = {
  getBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListBlogsQueryVariables = {
  filter?: ModelBlogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlogsQuery = {
  listBlogs?:  {
    __typename: "ModelBlogConnection",
    items?:  Array< {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id?: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    createdAt: string,
    updatedAt: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items?:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      blogID: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id?: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blogID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      postID: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTeamSubscription = {
  onCreateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    nextGames?:  {
      __typename: "ModelNextGamesConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateTeamSubscription = {
  onUpdateTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    nextGames?:  {
      __typename: "ModelNextGamesConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteTeamSubscription = {
  onDeleteTeam?:  {
    __typename: "Team",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    nextGames?:  {
      __typename: "ModelNextGamesConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateNextGamesSubscription = {
  onCreateNextGames?:  {
    __typename: "NextGames",
    id: string,
    home: string,
    away: string,
    date: string,
    teamId: string,
    createdAt: string,
    updatedAt: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateNextGamesSubscription = {
  onUpdateNextGames?:  {
    __typename: "NextGames",
    id: string,
    home: string,
    away: string,
    date: string,
    teamId: string,
    createdAt: string,
    updatedAt: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteNextGamesSubscription = {
  onDeleteNextGames?:  {
    __typename: "NextGames",
    id: string,
    home: string,
    away: string,
    date: string,
    teamId: string,
    createdAt: string,
    updatedAt: string,
    team?:  {
      __typename: "Team",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateBlogSubscription = {
  onCreateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateBlogSubscription = {
  onUpdateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteBlogSubscription = {
  onDeleteBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    createdAt: string,
    updatedAt: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    createdAt: string,
    updatedAt: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blogID: string,
    createdAt: string,
    updatedAt: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blogID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blogID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    postID: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      blogID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};
