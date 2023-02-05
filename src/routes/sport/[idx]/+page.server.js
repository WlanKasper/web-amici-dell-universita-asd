import { getNewsBySection, getSections, getAssets } from '$lib/utils/util-contentful';

const load = async (context) => {
  const { params } = context;
  const idx = params.idx;

  const itemsSection = await getSections(idx);
  const { title } = itemsSection[0];
  const itemsNews = await getNewsBySection(title);
  const itemsAssets = await getAssets(`photo${title.replaceAll(' ', '')}`, 5);

  return {
    newsCollection: itemsNews,
    sportSection: itemsSection,
    photoCollection: itemsAssets,
  }
};

export { load };