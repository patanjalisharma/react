import Card from "./components/Card"


function App() {
  const jobs = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3FWYqI7Rj3rLofyaft2Fx6Vi9I8OjJRXNIw&s",
    posted: "5d",
    title: "Senior UI/UX Designer",
    type: "Part-Time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India",
  },
  {
    id: 2,
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    posted: "2d",
    title: "Graphic Designer",
    type: "Full-Time",
    level: "Mid Level",
    salary: "$150k",
    location: "Bengaluru, India",
  },
  {
    id: 3,
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    posted: "1d",
    title: "Frontend Developer",
    type: "Remote",
    level: "Junior Level",
    salary: "$90k",
    location: "Hyderabad, India",
  },
  {
    id: 4,
    company: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    posted: "4d",
    title: "React Developer",
    type: "Full-Time",
    level: "Senior Level",
    salary: "$180k",
    location: "Remote",
  },
  {
    id: 5,
    company: "Adobe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
    posted: "3d",
    title: "Product Designer",
    type: "Part-Time",
    level: "Mid Level",
    salary: "$110/hr",
    location: "Noida, India",
  },
  {
    id: 6,
    company: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",
    posted: "6d",
    title: "UI Designer",
    type: "Remote",
    level: "Senior Level",
    salary: "$140k",
    location: "Stockholm, Sweden",
  },
  {
    id: 7,
    company: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
    posted: "1w",
    title: "Full Stack Developer",
    type: "Full-Time",
    level: "Senior Level",
    salary: "$210k",
    location: "Menlo Park, USA",
  },
  {
    id: 8,
    company: "Airbnb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
    posted: "2w",
    title: "Backend Engineer",
    type: "Hybrid",
    level: "Mid Level",
    salary: "$170k",
    location: "San Francisco, USA",
  },
];


  return (
   <div className="parent">
     {jobs.map(function(e){
      return <div key={e.id}>
         <Card company={e.company} title = {e.title} salary = {e.salary} location = {e.location} posted = {e.posted} logo = {e.logo} type = {e.type} level = {e.level} />
      </div>
     })}
   </div>
  )
}

export default App