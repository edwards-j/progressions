const remoteURL = "http://localhost:8088"

const getData = Object.create(null, {
    getUsers: {
        value: () => {
            return fetch(`${remoteURL}/songs`)
                .then(res => res.json())
        }
    },
    getAllKeys: {
        value: () => {
            return fetch(`${remoteURL}/keys`)
                .then(response => response.json())
        }
    },
    getKey: {
        value: (keyID) => {
            return fetch(`${remoteURL}/keys/${keyID}`)
                .then(response => response.json())
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