import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="md max-w-[544px] p-4 transition-all duration-300 hover:translate-y-[-5px] md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      } hover:border-primary-400/70 hover:shadow-primary-400/20 dark:hover:border-primary-500/70 overflow-hidden rounded-lg border-2 border-gray-200/60 transition-all duration-300 hover:shadow-lg dark:border-gray-700/60`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="transform object-cover object-center transition-transform duration-500 hover:scale-105 md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center transition-transform duration-500 hover:scale-105 md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">
          {href ? (
            <Link
              href={href}
              aria-label={`Link to ${title}`}
              className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 group inline-flex items-center text-base leading-6 font-medium"
            aria-label={`Link to ${title}`}
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
