export async function fetch(endpoint, queryParams) {
    // let url = 'https://api.stackexchange.com/2.2/answers?order=desc&sort=activity&site=stackoverflow';
    let url = 'http://localhost:8000/items';
    fetch("http://localhost:8000/items")
    .then(res => res.json())
    .then((data) => {
      console.log(data);
    })
 
    console.log("Fetch called: ", url+endpoint);
    
}



