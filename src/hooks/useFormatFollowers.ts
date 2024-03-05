export const useFormatFollowers = (followers: number) => {
  if (followers >= 1000) {
    return (followers / 1000).toFixed(1) + 'k'
  }
  return followers.toString()
}
