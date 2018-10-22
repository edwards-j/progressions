const remoteURL = "https://progressions-server.herokuapp.com"

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
    getUserSongs: {
        value: (userID) => {
            return fetch(`${remoteURL}/songs?userId=${userID}`)
                .then(res => res.json())
        }
    },
    getPublicSongs: {
        value: () => {
            return fetch(`${remoteURL}/songs?public=true`)
                .then(res => res.json())
        }
    },
    getRandomLyrics: {
        value: () => {
            return fetch(`${remoteURL}/lyrics`)
                .then(res => res.json())
        }
    },
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

const deleteData = Object.create(null, {
    deleteSong: {
        value: function (songID) {
            return fetch(`${remoteURL}/songs/${songID}`, {
                method: "DELETE"
            })
                .then(e => e.json())
        }
    }
}
)

const editData = Object.create(null, {
    editSong: {
        value: function (songID, updatedSong) {
            return fetch(`${remoteURL}/songs/${songID}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedSong)
            })
                .then(e => e.json())
        }
    }
}
)

export default { getData, saveData, deleteData, editData }