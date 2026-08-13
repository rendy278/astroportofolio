import {
  IconBook,
  IconBriefcase,
  IconEyeDollar,
  IconHome,
  IconInfoCircle,
  IconMail,
} from '@tabler/icons-react'

export const navLinks = {
  id: [
    {
      key: 'nav.home',
      href: '/',
      icon: IconHome,
    },
    {
      key: 'nav.about',
      href: '/tentang',
      icon: IconInfoCircle,
    },
    {
      key: 'nav.price',
      href: '/harga',
      icon: IconEyeDollar,
    },
    {
      key: 'nav.case_studies',
      href: '/studi-kasus',
      icon: IconBriefcase,
    },
    {
      key: 'nav.blog',
      href: '/blog',
      icon: IconBook,
    },
    {
      key: 'nav.contact',
      href: '/kontak',
      icon: IconMail,
    },
  ],

  en: [
    {
      key: 'nav.home',
      href: '/',
      icon: IconHome,
    },
    {
      key: 'nav.about',
      href: '/about',
      icon: IconInfoCircle,
    },
    {
      key: 'nav.price',
      href: '/price',
      icon: IconEyeDollar,
    },
    {
      key: 'nav.case_studies',
      href: '/case-studies',
      icon: IconBriefcase,
    },
    {
      key: 'nav.blog',
      href: '/blog',
      icon: IconBook,
    },
    {
      key: 'nav.contact',
      href: '/contact',
      icon: IconMail,
    },
  ],
} as const
