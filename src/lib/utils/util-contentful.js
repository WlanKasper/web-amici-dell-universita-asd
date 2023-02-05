import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from '$env/static/private'

const contentModels = {
  news: 'newsSectionCollection',
  section: 'sportSectionCollection',
  asset: 'assetCollection',
};

const queryList = {
  news: (idx = undefined) => {
    return `
      query {
        ${contentModels.news} ${(idx !== undefined) ? `(where: {sys: {id: "${idx}"}})` : ''}
        {
          items {
            sys {
              id
            }
            sportSection {
              title
            }
            date
            text {
              json
            }
            title
            imagesFilesCollection(limit: 10) {
              items {
                title
                url
              }
            }
          }
        }
      }
    `;
  },
  newsBySection: (section = undefined) => {
    return `
      query {
        ${contentModels.news} ${(section !== undefined) ? `(where: { sportSection: { title: "${section}" } },limit: 3)` : ''}
        {
          items {
            sys {
              id
            }
            sportSection {
              title
            }
            date
            text {
              json
            }
            title
            imagesFilesCollection(limit: 10) {
              items {
                title
                url
              }
            }
          }
        }
      }
    `;
  },
  section: (idx = undefined) => {
    return `
      query {
        ${contentModels.section} ${(idx !== undefined) ? `(where: { sys: { id: "${idx}" } })` : ''}
        {
          items {
            sys {
              id
            }
            title
            description {
              json
            }
            imageHero {
              url
            }
          }
        }
      }
    `;
  },
  assets: (tag = undefined, max = 10) => {
    if (tag === undefined) {
      return;
    }

    return `
      query {
        ${contentModels.asset} (
          where: {
            contentfulMetadata: {
              tags: {
                id_contains_all: "${tag}"
              }
            }
          }
          limit: ${max}
        ) {
          items {
            url
          }
        }
      }
    `;
  },
};

export const getNews = async (idx) => {
  const query = queryList.news(idx);
  const data = await getData(query);

  return getItems(data);
};

export const getNewsBySection = async (section) => {
  const query = queryList.newsBySection(section);
  const data = await getData(query);

  return getItems(data);
};

export const getSections = async (idx) => {
  const query = queryList.section(idx);
  const data = await getData(query);

  return getItems(data);
};

export const getAssets = async (tag, max) => {
  const query = queryList.assets(tag, max);
  const data = await getData(query);

  return getItems(data);
};

const contentfulFetch = async (query) => {
  const url = `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + CONTENTFUL_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query }),
  });

  return response;
};

const getData = async (query) => {
  const resp = await contentfulFetch(query);
  const { data } = await resp.json();

  if (!resp.ok || !data) {
    throw error(404, {
      message: response.statusText,
    });
  }

  return data;
};

const getItems = (data) => {
  const { newsSectionCollection, sportSectionCollection, assetCollection } = data;
  let resp = [];

  if (newsSectionCollection) {
    resp = [...resp, ...newsSectionCollection.items];
  }
  if (sportSectionCollection) {
    resp = [...resp, ...sportSectionCollection.items];
  }
  if (assetCollection) {
    resp = [...resp, ...assetCollection.items];
  }

  return resp;
};