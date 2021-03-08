import { fetch } from "./API";


export async function getLatestQuestions(tag) {
    // https://api.stackexchange.com/2.2/questions?order=desc&sort=creation&site=stackoverflow&tagged=java
    let endpoint = 'question';
    fetch(endpoint, endpoint);
    fetch(endpoint);

}
