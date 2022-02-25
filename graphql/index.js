const { mergeTypeDefs,mergeResolvers  } = require('@graphql-tools/merge')
const {authTypes, authResolvers} = require('./Auth')


const types = [
    authTypes
];
    
const resolvers = [
    authResolvers
];

module.exports = {typeDefs:mergeTypeDefs(types), 
    resolvers: mergeResolvers(resolvers)};