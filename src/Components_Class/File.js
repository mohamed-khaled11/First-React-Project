import React ,{Component} from "react";

// Using Props in class component
// properties of props :: we cant change it after write it in any where
class File extends Component{
    method(name2){
        return(
            <span>{name2}</span>
        )
    }
    render(){
        // const name = 'mohamed'
        // const name2 = this.method('Khaled')
        return(
            <div>
                <h1>{this.props.name} {this.props.name2}</h1>
            </div>
        )
    }
}

export default File