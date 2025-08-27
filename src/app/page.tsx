import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { siteConfig } from '@/lib/config'
import IdCard from '@/components/id-card'
import SnowConeLogo from '@/images/logos/snowcone.svg';
import HeliusLogo from '@/images/logos/helius.svg';
import EazyInvLogo from '@/images/logos/eazyinv.svg';
import EthmintLogo from '@/images/logos/ethmint.svg';
import { EazyinvCard, HeliusCard, KeyboardConfiguratorCard, RamifiCard, SnowconeCard, XforkeyCard } from '@/components/CompanyCards'


export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      {/* Top container containing all elements before articles section */}
      <Container className="relative">
        {/* 3D Card absolutely positioned within the container */}


        {/* Text content and social links */}
        <div className="relative z-10 flex flex-col justify-center pointer-events-none">
          <div className="max-w-2xl mt-40 mb-24 md:mb-28 z-40">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl pointer-events-auto">
              Engineer, builder, and lifelong systems
              <span className="bg-gradient-to-br from-blue-200 to-blue-500 bg-clip-text text-transparent">
                {' '}Thinker.
              </span>
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 pointer-events-auto">
              I&apos;m {siteConfig.author.name}, a software engineer based in {siteConfig.author.location}. {siteConfig.meta.tagline}
            </p>
            <div className="mt-6 flex gap-6 pointer-events-auto">
              <SocialLink href={siteConfig.social.twitter} aria-label="Follow on Twitter" icon={TwitterIcon} />
              <SocialLink href={siteConfig.social.github} aria-label="Follow on GitHub" icon={GitHubIcon} />
              <SocialLink href={siteConfig.social.linkedin} aria-label="Follow on LinkedIn" icon={LinkedInIcon} />
              <div className="flex">
                <MailIcon className="h-6 w-6 mr-1 fill-zinc-500 dark:fill-zinc-400" />
                <p className="text-zinc-400 font-bold text-sm">{siteConfig.social.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0">
          <IdCard />
        </div>
      </Container>

      {/* Articles Section */}
      <Container className="">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-2">
            <XforkeyCard />
            <EazyinvCard />
            <KeyboardConfiguratorCard />
            <SnowconeCard />
            <HeliusCard />
            {/* <RamifiCard /> */}



          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter /> */}
            <Resume />

            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}



function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

/* function Newsletter() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM || "YOUR_FORM_ID")

  if (state.succeeded) {
    return (
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <MailIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Thank you!</span>
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Thanks for subscribing! You'll receive notifications when I publish something new.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" disabled={state.submitting} className="ml-4 flex-none">
          {state.submitting ? 'Joining...' : 'Join'}
        </Button>
      </div>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <ValidationError errors={state.errors} />
    </form>
  )
} */

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
}

function Role({ role }: { role: Role }) {

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
      </dl>
    </li>
  )
}

const resume = [
  {
    company: 'Eazyinv',
    title: 'Lead Software Engineer',
    logo: EazyInvLogo
  },
  {
    company: 'SnowCone',
    title: 'Senior Software Engineer',
    logo: SnowConeLogo
  },
  {
    company: 'Helius',
    title: 'Senior Developer',
    logo: HeliusLogo
  },
  {
    company: 'Ethmint',
    title: 'Junior Developer',
    logo: EthmintLogo
  }
];


function Resume() {

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  )
}