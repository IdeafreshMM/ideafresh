import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { decompressFromBase64 } from 'lz-string'
import Image from './Image'
import CustomLink from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import { BlogNewsletterForm } from './NewsletterForm'

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm: BlogNewsletterForm,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../layouts/${layout}`).default
    return <Layout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, mdxSourceCompressed = false, ...rest }) => {
  const MDXLayout = useMemo(
    () => getMDXComponent(mdxSourceCompressed ? decompressFromBase64(mdxSource) : mdxSource),
    [mdxSource, mdxSourceCompressed]
  )

  // mdx-bundler compiles components from content; useMemo keeps their identity stable.
  // eslint-disable-next-line react-hooks/static-components
  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
