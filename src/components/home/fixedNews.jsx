import React from 'react'
import { colors } from '../styles/styles'
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

export default function FixedNews() {
  const data = useStaticQuery(graphql`
    query {
      allNews {
    edges {
      node {
        id
        link
        published
        summary
        title
      }
    }
  }
    }
  `)
  const newsData = data.allNews.edges


  return (
    <>
      <h4 className="mb-3">
        <span className="hoverEffect">
          LATEST NEWS
       </span>
      </h4>
      <div className='vh90'>
        {newsData.slice(0, 5).map(eachNews => (
          <a target='_blank' rel="noopener noreferrer" key={eachNews.node.id} href={eachNews.node.link} className='text-dark text-decoration-none'>
            <div className="bg-white newsCard py-2 px-2 my-2">
              <h5 className='m-0'>{eachNews.node.title}</h5>
              <small className='m-0 textGrey'>{eachNews.node.published}</small>
              <h6>
                {eachNews.node.summary.replace(/^(.{75}[^\s]*).*/, "$1")}...{' '}
                <span><a target='_blank' rel="noopener noreferrer" href={eachNews.node.link} className='newsLink text-decoration-none'>Read More</a></span>
              </h6>

            </div>
          </a>
        ))}
      </div>
      <div className='vh10 mt-1'>


        <Link to="/news" className='textDark text-decoration-none mt-3'>  <h4 className='text-center seeMore hoverEffect'>See More</h4></Link>
      </div>
      <style jsx>{`
      .vh90{
        height: 73vh;
        overflow-y: scroll;
      }
            .seeMore{
                width: fit-content;
                margin: 0 auto
            }
.textDark {
    color: black;
}
        .newsCard{
            border-radius: 10px;
            box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04),
            0 1px 6px rgba(0, 0, 0, 0.04);
          }
          .textGrey{
            color: ${colors.grey}
          }
          .hoverEffect {
            background: linear-gradient(
              to bottom,
              ${colors.primary} 0%,
              ${colors.primary} 100%
            );
            background-position: 0 73%;
            background-repeat: repeat-x;
            background-size: 9px 9px;
            color: #000;
            text-decoration: none;
            transition: all 0.5s;
          }
          .hoverEffect:hover {
            background-size: 10px 50px;
            color: #fff;
          }
          
        `}</style>
    </>
  )
}


