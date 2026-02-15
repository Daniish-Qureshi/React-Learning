import React from 'react'
import { Bookmark } from 'lucide-react'

const JobCards = ({
  brandLogo,
  company,
  datePosted,
  post,
  tag,
  tag2,
  pay,
  location
}) => {

  return (
    <div className="card">

      <div className="top">
        <img src={brandLogo} alt={company} />
        <button>
          Save <Bookmark size={14} />
        </button>
      </div>

      <div className="center">
        <h3>
          {company} <span>{datePosted}</span>
        </h3>
        <h2>{post}</h2>
      </div>

      <div className='tag'>
        <h4>{tag}</h4>
        <h4>{tag2}</h4>
      </div>

      <div className="bottom">
        <div>
          <div>
            <h3>{pay}</h3>
            <p>{location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>

    </div>
  )
}

export default JobCards
