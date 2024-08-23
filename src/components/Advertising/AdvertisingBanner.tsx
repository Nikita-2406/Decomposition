interface IAdvertisingBannerProps {
  src: string
}

export const AdvertisingBanner = ({src}: IAdvertisingBannerProps) => {
  return (
    <img src={src} alt="" />
  )
}
