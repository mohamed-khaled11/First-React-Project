import React,{Component}  from "react";
import File from './File'

// function component 
// Properties of function components
// 1: easiar than class components 
// 2: but don't have many properties like class component
// function App(){
//     return(
//         <div>
//            <h1>Test</h1>
//         </div>
//     );
// }

//class component
// have many properties more than function component


class App extends Component{
    constructor(){
        super()
        this.state ={
            answer:'yes'
        }
    }
    render(){
        return(
            <div>
                <File name='Mohamed' name2='Khaled'></File>
                <File name='Elsayed' name2='Mohamed'></File>
                <File name='Ali' name2='Ismail'></File>
                <h1>Do you love my? {this.state.answer}</h1>
            </div>
        );
    }
}

export default App;