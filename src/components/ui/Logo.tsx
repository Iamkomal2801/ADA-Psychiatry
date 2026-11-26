import logoImg from '../../assets/figma/logo.png'

type LogoProps = {
  className?: string
}

export function Logo({ className = 'h-[46px] w-[46px]' }: LogoProps) {
  return (
    <img
      src={logoImg}
      alt=""
      width={46}
      height={46}
      aria-hidden="true"
      className={`shrink-0 object-contain ${className}`}
    />
  )
}
