
export class AnekdotApi {
    constructor() {
    }

    get(){
        return fetch("http://www.RzhuNeMogu.ru/Widzh/WidzhRNM.aspx?type=1").then((res)=>res.json())
    }

    static async getAnekdot() {
        return fetch("https://random.dog/woof.json"
        )
            .then(res=> res.json())
            .then(response => response.url)

    }

    static  async getCat (){
        return fetch("https://random.dog/woof.json"
        )
            .then(res=> res.json())
            .then(response => response.url)
    }
}