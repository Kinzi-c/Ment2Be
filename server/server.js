async function getProfileAPI(request) {
  let mentorProfileIds = ['suella-lee', 'aprilchen64', 'abdullah-raza']
  let modifiedProfileData = {
    profile_id: 'suella-lee',
    skills: [],
    first_name: '',
    last_name: '',
    profile_picture: '',
    email: 'aishuih@fake.com', //manually added field, doesnt exist in response json from axios
    job_title: '', //add field manually, randomly choose between "Manager", "Backend Engineer", "Frontend Developer"
  }

  //save responses to this array
  let responses = [{}]

  //disable if multiple requests are being made.
  for (let ix = 0; ix < 3; ix++) {
    request.data.profile_id = mentorProfileIds[ix]
    //enable this axios request AFTER the array was edited
    const response = await axios.request(request)

    console.log(response.data)

    //copy profile_id
    modifiedProfileData.profile_id = response.data.profile_id

    console.log(
      '\n' + modifiedProfileData.profile_id + ' ' + response.data.profile_id
    )

    //copy first_name
    modifiedProfileData.first_name = response.data.first_name

    //copy last_name
    modifiedProfileData.last_name = response.data.last_name

    //copy skills array
    modifiedProfileData.skills = response.data.skills

    //copy profile_picture
    modifiedProfileData.profile_picture = response.data.profile_picture

    //add email
    modifiedProfileData.email =
      (Math.random() + 1).toString(36).substring(7) + 'email.com'

    //add job_title
    modifiedProfileData.job_title = getFakeJobTitle()

    //push into array
    responses.push(modifiedProfileData)
  }

  console.log(responses)
}

function getFakeJobTitle() {
  let fakeJobTitles = [
    'Frontend Engineer',
    'Backend Engineer',
    'Embedded Software Engineer',
    'Product Owner',
    'Solutions Architect',
    'Platform Engineer',
  ]
  return fakeJobTitles[Math.floor(Math.random() * fakeJobTitles.length)]
}

const express = require('express')
const app = express()
const PORT = 3000

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' })
})

app.listen(PORT, () => {
  console.log('Server running on ' + PORT)
})

// https://rapidapi.com/iscraper/api/linkedin-profiles-and-company-data
// uses left: 83
// free uses: 100
const axios = require('axios')

//this is the request body, with params and headers
const options = {
  method: 'POST',
  url: 'https://linkedin-profiles-and-company-data.p.rapidapi.com/profile-details',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '280518eab0mshf1330f54c6e7ae7p1a31afjsn21142d6947f9',
    'X-RapidAPI-Host': 'linkedin-profiles-and-company-data.p.rapidapi.com',
  },
  data: {
    profile_id: 'suella-lee',
    profile_type: 'personal',
    contact_info: false,
    recommendations: false,
    related_profiles: false,
  },
}

//this function will make those requests for us
getProfileAPI(options)
