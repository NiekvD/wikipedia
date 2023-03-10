async function getLinks(link, i) {
    i++
    let out = []
    let response = await fetch(`https://en.wikipedia.org/w/api.php?action=parse&page=${link}&format=json&origin=*`)
    let data = await response.json();
    data.parse.links.forEach(link => {
        out.push(link['*'])
    });
    // console.log(out, i)
    return out
}

async function doubleTrouble() {
    let links = await getLinks('pet-door', 0)
    for (i = 0; i < links.length; i++) {
        const link = links[i]
        const output = await getLinks(link, 1)
        console.log(output)
    }
}