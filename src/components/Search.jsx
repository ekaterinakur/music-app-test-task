import React from 'react';

const Search = ({
	handleSearch
}) => <>
	<div className='search-container'>
		<input
			type='text'
			name='search'
			onChange={handleSearch}
		/>
		<span className='search-icon'></span>
	</div>
</>;

export default Search;
