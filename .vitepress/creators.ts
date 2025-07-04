export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: '名',
    avatar: 'https://avatars.githubusercontent.com/u/183704833?v=4',
    username: 'LKM-lkm',
    title: 'Likem\'s Blog 创作者',
    desc: '热爱技术和创新，领域涉及文艺、文字乐谱排版，人工智能领域的研究与应用。喜欢探索新技术，用代码创造美好的数字世界。',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/LKM-lkm/' },
      { type: 'x', icon: 'x', link: 'https://twitter.com/ayakaneko' },
    ],
    nameAliases: ['Ming', '名', 'Likem', 'LKM-lkm', 'L km', 'km L'],
    emailAliases: ['lkm836972@outlook.com'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
