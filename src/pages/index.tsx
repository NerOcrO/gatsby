import { Link } from 'gatsby'
import React from 'react'

const pageStyles = {
  color: '#232129',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
  padding: 96,
}
const headingStyles = {
  marginBottom: 64,
  marginTop: 0,
  maxWidth: 320,
}
const headingAccentStyles = { color: '#663399' }
const paragraphStyles = { marginBottom: 48 }
const codeStyles = {
  backgroundColor: '#FFF4DB',
  borderRadius: 4,
  color: '#8A6534',
  fontSize: '1.25rem',
  padding: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const doclistStyles = { paddingLeft: 0 }
const listItemStyles = {
  fontSize: 24,
  fontWeight: 300,
  marginBottom: 30,
  maxWidth: 560,
}

const linkStyle = {
  color: '#8954A8',
  fontSize: 16,
  fontWeight: 'bold',
  verticalAlign: '5%',
}

const docLinkStyle = {
  ...linkStyle,
  display: 'inline-block',
  listStyleType: 'none',
  marginBottom: 24,
  marginRight: 12,
}

const descriptionStyle = {
  color: '#232129',
  fontSize: 14,
  lineHeight: 1.25,
  marginBottom: 0,
  marginTop: 10,
}

const docLinks = [
  {
    color: '#8954A8',
    text: 'TypeScript Documentation',
    url: 'https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/',
  },
  {
    color: '#8954A8',
    text: 'GraphQL Typegen Documentation',
    url: 'https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/',
  },
]

const badgeStyle = {
  backgroundColor: '#088413',
  border: '1px solid #088413',
  borderRadius: 4,
  color: '#fff',
  display: 'inline-block',
  fontSize: 11,
  fontWeight: 'bold',
  letterSpacing: 1,
  lineHeight: 1,
  marginLeft: 10,
  padding: '4px 6px',
  position: 'relative' as const,
  top: -2,
}

const links = [
  {
    color: '#E95800',
    description: "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    text: 'Tutorial',
    url: 'https://www.gatsbyjs.com/docs/tutorial/',
  },
  {
    color: '#1099A8',
    description: "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    text: 'How to Guides',
    url: 'https://www.gatsbyjs.com/docs/how-to/',
  },
  {
    color: '#BC027F',
    description: "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    text: 'Reference Guides',
    url: 'https://www.gatsbyjs.com/docs/reference/',
  },
  {
    color: '#0D96F2',
    description: 'Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.',
    text: 'Conceptual Guides',
    url: 'https://www.gatsbyjs.com/docs/conceptual/',
  },
  {
    color: '#8EB814',
    description: 'Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.',
    text: 'Plugin Library',
    url: 'https://www.gatsbyjs.com/plugins',
  },
  {
    badge: true,
    color: '#663399',
    description: 'Now you???re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!',
    text: 'Build and Host',
    url: 'https://www.gatsbyjs.com/cloud',
  },
]

export default function IndexPage(): React.ReactElement {
  return (
    <main style={pageStyles}>
      <Link to="/todo">
        {'TODO UPDATE'}
      </Link>
      <h1 style={headingStyles}>
        {'Congratulations'}
        <br />
        <span style={headingAccentStyles}>
          {'??? you just made a Gatsby site!mmmmmmm ????????????'}
        </span>
      </h1>
      <p style={paragraphStyles}>
        {'Edit'}
        {' '}
        <code style={codeStyles}>
          {'src/pages/index.tsx'}
        </code>
        {' '}
        {'to see this page'}
        {'update in real-time. ????'}
      </p>
      <ul style={doclistStyles}>
        {docLinks.map((doc) => (
          <li
            key={doc.url}
            style={docLinkStyle}
          >
            <a
              href={`${doc.url}?utm_source=starter&utm_medium=ts-docs&utm_campaign=minimal-starter-ts`}
              style={linkStyle}
            >
              {doc.text}
            </a>
          </li>
        ))}
      </ul>
      <ul style={listStyles}>
        {links.map((link) => (
          <li
            key={link.url}
            style={{ ...listItemStyles, color: link.color }}
          >
            <span>
              <a
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
                style={linkStyle}
              >
                {link.text}
              </a>
              {
                link.badge ?
                  <span
                    aria-label="New Badge"
                    style={badgeStyle}
                  >
                    {'NEW!'}
                  </span> : null
              }
              <p style={descriptionStyle}>
                {link.description}
              </p>
            </span>
          </li>
        ))}
      </ul>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  )
}

export function Head() {
  return (
    <title>
      {'Home Page'}
    </title>
  )
}
