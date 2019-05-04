import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from './container/Header/Header';
import Content from './container/Content/Content';

import {
  setKeyword,
  search,
  getCurrentHeadline,
} from './actions/search';

class App extends Component {
  componentDidMount() {
    this.props.getCurrentHeadline();
  }
  
  render() {
    const {keyword, prevKeyword, articles, isShowProgress} = this.props;
    
    return (
      <div>
        <div>
          <Header 
            keyword={keyword}
            setKeyword={this.props.setKeyword}
            search={this.props.search}
          />
        </div>
        <div>
          <Content
            articles={articles}
            isShowProgress={isShowProgress}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  keyword: state.search.get('keyword'),
  prevKeyword: state.search.get('prevKeyword'),
  articles: state.search.get('articles'),
  isShowProgress: state.search.get('isShowProgress'),
});

const mapDispatchToProps = {
  setKeyword,
  search,
  getCurrentHeadline,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
