// Define MDXComponents type for Next.js MDX support
type MDXComponents = {
  [component: string]: React.ComponentType<any>
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  }
}
