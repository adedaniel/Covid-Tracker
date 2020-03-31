import React from 'react'
import { colors } from '../styles/styles'
import { Link } from "gatsby"

export default function FixedNews() {
    return (
        <>
            <h4 className="mb-3">
                <span className="hoverEffect">
                    LATEST NEWS
                            </span>
            </h4>
            <Link to='#' className='text-dark text-decoration-none'>
                <div className="bg-white newsCard py-2 px-2 my-2">
                    <h4 className='m-0'>Ogun State calls State of Emergency</h4>
                    <small className='m-0 textGrey'>14 hours ago</small>
                    <h6>
                        {'Following the occurence of events, the Ogun State Government has officially declared a state of emergency '.replace(/^(.{75}[^\s]*).*/, "$1")}...{' '}
                        <span><a href="#" className='newsLink text-decoration-none'>Read More</a></span>
                    </h6>

                </div>
            </Link>

            <a href="#" className='textDark text-decoration-none mt-3'>  <h4 className='text-center seeMore hoverEffect'>See More</h4></a>
            <style jsx>{`
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
