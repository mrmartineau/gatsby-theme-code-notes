import React from 'react'
import { Link } from 'gatsby'

export const TagList = ({ tags }) => (
  <ul>
    {tags.map((item, index) => (
      <li key={index}>
        <Link to={`/tag/${encodeURI(item.toLowerCase())}`}>{item}</Link>
      </li>
    ))}
  </ul>
)
