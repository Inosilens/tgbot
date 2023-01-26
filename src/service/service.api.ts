export class ServiceApi {
    constructor() {
    }

    static async getRandomDog() {
        return fetch("https://random.dog/woof.json"
        )
            .then(res => res.json())
            .then(response => response.url)

    }

    static async getRandomCat() {
        return fetch("https://aws.random.cat/meow"
        )
            .then(res => res.json())
            .then(response => response.file)
    }
}