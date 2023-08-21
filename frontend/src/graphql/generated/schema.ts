import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export enum MovementType {
  Export = 'EXPORT',
  Inport = 'INPORT'
}

export type Mutation = {
  __typename?: 'Mutation';
  createProduct?: Maybe<Product>;
  createStockMovement?: Maybe<StockMovement>;
  deleteProduct?: Maybe<Product>;
  updateProduct?: Maybe<Product>;
};


export type MutationCreateProductArgs = {
  name: Scalars['String']['input'];
  size_per_unit: Scalars['Int']['input'];
};


export type MutationCreateStockMovementArgs = {
  amount: Scalars['Int']['input'];
  movement_date: Scalars['Date']['input'];
  movement_type: MovementType;
  product_id: Scalars['String']['input'];
  warehouse_id: Scalars['String']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  size_per_unit: Scalars['Int']['input'];
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  size_per_unit: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  productById?: Maybe<Product>;
  products?: Maybe<Array<Maybe<Product>>>;
  warehouseById?: Maybe<Warehouse>;
  warehouses?: Maybe<Array<Maybe<Warehouse>>>;
};


export type QueryProductByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWarehouseByIdArgs = {
  id: Scalars['ID']['input'];
};

export type StockMovement = {
  __typename?: 'StockMovement';
  amount: Scalars['Int']['output'];
  movement_date: Scalars['Date']['output'];
  movement_id: Scalars['ID']['output'];
  movement_type: MovementType;
  product?: Maybe<Product>;
  product_id: Scalars['String']['output'];
  warehouse?: Maybe<Warehouse>;
  warehouse_id: Scalars['String']['output'];
};

export type Warehouse = {
  __typename?: 'Warehouse';
  id: Scalars['ID']['output'];
  is_hazardous: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  stock_movement?: Maybe<Array<Maybe<StockMovement>>>;
};

export type CreateProductMutationVariables = Exact<{
  name: Scalars['String']['input'];
  sizePerUnit: Scalars['Int']['input'];
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct?: { __typename?: 'Product', id: string, name: string, size_per_unit: number } | null };

export type UpdateProductMutationVariables = Exact<{
  updateProductId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  sizePerUnit: Scalars['Int']['input'];
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct?: { __typename?: 'Product', id: string, name: string, size_per_unit: number } | null };

export type DeleteProductMutationVariables = Exact<{
  deleteProductId: Scalars['ID']['input'];
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct?: { __typename?: 'Product', id: string, name: string, size_per_unit: number } | null };

export type CreateStockMovementMutationVariables = Exact<{
  warehouseId: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  amount: Scalars['Int']['input'];
  movementDate: Scalars['Date']['input'];
  movementType: MovementType;
}>;


export type CreateStockMovementMutation = { __typename?: 'Mutation', createStockMovement?: { __typename?: 'StockMovement', movement_id: string, warehouse_id: string, product_id: string, amount: number, movement_date: any, movement_type: MovementType } | null };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'Query', products?: Array<{ __typename?: 'Product', id: string, name: string, size_per_unit: number } | null> | null };

export type GetProductByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetProductByIdQuery = { __typename?: 'Query', productById?: { __typename?: 'Product', id: string, name: string, size_per_unit: number } | null };

export type WarehousesQueryVariables = Exact<{ [key: string]: never; }>;


export type WarehousesQuery = { __typename?: 'Query', warehouses?: Array<{ __typename?: 'Warehouse', id: string, name: string, size: number, is_hazardous: boolean } | null> | null };

export type WarehouseByIdQueryVariables = Exact<{
  warehouseByIdId: Scalars['ID']['input'];
}>;


export type WarehouseByIdQuery = { __typename?: 'Query', warehouseById?: { __typename?: 'Warehouse', id: string, name: string, size: number, is_hazardous: boolean, stock_movement?: Array<{ __typename?: 'StockMovement', movement_id: string, amount: number, movement_date: any, movement_type: MovementType } | null> | null } | null };


export const CreateProductDocument = gql`
    mutation CreateProduct($name: String!, $sizePerUnit: Int!) {
  createProduct(name: $name, size_per_unit: $sizePerUnit) {
    id
    name
    size_per_unit
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      name: // value for 'name'
 *      sizePerUnit: // value for 'sizePerUnit'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation UpdateProduct($updateProductId: ID!, $name: String!, $sizePerUnit: Int!) {
  updateProduct(id: $updateProductId, name: $name, size_per_unit: $sizePerUnit) {
    id
    name
    size_per_unit
  }
}
    `;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      updateProductId: // value for 'updateProductId'
 *      name: // value for 'name'
 *      sizePerUnit: // value for 'sizePerUnit'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const DeleteProductDocument = gql`
    mutation DeleteProduct($deleteProductId: ID!) {
  deleteProduct(id: $deleteProductId) {
    id
    name
    size_per_unit
  }
}
    `;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      deleteProductId: // value for 'deleteProductId'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, options);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const CreateStockMovementDocument = gql`
    mutation CreateStockMovement($warehouseId: String!, $productId: String!, $amount: Int!, $movementDate: Date!, $movementType: MovementType!) {
  createStockMovement(
    warehouse_id: $warehouseId
    product_id: $productId
    amount: $amount
    movement_date: $movementDate
    movement_type: $movementType
  ) {
    movement_id
    warehouse_id
    product_id
    amount
    movement_date
    movement_type
  }
}
    `;
export type CreateStockMovementMutationFn = Apollo.MutationFunction<CreateStockMovementMutation, CreateStockMovementMutationVariables>;

/**
 * __useCreateStockMovementMutation__
 *
 * To run a mutation, you first call `useCreateStockMovementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStockMovementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStockMovementMutation, { data, loading, error }] = useCreateStockMovementMutation({
 *   variables: {
 *      warehouseId: // value for 'warehouseId'
 *      productId: // value for 'productId'
 *      amount: // value for 'amount'
 *      movementDate: // value for 'movementDate'
 *      movementType: // value for 'movementType'
 *   },
 * });
 */
