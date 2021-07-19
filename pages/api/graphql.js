/* eslint-disable no-unused-vars */
import {ApolloServer, gql} from 'apollo-server-micro';
import axios from 'axios';

const typeDefs = gql`
  type History {
    pubstatus: String
    date: String
  }

  type Articleids {
    idtype: String
    idtypen: Int
    value: String
  }

  type Authors {
    name: String
    authtype: String
    clusterid: String
  }

  type Article {
    uid: String
    pubdate: String
    epubdate: String
    source: String
    lastauthor: String
    title: String
    sorttitle: String
    volume: String
    issue: String
    pages: String
    nlmuniqueid: String
    issn: String
    essn: String
    recordstatus: String
    pubstatus: String
    pmcrefcount: Int
    fulljournalname: String
    elocationid: String
    doctype: String
    booktitle: String
    medium: String
    edition: String
    publisherlocation: String
    publishername: String
    srcdate: String
    reportnumber: String
    availablefromurl: String
    locationlabel: String
    docdate: String
    bookname: String
    chapter: String
    sortpubdate: String
    sortfirstauthor: String
    vernaculartitle: String
    doccontriblist: [String]
    srccontriblist: [String]
    attributes: [String]
    references: [String]
    history: [History]
    articleids: [Articleids]
    pubtype: [String]
    lang: [String]
    authors: [Authors]
  }

  type Pagination {
    count: Int
    retmax: Int
    retstart: Int
  }

  type Search {
    pagination: Pagination
    articles: [Article]
  }

  type Query {
    search(term: String!, retmax: Int, retstart: Int): Search
  }
`;

const resolvers = {
  Query: {
    search: async (_, args) => {
      const {term, retmax = 20, retstart = 0} = args;
      try {
        const esearch = await axios.get(
          `${process.env.PUBMED_URL}/esearch.fcgi?db=pubmed&retmax=${retmax}&retstart=${retstart}&retmode=json&term=${term}`
        );

        if (esearch.data) {
          const {
            data: {
              esearchresult: {idlist, count, retmax, retstart},
            },
          } = esearch;

          const esummary = await axios.get(
            `${process.env.PUBMED_URL}/esummary.fcgi?db=pubmed&retmode=json&id=${idlist.join(',')}`
          );
          if (esummary.data) {
            const {
              data: {result: articles},
            } = esummary;

            return {
              pagination: {
                count: parseInt(count),
                retmax: parseInt(retmax),
                retstart: parseInt(retstart),
              },
              articles: Object.entries(articles)
                .filter(([key]) => key !== 'uids')
                .map(([_, value]) => value),
            };
          }
        }

        return [];
      } catch (error) {
        return [];
      }
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({path: '/api/graphql'});
