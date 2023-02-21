async function search(link) {
    let out = []
    response = fetch(`https://en.wikipedia.org/w/api.php?action=parse&page=${link}&format=json&origin=*`)
        .then((response) => response.json())
        .then((data) => {
            data.parse.links.forEach(link => {
                out.push(link['*'])
            });
            output = out
            return output
        });
}