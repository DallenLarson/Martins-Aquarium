/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            name: "Bart",
            food: "crustaceans",
            size: 3,
            type: "Tuna",
            location: "New Zealand",
            color: "blue",
            alive: true
            
        },
        {
            name: "Dallen Jr",
            food: "candy rocks",
            size: 4,
            type: "Goldfish", 
            location: "The Dallen Room",
            color: "green",
            alive: false
        },
        {
            name: "Aurdrey",
            food: "human blood",
            size: 1,
            type: "Blobfish",
            location: "Plant Shop",
            color: "lime green",
            alive: true
        },
        {
            name: "Terry Fish",
            food: "Fish Food",
            size: 8,
            type: "Guppy",
            location: "South Town",
            color: "red",
            alive: false
        },
        {
            name: "Sephiroth",
            food: "cloud",
            size: 9,
            type: "Stingray",
            location: "Sector 7",
            color: "black",
            alive: true
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}