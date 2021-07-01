import React from 'react';
import 'components/search-box/search-box.styles.css';

interface Search {
    placeholder: string;
    handleChange: any;
}

const SearchBox: React.FC<Search> = (props: Search) => {
    const {
        placeholder,
        handleChange
    } = props
    return(
        <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
        />
    )
}

export default SearchBox;