const users = fetch('http://localhost:3001/api/v1/users').then(responses => responses.json())
const hydration = fetch('http://localhost:3001/api/v1/hydration').then(responses => responses.json())
const sleep = fetch('http://localhost:3001/api/v1/sleep').then(responses =>responses.json())
const activity = fetch('http://localhost:3001/api/v1/activity').then(responses =>responses.json())
export { users, hydration, sleep, activity }
