const users = fetch('https://fitlit-api.herokuapp.com/api/v1/users').then(responses => responses.json())
const hydration = fetch('https://fitlit-api.herokuapp.com/api/v1/hydration').then(responses => responses.json())

export default users  
export default hydration
