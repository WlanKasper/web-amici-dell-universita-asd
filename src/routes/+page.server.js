import { getNews, getSections } from '$lib/utils/util-contentful';
import { contentfulJsonToHtmlText } from '$lib/utils/util-text';

export const load = async () => {
  const itemsNews = await getNews();
  const itemsSection = await getSections();

  itemsNews.forEach(item => {
    item.text = contentfulJsonToHtmlText(item.text.json);
  });

  itemsSection.forEach(item => {
    item.description = contentfulJsonToHtmlText(item.description.json);
  });

  return {
    newsSection: itemsNews,
    sportSection: itemsSection,
  };
};