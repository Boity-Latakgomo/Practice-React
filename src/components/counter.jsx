import React, { Component } from 'react';

 class Counter extends Component {

    state = {
        count: 0
       
    };
    
    handleIncrement = () => {
        console.log("test");
        this.setState({count: this.state.count + 1})
    };
   
    render() { 
        
        console.log("test");
        return(
        <div>
             <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
             <button 
             onClick={this.handleIncrement}
             className="btn btn-secondary btn-sm">
                 Increment
                 </button>
             
        </div>
        );
        
    }
     getBadgeClasses() {
         let classes = "badge m-3 badge-";
         classes += this.state.count === 0 ? "warning" : "primary";
         return classes;
     }

    formatCount(){ 
        const {count} = this.state;
        return count === 0 ? "zero" : count;
    }
}

 export default Counter;
