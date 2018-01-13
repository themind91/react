import ReactDOM from 'react-dom';
import _ from 'lodash'
import React,{Component} from 'react';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
const youtubeAPIKey = "you need to get an API KEY";
// create a new component it should produce some html



class App extends Component{
    // creating a state
    constructor(props){
        super(props);
        this.state = {videos: [], selectVideo: null};

        this.videoSearch('messi');

    }

    videoSearch(term){
        YTSearch({key:youtubeAPIKey,term:term},(data) =>{
            
            this.setState({
                videos:data,
                selectVideo: data[0]})           
            });
    }

    render(){
        // it measures how much time a function can be called
        const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300);


        return (<div>
                <SearchBar 
                 onSearchTermChange={videoSearch}
                /> 
                <VideoDetail video={this.state.selectVideo}/>
                <VideoList 
                    onVideoSelect={selectVideo => this.setState({selectVideo})}
                    videos={this.state.videos} />
                
              </div>); 
    }
}

//const App = () => {  return }

ReactDOM.render(<App />, document.querySelector('.container'));
//ReactDOM.render(React);

// try to put it in the dom somehow