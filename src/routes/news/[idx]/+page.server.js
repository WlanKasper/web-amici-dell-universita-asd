import { getNews } from '$lib/utils/util-contentful';
import { contentfulJsonToHtmlText } from '$lib/utils/util-text';

export const load = async (context) => {
    const { params } = context;
    const idx = params.idx;

    const itemsNews = await getNews(idx);

    itemsNews.forEach(item => {
        item.text = contentfulJsonToHtmlText(item.text.json);
    });

    return { newsSection: itemsNews };
};