import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

const uses = {
  workstation: [
    {
      title: "Mac Studio (M2 Ultra, 64GB RAM)",
      description:
        "The fans have spun up exactly once, and I&apos;m pretty sure it was because I had 148 Chrome tabs open while compiling a Next.js project for fun.",
    },
    {
      title: "Samsung Odyssey G9 Monitor",
      description:
        "A monitor so wide I need to check the weather report before dragging a window from one side to the other.",
    },
    {
      title: "Das Keyboard 4",
      description:
        "Clicky enough that my neighbors two floors down know when I&apos;m coding, or when I&apos;m just raging at Tailwind classes.",
    },
    {
      title: "Chair, IKEA Markus",
      description:
        "It squeaks like a haunted house, but at least it keeps me humble compared to all the Aeron people.",
    },
  ],
  development: [
    {
      title: "VS Code",
      description:
        "It&apos;s where I spend 90% of my waking life. The other 10% is spent installing extensions I&apos;ll never use.",
    },
    {
      title: "Raycast",
      description:
        "The app launcher that makes me feel like a hacker every time I search for &apos;Spotify&apos; instead of clicking the dock icon.",
    },
    {
      title: "GitHub Copilot",
      description:
        "Great for writing boilerplate. Also great for reminding me how boring boilerplate is.",
    }
  ],
  design: [
    {
      title: "MS Paint (in Parallels)",
      description:
        "Sometimes you just need to draw a stick figure diagram and ship it. No layers, no problem.",
    },
  ],
  productivity: [
    {
      title: "Obsidian",
      description:
        "Where I pretend my notes will someday become a book. In reality, it&apos;s just a graveyard of half-written thoughts and pasted Stack Overflow links.",
    },
    {
      title: "Notion",
      description:
        "The world&apos;s most beautiful to-do list that I never actually check.",
    },
    {
      title: "Post-it Notes",
      description:
        "Still undefeated in speed and reliability. They also make my desk look like the wall from A Beautiful Mind.",
    },
  ],
}


function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Tools I swear by, distractions I justify, and gear that makes me feel like a real adult."
      intro="This is the running list of what I use day to day: some things genuinely make me productive, others just look good on my desk. I’ll let you guess which is which."

    >
      <div className="space-y-20">
        {Object.entries(uses).map(([sectionKey, tools]) => (
          <ToolsSection
            key={sectionKey}
            title={sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)}
          >
            {tools.map((tool) => (
              <Tool key={tool.title} title={tool.title}>
                {tool.description}
              </Tool>
            ))}
          </ToolsSection>
        ))}
      </div>
    </SimpleLayout>
  )
}
