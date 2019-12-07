import React from "react";

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemText: "",
        };
    }

    changeHandler = event => {
        this.setState({ itemText: event.target.value });
    };

    submitHandler = event => {
        event.preventDefault();
        this.props.searchUser(this.state.itemText);
        this.setState({ itemText: "" });
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input
                    type="text"
                    name="itemText"    
                    value={this.state.itemText}
                    onChange={this.changeHandler}
                />
                <button type="submit">
                    Search
                </button>
            </form>
        );
    }
}

export default SearchForm;