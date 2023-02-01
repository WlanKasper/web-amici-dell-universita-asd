import contentfulFetch from '$lib/utils/util-contentful';
import { contentfulJsonToHtmlText } from '$lib/utils/util-text';

const query = `
{
  sportSectionCollection {
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
  newsSectionCollection {
    items {
      sys {
        id
      }
      title
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

const load = async () => {
  const response = await contentfulFetch(query);

  if (!response.ok) {
    throw error(404, {
      message: response.statusText,
    });
  }

  const { data } = await response.json();
  const { sportSectionCollection, newsSectionCollection } = data;

  newsSectionCollection.items.forEach(item => {
    item.text = contentfulJsonToHtmlText(item.text.json);
  });

  return {
    sportSection: sportSectionCollection.items,
    newsSection: newsSectionCollection.items,
  }
};

export { load };