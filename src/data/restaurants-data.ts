import { Restaurant } from "../model/restaurant"

 class RestaurantData {
    getAll = (): Restaurant[] => {
        return [
            {
                id: 1,
                name: "Mc Donald",
                image: "https://www.mcdonalds.com/content/dam/sites/dk/nfl/app-promo/212188_Order_McD_950x720.jpg",
                city: "aarhus",
                price: 130,
                overAllRaring: 3,
                ratings: [{
                    category: "taste",
                    value: 3
                },
                {
                    category: "texture",
                    value: 4
                },
                {
                    category: "visualPresentation",
                    value: 2
                }]
            },
            {
                id: 2,
                name: "Burger imperiet",
                image: "https://burgerimperiet.dk/files/74/media/1910-top-10-bedste-burger-i-arhus-se-de-bedste-burgersteder-her.jpg",
                city: "aarhus",
                price: 100,
                overAllRaring: 4,
                ratings: [{
                    category: "taste",
                    value: 3
                },
                {
                    category: "texture",
                    value: 5
                },
                {
                    category: "visualPresentation",
                    value: 4
                }]
            },
            {
                id: 3,
                name: "Burger shark",
                image: "https://images.deliveryhero.io/image/fd-dk/LH/q4sw-listing.jpg",
                city: "aarhus",
                price: 90,
                overAllRaring: 5,
                ratings: [{
                    category: "taste",
                    value: 35
                },
                {
                    category: "texture",
                    value: 5
                },
                {
                    category: "visualPresentation",
                    value: 5
                }]
            },
            {
                id: 4,
                name: "Smagaarhus",
                image: "https://smagaarhus.dk/wp-content/uploads/2016/05/The-Burger-Shack-1-e1462735181980.jpg",
                city: "aarhus",
                price: 150,
                overAllRaring: 2,
                ratings: [{
                    category: "taste",
                    value: 1
                },
                {
                    category: "texture",
                    value: 2
                },
                {
                    category: "visualPresentation",
                    value: 3
                }]
            },
            {
                id: 5,
                name: "Burger hut",
                image: "https://images.deliveryhero.io/image/fd-dk/LH/q4sw-listing.jpg",
                city: "aarhus",
                price: 120,
                overAllRaring: 1,
                ratings: [{
                    category: "taste",
                    value: 1
                },
                {
                    category: "texture",
                    value: 1
                },
                {
                    category: "visualPresentation",
                    value: 1
                }]
            }

        ]
    }
}

export default new RestaurantData();