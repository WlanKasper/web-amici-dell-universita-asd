import contentfulFetch from '$lib/utils/util-contentful';

const load = async (context) => {
    const { params } = context;
    const idx = params.idx;
    const query = `
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

    const response = await contentfulFetch(query);

    if (!response.ok) {
        throw error(404, {
            message: response.statusText,
        });
    }

    const { data } = await response.json();
    const { sportSectionCollection } = data;

    return {
        sportSection: sportSectionCollection.items,
    }
};

export { load };