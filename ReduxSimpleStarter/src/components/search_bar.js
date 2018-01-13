import React,{Component} from 'react';

class SearchBar extends Component {
    // defining state only in class base component
    constructor(props){
        super(props);

        this.state = {term: 'Type your name'};
    }

    render(){
        // updating the state of this component
        return (
                <div className="search-bar">
                    <input 
                        // controlled components concept
                        value={this.state.term}
                        onChange={(event) => this.onInputChange(event.target.value)} />
                     
                </div>
            );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }


}

// function aproach
/**const SearchBar = () =>{
    return <input />;
}**/

// make this component visible to other files
export default SearchBar;