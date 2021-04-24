document.addEventListener("DOMContentLoaded", () => {
    fetchRicks()
});

const fetchRicks = () => {
    fetch("https://rickandmortyapi.com/api/character/?name=rick")
    .then(res => res.json())
    .then(data => renderRicks(data.results));


};

const renderRicks = (ricks) => {
    //name,status,location (ricks.name),image
    // array of objects, create an individual event for each of them
    const container = document.querySelector(".container");
    ricks.map(rick =>{
        const div = document.createElement("div");
        div.innerHTML = `
        <img src = "${rick.image}"/>
        <h3>${rick.name}</h3>
        <p>Location : ${rick.location.name}</p>
        <p> Status: ${rick.status}</p>
        
        `;
        container.append(div);

    });
};