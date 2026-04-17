const jobs =[
  {
    "id": 1,
    "title": "Frontend Developer",
    "company": "TechCo Solutions",
    "location": "Bangalore",
    "salary": "8-12 LPA",
    "skills": ["React", "JavaScript", "CSS"]
  },
  {
    "id": 2,
    "title": "Backend Engineer",
    "company": "StartupX",
    "location": "Mumbai",
    "salary": "6-10 LPA",
    "skills": ["Java", "SQL", "Spring Boot"]
  },
  {
    "id": 3,
    "title": "Full Stack Developer",
    "company": "InnovateLabs",
    "location": "Bangalore",
    "salary": "10-15 LPA",
    "skills": ["React", "Node.js", "MongoDB"]
  },
  {
    "id": 4,
    "title": "Junior Software Engineer",
    "company": "CloudFirst",
    "location": "Delhi",
    "salary": "5-8 LPA",
    "skills": ["Java", "JavaScript", "AWS"]
  },
  {
    "id": 5,
    "title": "React Developer",
    "company": "DesignFlow",
    "location": "Pune",
    "salary": "7-11 LPA",
    "skills": ["React", "Next.js", "Tailwind CSS"]
  },
  {
    "id": 6,
    "title": "Java Backend Developer",
    "company": "EnterpriseSoft",
    "location": "Hyderabad",
    "salary": "9-13 LPA",
    "skills": ["Java", "Spring", "PostgreSQL"]
  },
  {
    "id": 7,
    "title": "Web Developer",
    "company": "WebCreative",
    "location": "Bangalore",
    "salary": "6-9 LPA",
    "skills": ["HTML", "CSS", "JavaScript", "jQuery"]
  },
  {
    "id": 8,
    "title": "Next.js Developer",
    "company": "ModernApps",
    "location": "Mumbai",
    "salary": "11-16 LPA",
    "skills": ["Next.js", "React", "TypeScript", "Cloud"]
  },
  {
    "id": 9,
    "title": "Software Development Intern",
    "company": "TechStartup",
    "location": "Delhi",
    "salary": "3-5 LPA",
    "skills": ["Java", "JavaScript", "SQL"]
  },
  {
    "id": 10,
    "title": "Frontend Engineer",
    "company": "DataViz Inc",
    "location": "Pune",
    "salary": "9-13 LPA",
    "skills": ["React", "JavaScript", "D3.js", "CSS"]
  }
]


const searchFilter = document.getElementById('title');
const salaryFilter = document.getElementById('range');
const locationFilter = document.getElementById('location');
const NojobContainer = document.getElementById('noResults');
const jobcontainer = document.getElementById('jobs');


function displayJobs(jobData){
    jobcontainer.innerHTML = "";
    if(jobData.length==0){
        noResults.textContent = 'No results found';
        return;
    }

    noResults.textContent = "";

    jobData.forEach(job=>{
        const card = document.createElement('div');
        card.className = "card";
        card.innerHTML = `
        <h3>${job.title}</h3>
        <p>${job.company}</p>
        <p>${job.location}</p>
        <p>${job.salary}</p>

        
        
        `

        jobcontainer.appendChild(card);
    })

}


function filterJobs(){
    const location = locationFilter.value;
    const search = searchFilter.value.toLowerCase();
    const salary = salaryFilter.value;

    const filtered = jobs.filter(job=>{
        const minSalery = parseInt(job.salary.split('-')[0]);

        return (location==''||job.location==location) && (salary=='' || minSalery>=salary)&&(job.title.toLowerCase().includes(search))

    })

    displayJobs(filtered);
}

locationFilter.addEventListener('change', filterJobs);
salaryFilter.addEventListener("input", filterJobs);
searchFilter.addEventListener("input", filterJobs);

displayJobs(jobs);