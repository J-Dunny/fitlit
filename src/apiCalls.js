const users = fetch('http://localhost:3001/api/v1/users').then(responses => responses.json())
const hydration = fetch('https://fitlit-api.herokuapp.com/api/v1/hydration').then(responses => responses.json())
const sleep = fetch('https://fitlit-api.herokuapp.com/api/v1/sleep').then(responses =>responses.json())
export { users, hydration, sleep }
