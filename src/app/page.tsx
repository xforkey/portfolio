import { GitHubIcon, LinkedInIcon, TwitterIcon } from '@/components/SocialIcons'
import { SnowconeCard, HeliusCard, EazyinvCard } from '@/components/CompanyCards'
import { MailIcon, Resume, SocialLink } from './_components/resume'
import IdCard from '@/components/id-card'

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section with Fixed Height */}
      <div className="relative mx-auto h-[550px]">
        {/* Canvas/IdCard Layer (covers only the hero section) */}
        <div className="absolute inset-0 z-50">
          <IdCard />
        </div>

<div className="w-full max-w-6xl mx-auto">
        <div className="relative z-10 flex flex-col px-6 pt-32">
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            {/* Left Side - Headings & Socials */}
            <div className="flex flex-col space-y-6 text-center lg:text-left">
              <h3 className="text-lg font-bold tracking-tight text-zinc-800 dark:text-zinc-400 sm:text-3xl">
                Kyle Forkey
              </h3>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Full stack
                <span className="bg-gradient-to-br from-blue-200 to-fuchsia-500 bg-clip-text text-transparent">
                  /Front End{' '}
                </span>
                developer
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                7+ years of experience in designing, developing, and deploying scalable web applications.
              </p>
              {/* Social Links */}
              <div className="mt-6 flex justify-center lg:justify-start gap-6">
                <SocialLink href="https://x.com/theesehands" aria-label="Follow on Twitter" icon={TwitterIcon} />
                <SocialLink href="https://github.com/sirbenchalot757?tab=repositories" aria-label="Follow on GitHub" icon={GitHubIcon} />
                <SocialLink href="https://www.linkedin.com/feed/" aria-label="Follow on LinkedIn" icon={LinkedInIcon} />
                <div className="flex">
                  <MailIcon className="h-6 w-6 mr-1 fill-zinc-500 dark:fill-zinc-400" />
                  <p className="text-zinc-400 font-bold text-sm">Xforkey@gmail.com</p>
                </div>
              </div>
            </div>

            {/* (Optional) You can add a static preview of the badge here if needed */}
          </div>
        </div>
      </div>
      </div>

      {/* Additional Sections Below the Hero */}
      <div className="space-y-4 max-w-6xl mx-auto -mt-6">
        <SnowconeCard />
        <EazyinvCard />
        <HeliusCard />
        <div className="mt-12">
        <Resume />
        </div>
      </div>
    </div>
  )
}
