import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState('');

	const handleOnChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (inputValue.trim().length > 2) {
			setCategories((arr) => [inputValue, ...arr]);
			setInputValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={inputValue} onChange={handleOnChange} />
		</form>
	);
};

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired
};

export default AddCategory;
