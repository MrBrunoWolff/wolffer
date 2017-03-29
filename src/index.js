export const wolffer = (content, words) => (
  content.replace(
    new RegExp(words.join('|'), 'ig'),
    '****'
  )
)
