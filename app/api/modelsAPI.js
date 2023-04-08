import { createExcerpt, getContent } from '../utils';

const express = require('express');

const app = express();
app.use(express.json());

// const client = new GraphQLClient(
//   process.env.ENDPOINT
// );

app.get('/getModels', async (req, res) => {
  const entry = 'asd'; // require(`@/content/blog/nuovo-articolo-blog`);
  const posts = {'prova': entry};
  // for (let index = 0; index < slugs.length; index += 1) {
  //   const slug = slugs[index];
  //
  //   const entry = require(`@/content/${prefix}/${slug}.json`);
  //
  //   // Add the slug to the post object
  //   Object.assign(entry, { slug });
  //
  //   content.push({
  //     slug,
  //     title: entry.title,
  //     ...(prefix === 'blog' && {
  //       excerpt: createExcerpt({ text: entry.content }),
  //     }),
  //     featuredImage: entry.featuredImage,
  //   });
  // }
  // const allCourses = `
  //   {
  //       courses {
  //         id
  //         name
  //         description
  //         url
  //         vote
  //         authors {
  //           name
  //         }
  //       }
  //   }
  // `;
  //
  // const { courses } = await client.request(allCourses);

  res.json({ posts })
});


app.get('/header', async (req, res) => {
  const entry = require(`/content/blog/nuovo-articolo-blog`);
  const header = {
    'header': {
      entry
    }
  };
  res.json({ header })
});

module.exports = app
