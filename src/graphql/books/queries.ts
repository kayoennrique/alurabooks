import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
query GetBooks($categorieId: Int, $title: String) {
    books(categorieId: $categorieId, title: $title) {
      id
      slug
      title
      imageCover
      optionPurchase {
        id
        price
      }
    }
  }
`;

export const GET_BOOK = gql`
query GetBook($slug: String!) {
  book(slug: $slug) {
    id
    imageCover
    description
    title
    slug
    about
    author {
      name
      about
    }
    optionPurchase {
        id
        title
        formats
        price
    }
    tags {
      name
    }
  }
}
`

export const GET_HIGHLIGHTS = gql`
query GetLaunches {
  highlights {
    releases {
        id
        slug
        title
        imageCover
        optionPurchase {
          id
          price
        }
        author {
            name
        }
      }
      bestSellers {
        id
        slug
        title
        imageCover
        optionPurchase {
          id
          price
        }
        author {
            name
        }
      }
    }
  }
`