import contentfulFetch from '$lib/utils/util-contentful';

const load = async (context) => {
    const { params } = context;
    const idx = params.idx;
    const query = `
    {
        newsSectionCollection (where:{
            sys: {
                id: "${idx}"
            }
        })
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

    const response = await contentfulFetch(query);

    if (!response.ok) {
        throw error(404, {
            message: response.statusText,
        });
    }

    const { data } = await response.json();
    const { newsSectionCollection } = data;

    return {
        newsSection: newsSectionCollection.items,
    }
};

export { load };