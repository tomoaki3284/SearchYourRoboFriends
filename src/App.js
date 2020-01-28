import React from "react";
import CardList from "./CardList";
import { robots } from "./Robots";
// why curly brackets? 
// Because it's export(not export default). Thay can have multiple exports
// In that case {robots, cats, etc}. It's multi exports, but Robots happens
// to return only one. So in this case {robots} is enough
import SearchBox from "./SearchBox";
import "./App.css";



// props: parent have STATE >> child have PROPS
// props: never change, static
// state: can change
// able to use state, we need to create class extends React.Component
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ""
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;