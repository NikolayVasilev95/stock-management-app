import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from 'src/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  MovementType: MovementType;
  Mutation: ResolverTypeWrapper<{}>;
  Product: ResolverTypeWrapper<Product>;
  Query: ResolverTypeWrapper<{}>;
  StockMovement: ResolverTypeWrapper<StockMovement>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Warehouse: ResolverTypeWrapper<Warehouse>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Date: Scalars['Date']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Product: Product;
  Query: {};
  StockMovement: StockMovement;
  String: Scalars['String']['output'];
  Warehouse: Warehouse;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'name' | 'size_per_unit'>>;
  createStockMovement?: Resolver<Maybe<ResolversTypes['StockMovement']>, ParentType, ContextType, RequireFields<MutationCreateStockMovementArgs, 'amount' | 'movement_date' | 'movement_type' | 'product_id' | 'warehouse_id'>>;
  deleteProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'id'>>;
  updateProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'id' | 'name' | 'size_per_unit'>>;
};

export type ProductResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size_per_unit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  productById?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductByIdArgs, 'id'>>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  warehouseById?: Resolver<Maybe<ResolversTypes['Warehouse']>, ParentType, ContextType, RequireFields<QueryWarehouseByIdArgs, 'id'>>;
  warehouses?: Resolver<Maybe<Array<Maybe<ResolversTypes['Warehouse']>>>, ParentType, ContextType>;
};

export type StockMovementResolvers<ContextType = Context, ParentType extends ResolversParentTypes['StockMovement'] = ResolversParentTypes['StockMovement']> = {
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  movement_date?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  movement_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  movement_type?: Resolver<ResolversTypes['MovementType'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  product_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  warehouse?: Resolver<Maybe<ResolversTypes['Warehouse']>, ParentType, ContextType>;
  warehouse_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WarehouseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Warehouse'] = ResolversParentTypes['Warehouse']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_hazardous?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stock_movement?: Resolver<Maybe<Array<Maybe<ResolversTypes['StockMovement']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Date?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  StockMovement?: StockMovementResolvers<ContextType>;
  Warehouse?: WarehouseResolvers<ContextType>;
};

