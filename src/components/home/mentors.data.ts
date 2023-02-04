import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    photo: 'https://education.maharashtra.gov.in/images/school-icon.png',
    name: 'For Schools',
    category: '',
    link: '/schoolform',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 2,
    photo:
      'https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg',
    name: 'For Universitiess',
    category: '',
    link: '/universityform',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
]
