// render a list of books
import React, {Component} from 'react';
import {connect} from 'react-redux'; // connect react and redux
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux'; 
class BookList extends Component{
    renderList(){
        return this.props.books.map((book)=>{
            return <li 
                    key={book.title} 
                    onClick={()=>this.props.selectBook(book)}
                    className="list-group-item">
                        
                        {book.title}
                   </li>
        });
    }
    render(){

        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}


            </ul>
        )
    }
}

function mapStateToProps(state){
    // will shows up as props

    return{
        books:state.books
    };

}


function mapDispatchToProps(dispatch){

    // passing results to all of our reducers
    return bindActionCreators({selectBook:selectBook},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);