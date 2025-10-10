import React from 'react'

export default function PaginationNav(props) {
    const {} = props
    {/* TODO */}
  return (
    <nav>
        <ul className="pagination-list">
            <li><a className="disabled-link" href="#prev">&laquo;</a></li>  
            <li><a className="current-page active" href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a className="disabled-link" href="#">...</a></li>
            <li><a href="#">50</a></li>
            <li><a href="#">&raquo;</a></li>
        </ul>
    </nav>
  )
}
