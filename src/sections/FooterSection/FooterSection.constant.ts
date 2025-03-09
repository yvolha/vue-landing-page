type SocialsInfo = {
  imgSrc: string
  href: string
}
export const FOOTER_SECTION_SOCIALS_INFO: SocialsInfo[] = [
  {
    imgSrc: '/src/assets/footer/social-x.svg',
    href: 'https://x.com/',
  },
  {
    imgSrc: '/src/assets/footer/social-telegram.svg',
    href: 'https://web.telegram.org/',
  },
  {
    imgSrc: '/src/assets/footer/social-youtube.svg',
    href: 'https://www.youtube.com/',
  },
  {
    imgSrc: '/src/assets/footer/social-facebook.svg',
    href: 'https://www.facebook.com/',
  },
  {
    imgSrc: '/src/assets/footer/social-linkedin.svg',
    href: 'https://www.linkedin.com/',
  },
  {
    imgSrc: '/src/assets/footer/social-rss.svg',
    href: '/',
  },
]

type NavigationInfo = {
  text: string
  href: string
}

export const FOOTER_SECTION_NAVIGATION_INFO: NavigationInfo[] = [
  {
    text: 'Finance Magnates',
    href: '/',
  },
  {
    text: 'Latest News',
    href: '/',
  },
  {
    text: 'Directory',
    href: '/',
  },
  {
    text: 'Events',
    href: '/',
  },
  {
    text: 'Contact Us',
    href: '/',
  },
]

type PoliciesInfo = {
  text: string
  href: string
}

export const FOOTER_SECTION_POLICIES_INFO: PoliciesInfo[] = [
  {
    text: 'Cookie Policy',
    href: '/',
  },
  {
    text: 'Privacy Policy',
    href: '/',
  },
  {
    text: 'Terms and Conditions',
    href: '/',
  },
  {
    text: 'Manage Cookies',
    href: '/',
  },
]
