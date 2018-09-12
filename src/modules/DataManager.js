const remoteURL = "http://localhost:8088"

const getData = Object.create(null, {
    getUsers: {
        value: () => {
            return fetch(`${remoteURL}/users`)
                .then(res => res.json())
        }
    },
    getUser: {
        value: (loginUsername) => {
            return fetch(`${remoteURL}/users?username=${loginUsername}`)
                .then(res => res.json())
        }
    },
    getSongs: {
        value: () => {
            return fetch(`${remoteURL}/songs`)
        }
    }
})

const saveData = Object.create(null, {
    newUser: {
        value: (user) => {
            return fetch(`${remoteURL}/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
                .then(response => response.json())
        }
    },
    saveSong: {
        value: (song) => {
            return fetch(`${remoteURL}/songs`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(song)
            })
                .then(response => response.json())
        }
    }
}
)

export default { getData, saveData }