import React from 'react';


const SearchInput = ({handleSubmit, handleChange}) => {


    return (
        <div className="header__search">
            <form className="search" id="searchForm" onSubmit={handleSubmit}>
                <input type="text" name="search" className="search__input" id="searchInput" onChange={handleChange} placeholder="Ingresa un usuario Github" required />
                <button className="search__button">
                    <i className="button__icon fas fa-search" />
                </button>
            </form>
        </div>
    )
}

export default SearchInput
