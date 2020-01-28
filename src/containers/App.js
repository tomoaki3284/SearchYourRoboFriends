import React from "react";
import CardList from "../components/CardList";
// import { robots } from "../Robots";
// why curly brackets? 
// Because it's export(not export default). Thay can have multiple exports
// In that case {robots, cats, etc}. It's multi exports, but Robots happens
// to return only one. So in this case {robots} is enough
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";


// props: parent have STATE >> child have PROPS
// props: never change, static
// state: can change
// able to use state, we need to create class extends React.Component
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ""
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(responseFromFetch=>{
            return responseFromFetch.json();
        })
        .then(jsonRobots=>{
            this.setState({ robots: jsonRobots });
        });
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return <p>Loading...</p>
        }
        else{
            return (
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;