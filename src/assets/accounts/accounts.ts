
interface Post {
    url: string
    description?: string

}


interface Account {
    name: string
    lastName: string
    bio: string
    profileImage: string
    posts: Post[]

}

interface Accounts {
    [key: string]: Account
}


const accounts: Accounts = {
    accountOne: {
        name: "Alice",
        lastName: "Rossi",
        bio: "Amo viaggiare e fotografare",
        profileImage: "https://placecats.com/neo/300/200",
        posts: [
          { url: "https://placecats.com/g/300/200",description: "gatto pazzerello :P"},
          { url: "https://placecats.com/g/300/200"},
          { url: "https://placecats.com/g/300/200",description: "gatto pazzerello :P"},
          { url: "https://placecats.com/g/300/200"},
          { url: "https://placecats.com/g/300/200",description: "gatto pazzerello :P"},
        ],
    },
    accountTwo: {
        name: "Marco",
        lastName: "Bianchi",
        bio: "Programmatore e gamer nel tempo libero",
        profileImage: "https://placecats.com/neo/300/200",
        posts: [
            { url: "https://placecats.com/g/300/200",description: "gatto pazzerello :P"},
            { url: "https://placecats.com/g/300/200"},
            { url: "https://placecats.com/g/300/200",description: "gatto pazzerello :P"},
            { url: "https://placecats.com/g/300/200"},
            { url: "https://placecats.com/g/300/200",description: "gatto pazzerello :P"},
        ]
    },
    accountThree: {
        name: "Elena",
        lastName: "Verdi",
        bio: "Passione per la cucina e i libri",
        profileImage: "https://placecats.com/neo/300/200",
        posts: [
            { url: "https://placecats.com/g/300/200",description: "gatto pazzerello :P"},
            { url: "https://placecats.com/g/300/200"},
            { url: "https://placecats.com/g/300/200",description: "gatto pazzerello :P"},
            { url: "https://placecats.com/g/300/200"},
            { url: "https://placecats.com/g/300/200",description: "gatto pazzerello :P"},
        ],
    },

}

export default accounts;