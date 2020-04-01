import React from 'react'
import { colors } from '../styles/styles'
// import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
export default function TopCasesLocal() {
    const data = useStaticQuery(graphql`
    query {
        allNcdc {
    edges {
      node {
        ncdc{
            Numbers{
                _12
            }
            States{
                _12
            }
        }
      }
    }
  }
    }
  `)
    const ncdcNumbers = data.allNcdc.edges[0].node.ncdc.Numbers._12
    const ncdcStates = data.allNcdc.edges[0].node.ncdc.States._12
    // console.log(ncdcNumbers);
    return (
        <div className="col-sm-2 topCase">
            <h1 className='caseNumber colorPrimary'>{ncdcNumbers}</h1>

            <h5 className='caseState colorPrimary'>Cases</h5>
            <h4 className='caseState colorPrimary'>{ncdcStates}</h4>
            <style jsx>{`
.caseNumber{
    font-size: 4.5rem
  }
  .topCase{
    background-color: ${colors.white};
    padding: 20px 5px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04),
    0 1px 6px rgba(0, 0, 0, 0.04);
  }
  .colorPrimary {
    color: ${colors.primary};
  }
`}</style>
        </div>
    )
}
