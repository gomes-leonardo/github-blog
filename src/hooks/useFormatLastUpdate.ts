import { formatDistanceToNowStrict } from 'date-fns'
import { pt } from 'date-fns/locale/pt'
export const useFormatLastUpdated = (updatedAt: string) => {
  const parsedDate = new Date(updatedAt)
  return formatDistanceToNowStrict(parsedDate, {
    addSuffix: true,
    locale: pt,
  })
}
