/**
 * GraphQL documents for the Shopify Storefront API.
 *
 * The `rating`/`reviewCount` metafields are read from a `reviews` namespace
 * (`reviews.rating`, `reviews.rating_count`) as a best-effort default. If
 * your store uses a different reviews app/namespace, update
 * `RATING_METAFIELD` and `RATING_COUNT_METAFIELD` below — fields simply
 * come back null if the metafield doesn't exist, which the mapper already
 * handles.
 */

const MONEY_FIELDS = `amount currencyCode`;

const IMAGE_FIELDS = `url altText width height`;

const PRODUCT_FRAGMENT = `
  fragment ProductFragment on Product {
    id
    handle
    title
    description
    descriptionHtml
    availableForSale
    tags
    options {
      name
      values
    }
    featuredImage {
      ${IMAGE_FIELDS}
    }
    images(first: 10) {
      edges {
        node {
          id
          ${IMAGE_FIELDS}
        }
      }
    }
    priceRange {
      minVariantPrice { ${MONEY_FIELDS} }
      maxVariantPrice { ${MONEY_FIELDS} }
    }
    compareAtPriceRange {
      minVariantPrice { ${MONEY_FIELDS} }
      maxVariantPrice { ${MONEY_FIELDS} }
    }
    variants(first: 100) {
      edges {
        node {
          id
          title
          availableForSale
          price { ${MONEY_FIELDS} }
          compareAtPrice { ${MONEY_FIELDS} }
          selectedOptions { name value }
          image { ${IMAGE_FIELDS} }
        }
      }
    }
    ratingMetafield: metafield(namespace: "reviews", key: "rating") {
      value
    }
    ratingCountMetafield: metafield(namespace: "reviews", key: "rating_count") {
      value
    }
  }
`;

const CART_FRAGMENT = `
  fragment CartFragment on Cart {
    id
    checkoutUrl
    totalQuantity
    cost {
      subtotalAmount { ${MONEY_FIELDS} }
      totalAmount { ${MONEY_FIELDS} }
    }
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          cost {
            totalAmount { ${MONEY_FIELDS} }
          }
          merchandise {
            ... on ProductVariant {
              id
              title
              selectedOptions { name value }
              image { ${IMAGE_FIELDS} }
              price { ${MONEY_FIELDS} }
              product {
                id
                handle
                title
                featuredImage { ${IMAGE_FIELDS} }
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCTS_QUERY = `
  ${PRODUCT_FRAGMENT}
  query GetProducts($first: Int = 50, $query: String) {
    products(first: $first, query: $query) {
      edges {
        node { ...ProductFragment }
      }
    }
  }
`;

export const GET_PRODUCT_BY_HANDLE_QUERY = `
  ${PRODUCT_FRAGMENT}
  query GetProductByHandle($handle: String!) {
    product(handle: $handle) { ...ProductFragment }
  }
`;

export const GET_PRODUCT_RECOMMENDATIONS_QUERY = `
  ${PRODUCT_FRAGMENT}
  query GetProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) { ...ProductFragment }
  }
`;

export const SEARCH_PRODUCTS_QUERY = `
  ${PRODUCT_FRAGMENT}
  query SearchProducts($query: String!, $first: Int = 8) {
    products(first: $first, query: $query) {
      edges {
        node { ...ProductFragment }
      }
    }
  }
`;

export const GET_COLLECTIONS_QUERY = `
  query GetCollections($first: Int = 50) {
    collections(first: $first) {
      edges {
        node {
          id
          handle
          title
          description
          image { ${IMAGE_FIELDS} }
        }
      }
    }
  }
`;

export const GET_COLLECTION_BY_HANDLE_QUERY = `
  ${PRODUCT_FRAGMENT}
  query GetCollectionByHandle($handle: String!, $first: Int = 50) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      image { ${IMAGE_FIELDS} }
      products(first: $first) {
        edges {
          node { ...ProductFragment }
        }
      }
    }
  }
`;

export const CART_CREATE_MUTATION = `
  ${CART_FRAGMENT}
  mutation CartCreate($lines: [CartLineInput!]) {
    cartCreate(input: { lines: $lines }) {
      cart { ...CartFragment }
      userErrors { field message }
    }
  }
`;

export const GET_CART_QUERY = `
  ${CART_FRAGMENT}
  query GetCart($cartId: ID!) {
    cart(id: $cartId) { ...CartFragment }
  }
`;

export const CART_LINES_ADD_MUTATION = `
  ${CART_FRAGMENT}
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart { ...CartFragment }
      userErrors { field message }
    }
  }
`;

export const CART_LINES_UPDATE_MUTATION = `
  ${CART_FRAGMENT}
  mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart { ...CartFragment }
      userErrors { field message }
    }
  }
`;

export const CART_LINES_REMOVE_MUTATION = `
  ${CART_FRAGMENT}
  mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart { ...CartFragment }
      userErrors { field message }
    }
  }
`;
