import React from 'react';
import PropTypes from 'prop-types'
import { API } from './variables';
import { getNameProfile } from './profile';



const getRepos = async () => {
    const response = await fetch(API.concat(getNameProfile()).concat("/repos"));
    try {
        if (!response.ok) {
            throw new Error(response.status);
        }
        const datos = await response.json();
        return datos;

    } catch (e) {
        return e;
    }
}

const loadRepos = (data) => {

    let repositories = document.getElementById("repositories");

    repositories.innerHTML = "";

    try {
        for (let d of data) {


            let div = document.createElement("div");

            const { html_url, name, description, size } = d;


            div.classList.add("repositories__item");

            div.innerHTML = `
                <a href="${html_url}" target="_blank">
                    <h2 class="repositories__name">${name}</h2>
                </a> 
                <p class="repositories__description">${description}</p>
                <div class="repositories__stars">
                    <i class="far fa-star"></i>
                    <span class="number">${size}</span>  
                </div>`;
            repositories.appendChild(div);
        }
    } catch (e) {
        console.log(new Error(e));

    }


}


function Repos({ repos }) {
        return (
            <div id="repositories" className="repositories">
                {repos.map(repo =>
                    <div className='repositories__item' key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noreferrer noopener">
                            <h2 className="repositories__name">{repo.name}</h2>
                        </a>
                        <p className="repositories__description">{repo.description}</p>
                        <div className="repositories__stars">
                            <i className="far fa-star"></i>
                            <span className="number">{repo.stargazers_count}</span>
                        </div>
                    </div>

                )}
            </div>
        )
}


Repos.propTypes = {
    repos : PropTypes.array.isRequired  
}

Repos.defaultProps = {
    repos : [{
        name : "Alvaro",
        id: "1",
        html_url: "www.alvaro.com",
        description: "Hola, soy álvaro",
        stargazers_count: "1"
    }]
}



export default Repos;

export { getRepos, loadRepos };