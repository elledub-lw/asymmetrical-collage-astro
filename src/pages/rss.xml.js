import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('articles', ({ data }) => !data.draft);
  const sorted = posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: 'Asymmetrical Collage',
    description: 'Writing on sovereignty, resilience, Bitcoin, risk, and building for the long term.',
    site: context.site,
    items: sorted.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary || '',
      link: `/articles/${post.slug}/`,
    })),
    customData: '<language>en-gb</language>',
  });
}
