const ReadingTime = ({ content }: { content: string }) => {
  const wordsPerMinute = 200
  const textLength = content.split(/\s+/).length
  const readingTime = Math.max(1, Math.ceil(textLength / wordsPerMinute))

  return (
    <span className="inline-flex items-center text-gray-500 dark:text-gray-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-1 h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      {readingTime} min read
    </span>
  )
}

export default ReadingTime
