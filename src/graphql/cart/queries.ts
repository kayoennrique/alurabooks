import { gql } from "@apollo/client";

export const GET_CART = gql`
  query GetCart {
    cart {
        total
        itens {
            amount
            optionPurchase {
                price
            }
            book {
                title
                description
                imageCover
                author {
                    name
                }
            }
        }
    }
 }
`;