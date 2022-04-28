import React from 'react';
import { API } from './variables';

let nameProfile;


const getNameProfile = () => {
    return nameProfile;
}

const setNameProfile = (name) => {
    nameProfile = name;
}

const getProfile = async () => {
    try {
        const response = await fetch(API.concat(getNameProfile()));
        

        if (!response.ok) {
            throw new Error(response.status);
        }

        const datos = await response.json();

        return datos;

    } catch (e) {
        return e;
    }
}

const loadProfile = () => {


    //header.classList.add('header--top');
    document.querySelector("main").style.display = "none";
    document.querySelector("main").style.display = "block";

    document.querySelector("main .content").style.display = "flex";
    document.querySelector("main .errorPage").style.display = "none";
    document.querySelector("main").classList.add("main--content");
    document.querySelector(".gitHubSearch").style.height = "auto";



    /* const   {name, login, avatar_url, followers, location, blog} = data;

    const   profileName         = document.getElementById("profileName"),
            imgAvatar           = document.getElementById("imgAvatar"),
            nickName            = document.getElementById("nickName"),
            followersProfile    = document.getElementById("followersProfile"),
            country             = document.getElementById("followersProfile"),
            webSite             = document.getElementById("webSite"),
            loader              = document.getElementById("loader");



 profileName.textContent = name;
    nickName.textContent = login;
    imgAvatar.src= avatar_url;
    followersProfile.textContent = followers;
    country.textContent = location;
    webSite.textContent = blog;
    webSite.href = blog 

    loader.style.display = "none";*/


}



function Profile({profile}) {
    return (

        <div className="profile">
            <div className="profile__img">
                <img id="imgAvatar" src={profile.avatar_url} alt="" width="200" height="210" />
            </div>
            <div className="profile__name">
                <h2 id="profileName">{profile.name}</h2>
                <span id="nickName" className="profile__nickname">
                    {profile.login}
                </span>
            </div>
            <div className="profile__features">
                <div className="features__item">
                    <i className="fas fa-globe features__icon"></i>
                    <a href={`${profile.html_url}`} id="webSite" className="features__name" target="_blank" rel="noreferrer noopener">Github profile</a>
                </div>
                <div className="features__item">
                    <i className="fas fa-map-marker-alt features__icon"></i>
                    <span id="country" className="features__name">{profile.location}</span>
                </div>


                <div className="features__item">
                    <i className="far fa-star features__icon"></i>
                    <span id="followersProfile" className="features__name">{profile.following}</span>
                </div>


                <div className="features__item">
                    <i className="fas fa-user-friends features__icon"></i>
                    <span className="features__name">{profile.followers}</span>
                </div>
            </div>

        </div>
    )
}

export default Profile;

export { getProfile ,setNameProfile, loadProfile, getNameProfile };