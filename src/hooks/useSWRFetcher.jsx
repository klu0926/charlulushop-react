import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function useSWRFetcher(url) {
  return useSWR(url, fetcher)
}
