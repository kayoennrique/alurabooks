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