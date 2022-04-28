import { useState } from 'react';
import { getProfile, setNameProfile } from '../components/profile'
import { getRepos } from '../components/repos'


const load = () => {

    const header = document.getElementById("header");

    header.classList.add('header--top');
    document.querySelector("main").style.display = "none";
    document.querySelector("main").style.display = "block";

    document.querySelector("main .content").style.display = "flex";
    //document.querySelector("main .errorPage").style.display = "none";
    document.querySelector("main").classList.add("main--content");
    document.querySelector(".gitHubSearch").style.height = "auto";
}

export const useForm = () => {


    const [form, setForm] = useState("");
    const [errors, setErrors] = useState({});
    const [response, setResponse] = useState([]);



    const handleChange = (e) => {
        setForm(e.target.value);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        e.target.value = "";
        setNameProfile(form);
        load();
        const responseProfile = await getProfile();
        const responseRepos = await getRepos();

        if (responseProfile instanceof Error || responseRepos instanceof Error) {
            if (responseProfile instanceof Error) setErrors([responseProfile]);
            if (responseRepos instanceof Error) setErrors([responseRepos]);
            setResponse([]);
        } else {
            setErrors({});
            setResponse([responseProfile, responseRepos]);
        }

    }

    return {
        form,
        setErrors,
        errors,
        setResponse,
        response,
        handleChange,
        handleSubmit
    }
}

