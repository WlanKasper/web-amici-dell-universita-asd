import { getNewsBySection, getSections, getAssets } from '$lib/utils/util-contentful';
import { contentfulJsonToHtmlText } from '$lib/utils/util-text';

const load = async (context) => {
  const { params } = context;
  const idx = params.idx;

  const itemsSection = await getSections(idx);
  const { title } = itemsSection[0];
  const itemsNews = await getNewsBySection(title);
  const itemsAssets = await getAssets(`photo${title.replaceAll(' ', '')}`, 5);

  itemsNews.forEach(item => {
    item.text = contentfulJsonToHtmlText(item.text.json);
  });
  
  itemsSection.forEach(item => {
    item.description = contentfulJsonToHtmlText(item.description.json);
  });

  return {
    newsCollection: itemsNews,
    sportSection: itemsSection,
    photoCollection: itemsAssets,
  }
};

export { load };