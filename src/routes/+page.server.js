import contentfulFetch from '$lib/utils/util-contentful';

const query = `
{
  sportSectionCollection {
    items {
      title
      description
      imageHero {
        url
      }
    }
	}
  newsSectionCollection {
    items {
      sportSection {
        title
      }
      date
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

  return {
    sportSection: sportSectionCollection.items,
    newsSection: newsSectionCollection.items,
  }
};

export { load };