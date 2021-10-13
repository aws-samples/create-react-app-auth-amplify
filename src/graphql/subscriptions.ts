/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
      id
      name
      description
      createdAt
      updatedAt
      nextGames {
        nextToken
      }
    }
  }
`;
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
      id
      name
      description
      createdAt
      updatedAt
      nextGames {
        nextToken
      }
    }
  }
`;
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
      id
      name
      description
      createdAt
      updatedAt
      nextGames {
        nextToken
      }
    }
  }
`;
export const onCreateNextGames = /* GraphQL */ `
  subscription OnCreateNextGames {
    onCreateNextGames {
      id
      home
      away
      date
      teamId
      createdAt
      updatedAt
      team {
        id
        name
        description
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateNextGames = /* GraphQL */ `
  subscription OnUpdateNextGames {
    onUpdateNextGames {
      id
      home
      away
      date
      teamId
      createdAt
      updatedAt
      team {
        id
        name
        description
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteNextGames = /* GraphQL */ `
  subscription OnDeleteNextGames {
    onDeleteNextGames {
      id
      home
      away
      date
      teamId
      createdAt
      updatedAt
      team {
        id
        name
        description
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
      id
      name
      createdAt
      updatedAt
      posts {
        nextToken
      }
    }
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
      id
      name
      createdAt
      updatedAt
      posts {
        nextToken
      }
    }
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
      id
      name
      createdAt
      updatedAt
      posts {
        nextToken
      }
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      title
      blogID
      createdAt
      updatedAt
      blog {
        id
        name
        createdAt
        updatedAt
      }
      comments {
        nextToken
      }
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      title
      blogID
      createdAt
      updatedAt
      blog {
        id
        name
        createdAt
        updatedAt
      }
      comments {
        nextToken
      }
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      title
      blogID
      createdAt
      updatedAt
      blog {
        id
        name
        createdAt
        updatedAt
      }
      comments {
        nextToken
      }
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      postID
      content
      createdAt
      updatedAt
      post {
        id
        title
        blogID
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      postID
      content
      createdAt
      updatedAt
      post {
        id
        title
        blogID
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      postID
      content
      createdAt
      updatedAt
      post {
        id
        title
        blogID
        createdAt
        updatedAt
      }
    }
  }
`;
