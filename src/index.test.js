import {wolffer} from '.'

test('replaces blacklisted word with asterisks', () => (
  expect(wolffer('hey there', ['hey'])).toBe('**** there')
))

test('replaces blacklisted words with asterisks', () => (
  expect(wolffer('hey there, how is it going', ['hey', 'how'])).toBe('**** there, **** is it going')
))