export function useCreateStockMovementMutation(baseOptions?: Apollo.MutationHookOptions<CreateStockMovementMutation, CreateStockMovementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStockMovementMutation, CreateStockMovementMutationVariables>(CreateStockMovementDocument, options);
      }
export type CreateStockMovementMutationHookResult = ReturnType<typeof useCreateStockMovementMutation>;
export type CreateStockMovementMutationResult = Apollo.MutationResult<CreateStockMovementMutation>;
export type CreateStockMovementMutationOptions = Apollo.BaseMutationOptions<CreateStockMovementMutation, CreateStockMovementMutationVariables>;
export const GetProductsDocument = gql`
    query GetProducts {
  products {
    id
    name
    size_per_unit
  }
}
    `;

/**
 * __useGetProductsQuery__
 *
 * To run a query within a React component, call `useGetProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
      }
export function useGetProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductsQuery, GetProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductsQuery, GetProductsQueryVariables>(GetProductsDocument, options);
        }
export type GetProductsQueryHookResult = ReturnType<typeof useGetProductsQuery>;
export type GetProductsLazyQueryHookResult = ReturnType<typeof useGetProductsLazyQuery>;
export type GetProductsQueryResult = Apollo.QueryResult<GetProductsQuery, GetProductsQueryVariables>;
export const GetProductByIdDocument = gql`
    query GetProductById($id: ID!) {
  productById(id: $id) {
    id
    name
    size_per_unit
  }
}
    `;

/**
 * __useGetProductByIdQuery__
 *
 * To run a query within a React component, call `useGetProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductByIdQuery(baseOptions: Apollo.QueryHookOptions<GetProductByIdQuery, GetProductByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(GetProductByIdDocument, options);
      }
export function useGetProductByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductByIdQuery, GetProductByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(GetProductByIdDocument, options);
        }
export type GetProductByIdQueryHookResult = ReturnType<typeof useGetProductByIdQuery>;
export type GetProductByIdLazyQueryHookResult = ReturnType<typeof useGetProductByIdLazyQuery>;
export type GetProductByIdQueryResult = Apollo.QueryResult<GetProductByIdQuery, GetProductByIdQueryVariables>;
export const WarehousesDocument = gql`
    query Warehouses {
  warehouses {
    id
    name
    size
    is_hazardous
  }
}
    `;

/**
 * __useWarehousesQuery__
 *
 * To run a query within a React component, call `useWarehousesQuery` and pass it any options that fit your needs.
 * When your component renders, `useWarehousesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWarehousesQuery({
 *   variables: {
 *   },
 * });
 */
export function useWarehousesQuery(baseOptions?: Apollo.QueryHookOptions<WarehousesQuery, WarehousesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WarehousesQuery, WarehousesQueryVariables>(WarehousesDocument, options);
      }
export function useWarehousesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WarehousesQuery, WarehousesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WarehousesQuery, WarehousesQueryVariables>(WarehousesDocument, options);
        }
export type WarehousesQueryHookResult = ReturnType<typeof useWarehousesQuery>;
export type WarehousesLazyQueryHookResult = ReturnType<typeof useWarehousesLazyQuery>;
export type WarehousesQueryResult = Apollo.QueryResult<WarehousesQuery, WarehousesQueryVariables>;
export const WarehouseByIdDocument = gql`
    query WarehouseById($warehouseByIdId: ID!) {
  warehouseById(id: $warehouseByIdId) {
    id
    name
    size
    is_hazardous
    stock_movement {
      movement_id
      amount
      movement_date
      movement_type
    }
  }
}
    `;

/**
 * __useWarehouseByIdQuery__
 *
 * To run a query within a React component, call `useWarehouseByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useWarehouseByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWarehouseByIdQuery({
 *   variables: {
 *      warehouseByIdId: // value for 'warehouseByIdId'
 *   },
 * });
 */
export function useWarehouseByIdQuery(baseOptions: Apollo.QueryHookOptions<WarehouseByIdQuery, WarehouseByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WarehouseByIdQuery, WarehouseByIdQueryVariables>(WarehouseByIdDocument, options);
      }
export function useWarehouseByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WarehouseByIdQuery, WarehouseByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WarehouseByIdQuery, WarehouseByIdQueryVariables>(WarehouseByIdDocument, options);
        }
export type WarehouseByIdQueryHookResult = ReturnType<typeof useWarehouseByIdQuery>;
export type WarehouseByIdLazyQueryHookResult = ReturnType<typeof useWarehouseByIdLazyQuery>;
export type WarehouseByIdQueryResult = Apollo.QueryResult<WarehouseByIdQuery, WarehouseByIdQueryVariables>;