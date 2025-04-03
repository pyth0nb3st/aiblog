import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="text-primary-500 border-primary-500/50 dark:border-primary-400/50 hover:bg-primary-500/10 dark:hover:bg-primary-400/10 hover:shadow-primary-400/30 mr-3 rounded-full border px-3 py-1 text-sm font-medium uppercase transition-all hover:shadow-sm"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
