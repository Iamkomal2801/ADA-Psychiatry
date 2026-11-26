import facebookSvg from '../../assets/figma/svgs/social/soc2.svg'
import instagramSvg from '../../assets/figma/svgs/social/soc1.svg'
import linkedinSvg from '../../assets/figma/svgs/social/soc5.svg'
import tiktokSvg from '../../assets/figma/svgs/social/soc4.svg'
import twitterSvg from '../../assets/figma/svgs/social/soc3.svg'
import { Logo } from '../ui/Logo'

const social = [
  { src: instagramSvg, label: 'Instagram', sizeClass: 'h-6 w-6' },
  { src: facebookSvg, label: 'Facebook', sizeClass: 'h-6 w-6' },
  { src: twitterSvg, label: 'Twitter', sizeClass: 'h-6 w-6' },
  { src: tiktokSvg, label: 'TikTok', sizeClass: 'h-5 w-[18px]' },
  { src: linkedinSvg, label: 'LinkedIn', sizeClass: 'h-5 w-5' },
]

export function Footer() {
  return (
    <footer id="footer" className="bg-black text-white">
      <div
        id="contact"
        className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:gap-10 lg:px-10 xl:grid-cols-[180px_170px_170px_1fr_330px] xl:gap-6 xl:px-16 xl:pt-[42px] xl:pb-[44px] min-[1440px]:grid-cols-[210px_200px_200px_1fr_357px] min-[1440px]:gap-0 min-[1440px]:px-[100px]"
      >
        <div>
          <h3 className="font-display text-[18px] font-bold leading-[30px] tracking-[0.2px] text-gold">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-[14px] font-sans text-sm">
            <li><a href="#founder" className="transition-colors hover:text-gold">Who We Are</a></li>
            <li><a href="#treatment" className="transition-colors hover:text-gold">What We Treat</a></li>
            <li><a href="#services" className="transition-colors hover:text-gold">Services</a></li>
            <li><a href="#contact" className="transition-colors hover:text-gold">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-[18px] font-bold leading-[30px] tracking-[0.2px] text-gold">
            Resources
          </h3>
          <ul className="mt-5 space-y-[14px] font-sans text-sm">
            <li><a href="#faq" className="transition-colors hover:text-gold">FAQs</a></li>
            <li><a href="#faq" className="transition-colors hover:text-gold">Blog</a></li>
            <li><a href="#contact" className="transition-colors hover:text-gold">Fees and Insurance</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-[18px] font-bold leading-[30px] tracking-[0.2px] text-gold">
            Legal
          </h3>
          <ul className="mt-5 space-y-[14px] font-sans text-sm">
            <li><a href="#footer" className="transition-colors hover:text-gold">Terms</a></li>
            <li><a href="#footer" className="transition-colors hover:text-gold">Privacy</a></li>
            <li><a href="#footer" className="transition-colors hover:text-gold">Return Policy</a></li>
            <li><a href="#footer" className="transition-colors hover:text-gold">Cookie Settings</a></li>
          </ul>
        </div>

        <div className="lg:pr-6">
          <h3 className="font-display text-[18px] font-bold leading-[30px] tracking-[0.2px] text-gold">
            Business Hours
          </h3>
          <p className="mt-5 font-sans text-sm">Monday - Thursday</p>
          <p className="mt-[14px] font-sans text-sm">09:00 am - 4:00 pm</p>
          <h3 className="mt-[30px] font-display text-[18px] font-bold leading-[30px] tracking-[0.2px] text-gold">
            For Careers
          </h3>
          <p className="mt-2.5 max-w-[315px] font-sans text-sm leading-[1.77]">
            Interested in joining the ADA Team?{' '}
            <a
              href="mailto:Career@adapsychiatry.com"
              className="block transition-colors hover:text-gold"
            >
              Career@adapsychiatry.com
            </a>
          </p>
        </div>

        <div>
          <div className="mb-5 flex items-center gap-[14px]">
            <Logo className="h-[46px] w-[46px]" />
            <span className="font-sans text-[16px] font-bold uppercase leading-tight tracking-[2px] text-white sm:text-[18px] sm:leading-[52px] sm:tracking-[3px]">
              Ada Psychiatry
            </span>
          </div>

          <h3 className="font-display text-[16px] font-bold leading-[30px] tracking-[0.2px] text-gold">
            Locate us
          </h3>
          <p className="mt-1.5 max-w-[357px] font-sans text-sm leading-[1.41]">
            1820 E Ray Road, STE A107, Chandler, Arizona 85225
            <br />
            Phone:{' '}
            <a href="tel:4805269292" className="transition-colors hover:text-gold">
              480-526-9292
            </a>
          </p>

          <h3 className="mt-5 font-display text-[16px] font-bold leading-[30px] tracking-[0.2px] text-gold">
            Follow us
          </h3>
          <div className="mt-2.5 flex items-center gap-4">
            {social.map(({ src, label, sizeClass }) => (
              <a
                key={label}
                href="#footer"
                aria-label={label}
                className="flex h-6 items-center justify-center transition-opacity hover:opacity-75"
              >
                <img src={src} alt="" className={sizeClass} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 py-3.5 text-center font-sans text-xs tracking-[0.2px] text-white">
        © Ada Psychiatry. All rights reserved.
      </div>
    </footer>
  )
}
