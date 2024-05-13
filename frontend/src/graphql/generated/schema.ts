import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Continent = {
  __typename?: "Continent";
  id: Scalars["Int"];
  name: Scalars["String"];
};

export type Country = {
  __typename?: "Country";
  code: Scalars["String"];
  continent?: Maybe<Continent>;
  emoji: Scalars["String"];
  id: Scalars["Int"];
  name: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  addContinent: Continent;
  addCountry: Country;
};

export type MutationAddContinentArgs = {
  data: NewContinentInput;
};

export type MutationAddCountryArgs = {
  data: NewCountryInput;
};

export type NewContinentInput = {
  name: Scalars["String"];
};

export type NewCountryInput = {
  code: Scalars["String"];
  continent?: InputMaybe<ObjectId>;
  emoji: Scalars["String"];
  name: Scalars["String"];
};

export type ObjectId = {
  id: Scalars["Int"];
};

export type Query = {
  __typename?: "Query";
  continents: Array<Continent>;
  countries: Array<Country>;
  country: Country;
};

export type QueryCountryArgs = {
  code: Scalars["String"];
};

export type ContinentsQueryVariables = Exact<{ [key: string]: never }>;

export type ContinentsQuery = {
  __typename?: "Query";
  continents: Array<{ __typename?: "Continent"; id: number; name: string }>;
};

export type CountriesQueryVariables = Exact<{ [key: string]: never }>;

export type CountriesQuery = {
  __typename?: "Query";
  countries: Array<{
    __typename?: "Country";
    name: string;
    emoji: string;
    code: string;
    id: number;
  }>;
};

export type GetCountryByIdQueryVariables = Exact<{
  code: Scalars["String"];
}>;

export type GetCountryByIdQuery = {
  __typename?: "Query";
  country: {
    __typename?: "Country";
    name: string;
    emoji: string;
    continent?: { __typename?: "Continent"; name: string } | null;
  };
};

export const ContinentsDocument = gql`
  query Continents {
    continents {
      id
      name
    }
  }
`;

/**
 * __useContinentsQuery__
 *
 * To run a query within a React component, call `useContinentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useContinentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContinentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useContinentsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ContinentsQuery,
    ContinentsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ContinentsQuery, ContinentsQueryVariables>(
    ContinentsDocument,
    options
  );
}
export function useContinentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ContinentsQuery,
    ContinentsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ContinentsQuery, ContinentsQueryVariables>(
    ContinentsDocument,
    options
  );
}
export type ContinentsQueryHookResult = ReturnType<typeof useContinentsQuery>;
export type ContinentsLazyQueryHookResult = ReturnType<
  typeof useContinentsLazyQuery
>;
export type ContinentsQueryResult = Apollo.QueryResult<
  ContinentsQuery,
  ContinentsQueryVariables
>;
export const CountriesDocument = gql`
  query Countries {
    countries {
      name
      emoji
      code
      id
    }
  }
`;

/**
 * __useCountriesQuery__
 *
 * To run a query within a React component, call `useCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountriesQuery(
  baseOptions?: Apollo.QueryHookOptions<CountriesQuery, CountriesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CountriesQuery, CountriesQueryVariables>(
    CountriesDocument,
    options
  );
}
export function useCountriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CountriesQuery,
    CountriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CountriesQuery, CountriesQueryVariables>(
    CountriesDocument,
    options
  );
}
export type CountriesQueryHookResult = ReturnType<typeof useCountriesQuery>;
export type CountriesLazyQueryHookResult = ReturnType<
  typeof useCountriesLazyQuery
>;
export type CountriesQueryResult = Apollo.QueryResult<
  CountriesQuery,
  CountriesQueryVariables
>;
export const GetCountryByIdDocument = gql`
  query getCountryById($code: String!) {
    country(code: $code) {
      name
      continent {
        name
      }
      emoji
    }
  }
`;

/**
 * __useGetCountryByIdQuery__
 *
 * To run a query within a React component, call `useGetCountryByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountryByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountryByIdQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useGetCountryByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCountryByIdQuery,
    GetCountryByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCountryByIdQuery, GetCountryByIdQueryVariables>(
    GetCountryByIdDocument,
    options
  );
}
export function useGetCountryByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCountryByIdQuery,
    GetCountryByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCountryByIdQuery, GetCountryByIdQueryVariables>(
    GetCountryByIdDocument,
    options
  );
}
export type GetCountryByIdQueryHookResult = ReturnType<
  typeof useGetCountryByIdQuery
>;
export type GetCountryByIdLazyQueryHookResult = ReturnType<
  typeof useGetCountryByIdLazyQuery
>;
export type GetCountryByIdQueryResult = Apollo.QueryResult<
  GetCountryByIdQuery,
  GetCountryByIdQueryVariables
>;
