import React from 'react'
import JobCards from './components/JobCards'

const App = () => {

  const jobsData = [ 
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/500px-Google_%22G%22_logo.svg.png",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag: "Full-Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8ivjh3jEgWs6uv7DMzADcxPcFaWP00H1hQ&s",
    company: "Apple",
    datePosted: "2 weeks ago",
    post: "UI/UX Designer",
    tag: "Full-Time",
    tag2: "Mid Level",
    pay: "$78/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBcJ5UToK2Xd61DAqvhns8G1lgkxnu0FtoKA&s",
    company: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag: "Full-Time",
    tag2: "Junior Level",
    pay: "$60/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://thumbs.dreamstime.com/b/amazon-logo-editorial-vector-illustration-market-136495269.jpg",
    company: "Amazon",
    datePosted: "3 days ago",
    post: "Product Designer",
    tag: "Part-Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK-b-GRJP49S_nvl8UDCQ2DDusVBUmQcN1Ug&s",
    company: "Netflix",
    datePosted: "1 week ago",
    post: "Backend Engineer",
    tag: "Full-Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRorZ3N7ebM-UJ7ZrVpl4YoZH6p9BweEVfLzQ&s",
    company: "Microsoft",
    datePosted: "4 weeks ago",
    post: "Cloud Engineer",
    tag: "Full-Time",
    tag2: "Mid Level",
    pay: "$88/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/56/3a/a2/563aa2189ef92dc242a7db5b91078804.jpg",
    company: "Adobe",
    datePosted: "6 days ago",
    post: "Graphic Designer",
    tag: "Contract",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JPvedCBmNG39bU4Zvq1PJTRRl6Nc8OOimA&s",
    company: "Uber",
    datePosted: "8 days ago",
    post: "Mobile App Developer",
    tag: "Full-Time",
    tag2: "Mid Level",
    pay: "$72/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE6rEwOICcJn8gLGXLl-UTGpCl7csC-K5CMw&s",
    company: "Airbnb",
    datePosted: "2 days ago",
    post: "UX Researcher",
    tag: "Part-Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://m.media-amazon.com/images/I/51USKDYqHZL._AC_UF894,1000_QL80_.jpg",
    company: "Tesla",
    datePosted: "3 weeks ago",
    post: "Full Stack Developer",
    tag: "Full-Time",
    tag2: "Senior Level",
    pay: "$92/hr",
    location: "Hyderabad, India"
  }
];

  return (
    <div className='parent'>
      {jobsData.map((job, index) => (
        <JobCards key={index} {...job} />
      ))}
    </div>
  )
}

export default App
