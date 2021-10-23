import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query (
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy,
      orderDirection: $orderDirection,
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      totalCount
      edges {
        node {
          id
          fullName
          description
          language
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
          ownerAvatarUrl
        }
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`

export const GET_USER = gql`
  query authorizedUser(
    $includeReviews: Boolean = false
  ) {
    authorizedUser {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            rating
            createdAt
            repositoryId
            user {
              id
              username
            }
            repository {
              fullName
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`

export const SIGN_IN = gql`
  mutation authorize(
    $username: String!
    $password: String!
  ) {
    authorize(
      credentials: {
        username: $username,
        password: $password
      }
    ) {
      accessToken
    }
  }
`

export const GET_REPOSITORY = gql`
  query (
    $id: ID!
  ) {
    repository(id: $id) {
      id
      fullName
      description
      language
      forksCount
      stargazersCount
      ratingAverage
      reviewCount
      ownerAvatarUrl
      url
    }
  }
`

export const GET_REVIEWS = gql`
  query (
    $id: ID!,
    $first: Int,
    $after: String
  ) {
    repository(id: $id) {
      id
      fullName
      reviews(
        first: $first,
        after: $after
      ) {
        totalCount
        edges {
          node {
            id
            text
            rating
            createdAt
            repositoryId
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`

export const CREATE_REVIEW = gql`
  mutation createReview(
    $repositoryName: String!
    $ownerName: String!
    $rating: Int!
    $text: String
  ) {
    createReview (
      review: {
        repositoryName: $repositoryName,
        ownerName: $ownerName,
        rating: $rating
        text: $text
      }
    ) {
      id
      user {
        id
      }
      repository {
        id
      }
      userId
      repositoryId
      rating
      createdAt
      text
    }
  }
`

export const CREATE_USER = gql`
  mutation createUser(
    $username: String!
    $password: String!
  ) {
    createUser(user: { 
      username: $username,
      password: $password 
    }) {
      id
      username
    }
  }
`

export const DELETE_REVIEW = gql`
  mutation deleteReview(
    $id: ID!
  ) {
    deleteReview(
      id: $id
    )
  }
`