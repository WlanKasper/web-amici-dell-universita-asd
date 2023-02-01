import contentfulFetch from '$lib/utils/util-contentful';
import { contentfulJsonToHtmlText } from '$lib/utils/util-text';

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

    const response = await contentfulFetch(query);

    if (!response.ok) {
        throw error(404, {
            message: response.statusText,
        });
    }

    const { data } = await response.json();
    const { newsSectionCollection } = data;

    const jsonData = newsSectionCollection.items[0].text.json;
    newsSectionCollection.items[0].text = contentfulJsonToHtmlText(jsonData);

    return {
        newsSection: newsSectionCollection.items,
    }
};

export { load };