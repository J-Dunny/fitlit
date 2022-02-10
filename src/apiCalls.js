const users = fetch('https://fitlit-api.herokuapp.com/api/v1/users').then(responses => responses.json())


export default users