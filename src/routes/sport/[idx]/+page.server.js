import contentfulFetch from '$lib/utils/util-contentful';

const load = async (context) => {
    const { params } = context;
    const idx = params.idx;
    const querySport = `
    {
        sportSectionCollection (where:{
            sys: {
                id: "${idx}"
            }
        })
        {
            items {
                sys {
                    id
                }
                title
                description
                imageHero {
                    url
                }
            }
        }
    }
    `;
    const responseSport = await contentfulFetch(querySport);

    if (!responseSport.ok) {
        throw error(404, {
            message: response.statusText,
        });
    }

    const { data: sportData } = await responseSport.json();
    const { sportSectionCollection } = sportData;

    const queryPhoto = `
    {
        assetCollection (where: {
            contentfulMetadata: {
                tags: {
                  id_contains_all: "photo${sportSectionCollection.items[0].title.replaceAll(' ', '')}"
                }
              }
            },limit: 6)
          {
            items {
              url
            }
          }
    }
    `;
    const responsePhoto = await contentfulFetch(queryPhoto);

    if (!responseSport.ok) {
        throw error(404, {
            message: response.statusText,
        });
    }

    const { data: photoData } = await responsePhoto.json();
    const { assetCollection } = photoData;

    const queryNews = `
    {
        newsSectionCollection(where: { sportSection: { title: "${sportSectionCollection.items[0].title}" } },limit: 3) {
            items{
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
              imagesFilesCollection(limit: 2) {
                items {
                  title
                  url
                }
              }
            }
          }
    }
    `;
    const responseNews = await contentfulFetch(queryNews);

    if (!responseNews.ok) {
        throw error(404, {
            message: response.statusText,
        });
    }

    const { data: newsData } = await responseNews.json();
    const { newsSectionCollection } = newsData;

    return {
        sportSection: sportSectionCollection.items,
        photoCollection: assetCollection.items,
        newsCollection: newsSectionCollection.items,
    }
};

export { load };