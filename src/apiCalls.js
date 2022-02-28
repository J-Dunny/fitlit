//GET requests
const users = fetch('http://localhost:3001/api/v1/users').then(responses => responses.json())
const hydration = fetch('http://localhost:3001/api/v1/hydration').then(responses => responses.json())
const sleep = fetch('http://localhost:3001/api/v1/sleep').then(responses =>responses.json())
const activity = fetch('http://localhost:3001/api/v1/activity').then(responses =>responses.json())

// POST requests
const addSleep = (newSleep) => {
  fetch('http://localhost:3001/api/v1/sleep', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newSleep)
  })
  .then(response => {
    console.log(response)
    if(!response.ok) {
      throw new Error("Please make sure that all fields are filled out")
    } else {
      return response.json()
    }
  })
  .catch((error) => {
    console.log(error)
  if(error.message === "Failed to fetch"){
    return errorTag.innerText = "OOPS SORRY something went wrong"
  } else {
    return errorTag.innerText = error.message
  }
})
}

const addHydration = (newHydration) => {
  fetch('http://localhost:3001/api/v1/hydration', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newHydration)
  })
  .then(response => {
    console.log(response)
    if(!response.ok) {
      throw new Error("Please make sure that all fields are filled out")
    } else {
      return response.json()
    }
  })
  .catch((error) => {
    console.log(error)
  if(error.message === "Failed to fetch"){
    return errorTag.innerText = "OOPS SORRY something went wrong"
  } else {
    return errorTag.innerText = error.message
  }
})
}

export { users, hydration, sleep, activity, addSleep, addHydration}
