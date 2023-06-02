import React, {Component} from "react";
import { Films } from "../Share/ListOfFilms";
import Film from "./Films";
export class Main extends Component{

    constructor(){
        super();
        this.state = {
            film: Films
        };
    }
    render() {
        return <Film film={this.state.film}/>
    }
}
export default Main