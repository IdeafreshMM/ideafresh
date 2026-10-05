import fs from 'fs'
import path from 'path'
import generateRss from '../lib/generate-rss'
import { getAllFilesFrontMatter } from '../lib/mdx'
import kebabCase from '../lib/utils/kebabCase'

async function main() {
  const posts = await getAllFilesFrontMatter('blog')
  const publicPath = path.join(process.cwd(), 'public')
  fs.mkdirSync(publicPath, { recursive: true })
  fs.writeFileSync(path.join(publicPath, 'feed.xml'), generateRss(posts))

  const tags = new Map()
  for (const post of posts) {
    for (const tag of new Set((post.tags || []).map(kebabCase))) {
      if (!tags.has(tag)) tags.set(tag, [])
      tags.get(tag).push(post)
    }
  }

  for (const [tag, tagPosts] of tags) {
    const feedPath = path.join(publicPath, 'tags', tag)
    fs.mkdirSync(feedPath, { recursive: true })
    fs.writeFileSync(path.join(feedPath, 'feed.xml'), generateRss(tagPosts, `tags/${tag}/feed.xml`))
  }

  console.log(`Generated RSS for ${posts.length} posts and ${tags.size} tags.`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
