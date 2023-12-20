export const isMobile = (): boolean => {
  const { userAgent } = navigator;
  return !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
    .test(navigator.userAgent)
}