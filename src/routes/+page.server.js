import { getNews, getSections } from '$lib/utils/util-contentful';
import { contentfulJsonToHtmlText } from '$lib/utils/util-text';

export const load = async () => {
  const itemsNews = await getNews();
  const itemsSection = await getSections();
  const sortedItemsSection = itemsSection.sort((p1, p2) => (p1.position < p2.position) ? -1 : (p1.position > p2.position) ? 1 : 0);

  itemsNews.forEach(item => {
    item.text = contentfulJsonToHtmlText(item.text.json);
  });

  sortedItemsSection.forEach(item => {
    item.description = contentfulJsonToHtmlText(item.description.json);
  });

  return {
    newsSection: itemsNews,
    sportSection: sortedItemsSection,
  };
};