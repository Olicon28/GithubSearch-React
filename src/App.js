import React, { useEffect, useState, Suspense, lazy } from 'react';
//import Profile from './components/profile';
import Repos from './components/repos';
import ErrorPage from './components/errorPage'
import SearchInput from './components/SearchInput';
import { useForm } from './hook/useForm'
import Loader from './components/loader';
import './sass/index.scss';
const Profile = lazy(() => import('./components/profile'));


let error = "";
var i = 0;

function App() {
    const [loading, setLoading] = useState(false);
    const { setErrors, errors, setResponse, response, handleChange, handleSubmit } = useForm();

    const [content, setContent] = useState(false);
    const [profile, setProfile] = useState({});
    const [repos, setRepos] = useState({});

    useEffect(async () => {
                

        if (response.length !== 0) {           

            const [userProfile, userRepos] = response;
            setLoading(true);
            setContent(true)
            setProfile(userProfile);
            setRepos(userRepos);
            setLoading(false);

        } else if (Object.keys(errors).length !== 0) {

            [error] = errors;
            setContent(true);

        }

        return () => {
            setResponse([])
            setErrors({})
        }

    }, [response, errors]);


    return (
        <div className="gitHubSearch container">
            <header id="header" className="header">
                <div className="header__logo">
                    <h1>GitHub <span>Search</span></h1>
                </div>
                <SearchInput handleSubmit={handleSubmit} handleChange={handleChange} />
            </header>
            <main id="main">
                <div className="content">
                    {console.log("response: ",response)}
                    {console.log("error: ", error)}
                    {console.log("indice", i++)}
                    {(content && (Object.keys(errors).length === 0))
                        &&
                        <Suspense fallback={<Loader />}>
                            <>
                                <Profile profile={profile} />
                                <Repos repos={repos} />
                            </>
                        </Suspense>
                    }
                    {(Object.keys(errors).length !== 0 && content) 
                        && <ErrorPage error={error} />}
                </div>
            </main>
        </div>
    );
}

export default App;
