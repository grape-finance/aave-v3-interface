#  App configuration
This is an overview for fellow developers by fellow developers explaining where to find what. PLease keep it
in sync


## UI COnfiguration

Most configurations are located under  [ui-config](src/ui-config)


## Tokens

Token configurations are  in  [TokenList.ts](src/ui-config/TokenList.ts)


##  Chains & Providers

Chains and other related stuff for wagmi is sonfugured in [wagmiConfig.ts](src/ui-config/wagmiConfig.ts)

Ultimate configuration source is  [networksConfig.ts](src/ui-config/networksConfig.ts)



## Routes

## Site  Navigation

### Menu items

Menu items  are configured in [index.tsx](src/ui-config/menu-items/index.tsx).  They reference routes
defined in [Link.tsx](src/components/primitives/Link.tsx)


## Market data configuration
 - [marketsConfig.tsx](src/ui-config/marketsConfig.tsx) -  defined market configuration,   also source for
faucet data configuration.



## Contract invocations and interfaces

Methods for contract invocation are placed into  root store

- [poolSlice.ts](src/store/poolSlice.ts)  PoolSlice intereface defines invication patrameters, and there  is implementation
also.  For example *FaucetActions.tsx[FaucetActions.tsx](src/components/transactions/Faucet/FaucetActions.tsx)*  retrieves *mint* from root store,  and
wraps  it *[useTransactionHandler.tsx](src/helpers/useTransactionHandler.tsx)*  hook
