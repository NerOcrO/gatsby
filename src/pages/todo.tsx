import { Link } from 'gatsby'
import React from 'react'

import * as Styles from '../styles/index.module.css'

export default function Todo(): React.ReactElement {
  return (
    <main className={Styles['pageStyles']}>
      <Link to="/">
        {'HOME'}
      </Link>
    </main>
  )
}

export function Head() {
  return (
    <title>
      {'Todo'}
    </title>
  )
}
