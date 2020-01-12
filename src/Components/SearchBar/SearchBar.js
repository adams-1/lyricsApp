import React from 'react';

class SearchBar extends React.Component {

    //constructor() {
    //    super();
    //}

    onTextChange(event)
    {
        console.log(event.target.value);
    }

    render() {
        return (
            <div>
                Song Name: <input type="text" onChange= { this.onTextChange }/>
            </div>
        );
        
    }
}

export default SearchBar;