import { gql } from "@apollo/client";

export const GET_CART = gql`
  query GetCart {
    cart {
        total
        itens {
            amount
            optionPurchase {
                id
                price
            }
            book {
                id
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

export const ADD_ITEM = gql`
mutation AddItem ($item: ItemCartInput!) {
    addItem(item: $item)
}
`;