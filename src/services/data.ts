export async function fetchAPI(){
    try{
        const data =await fetch('https://swapi.dev/api/people/').then((res) => {
            return res.json();
        })
        return data.results;
    } catch(error) {
        console.log(error)
    }
}

console.log(fetchAPI());