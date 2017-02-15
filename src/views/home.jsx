
import React, { Component, PropTypes } from 'react';
import { Card, Table, Square, List } from '../components';
import { bodyData, listData } from '../constants';

class HomeView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clickedSquare: 0,
      isDetail: false,
    };
  }

  onSquareClick = (id) => {
    const { clickedSquare } = this.state;
    if (clickedSquare) {
      this.setState({clickedSquare: 0});
    } else {
      this.setState({clickedSquare: id});
    }
  }

  onMenuClick = (id) => {

  }

  onListClick = (item) => {
    this.setState({isDetail: true, blog: item.title, blogDetail: item.detail});
  }

  onBlogClick = () => {
    const { blog } = this.state;
    let url = '';
    if(blog === 'React tutorial') {
      url = 'https://zhuanlan.zhihu.com/c_68601936';
    } else if(blog === 'Life manual') {
      url = 'https://zhuanlan.zhihu.com/c_68982266';
    }
    window.open(url,'_blank');
  }

  onGithubClick = (id) => {
    const { blog } = this.state;
    let url = 'https://github.com/liuweinan0575';
    if(id === 'react') {
      url = `${url}/React-Tutorial`;
    } else if(id === 'javaPoi') {
      url = `${url}/Excelist`;
    } else if(id === 'mine') {
      url = `${url}/mine`;
    } else if(id === 'others') {
      // url = url;
    } 
    window.open(url,'_blank');
  }

  // <Table body={bodyData} />
  render() {
    const { clickedSquare, isDetail, blog, blogDetail } = this.state;
    return (
      <div className="mdl-grid">
        <Card>
            <div className="mdl-card__title mdl-card--expand" style={{background:
            'url("images/dog.png") bottom right 15% no-repeat #46B6AC'}}>
            </div>
            <div style={{height: 300}}>
              <div className="mdl-card__supporting-text" style={{marginTop: 20, lineHeight: '28px', fontSize: '1.5rem', width: '70%', padding: '0px 0px 0px 20px', color: 'black'}}>
                {!isDetail ? 'My Blog in Zhihu' : blog}
              </div>
              { !isDetail ? <List data={listData} onClick={this.onListClick} /> :
              <div style={{overflowX: 'hidden', paddingTop: 0, marginTop: 0}}>
                <div className="mdl-card__supporting-text">
                  <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                    <i className="material-icons" title="go to Zhihu" onClick={this.onBlogClick} >cloud_upload</i>
                  </button>
                  <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" onClick={()=>this.setState({isDetail: false})}>
                    <i className="material-icons" title="back">undo</i>
                  </button>
                </div>
                <div className="mdl-card__supporting-text">
                  {blogDetail.map((dt)=>[<br />, <span>{dt}</span>])}
                </div>
              </div>}
            </div>
            <div className="mdl-card__menu">
              <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                <i className="material-icons md-24">language</i>
              </button>
            </div>
        </Card>

        <Card>
            <div className="mdl-card__supporting-text">
            </div>
            <div className="mdl-card__supporting-text" style={{marginTop: 15,fontSize: '0.7rem'}} >
              <i className="material-icons" style={{fontSize: '0.7rem'}}>mood</i>
              &nbsp;NICE TO MEET YOU
            </div>
            <div className="mdl-card__supporting-text" style={{marginTop: -10, marginBottom: -10, lineHeight: '28px', fontSize: '1.5rem', width: '70%', padding: '0px 0px 0px 20px', color: 'black'}}>
              A Brief Introduce of Weinan Liu
            </div>
            <div className="mdl-card__supporting-text" style={{fontSize: '0.7rem'}} >
              Click a Square to See the Detail&nbsp;&nbsp;<i className="material-icons" style={{fontSize: '0.7rem'}}>get_app</i>
            </div>

            <div style={{bottom: 0, position: 'absolute', width: '100%'}}>
              <Square width={clickedSquare===1?'100%':(!clickedSquare?"50%":'0%')} backgroundColor='#FFCDD2' onClick={()=>this.onSquareClick(1)}><div style={{textAlign: 'center', paddingTop: '40%'}}>Basic info</div></Square>
              <Square width={clickedSquare===2?'100%':(!clickedSquare?"50%":'0%')} backgroundColor="#BBDEFB" onClick={()=>this.onSquareClick(2)}><div style={{textAlign: 'center', paddingTop: '40%'}}>Education</div></Square>
              <Square width={clickedSquare===3?'100%':(!clickedSquare?"50%":'0%')} backgroundColor='#F0F4C3' onClick={()=>this.onSquareClick(3)}><div style={{textAlign: 'center', paddingTop: '40%'}}>Experience</div></Square>
              <Square width={clickedSquare===4?'100%':(!clickedSquare?"50%":'0%')} backgroundColor='#FFF9C4' onClick={()=>this.onSquareClick(4)}><div style={{textAlign: 'center', paddingTop: '40%'}}>Honor</div></Square>
            </div>
            <div className="mdl-card__menu">
              <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                <i className="material-icons md-24 md-inactive" style={{color: '#e0e0e0'}}>reorder</i>
              </button>
            </div>
        </Card>

        <Card >
          <div className="mdl-card__supporting-text">
          </div>
          <div className="mdl-card__supporting-text" style={{marginTop: 15,fontSize: '0.7rem'}} >
          </div>
          <div className="mdl-card__supporting-text" style={{marginTop: -10, marginBottom: -10, lineHeight: '28px', fontSize: '1.5rem', padding: '0px 0px 0px 20px', color: 'black'}}>
            My Secret in github
          </div>
          <div className="mdl-card__supporting-text" style={{marginTop: 15, marginBottom: -10, fontSize: '0.7rem'}} >
            <span>I have some very little projects in github. You can find the detail by clicking a square.</span>
            <br />
            <span>There are two repositories for the posts in my blog.</span>
          </div>
          <div className="mdl-card__supporting-text" style={{fontSize: '0.7rem'}} >
            <Square width="45%" backgroundImage='images/react.png' style={{marginRight: '8%'}} onClick={()=>{this.onGithubClick('react')}}></Square>
            <Square width="45%" backgroundColor='#BBDEFB' onClick={()=>{this.onGithubClick('javaPoi')}}><div style={{textAlign: 'center', paddingTop: '40%'}}>Java & POI</div></Square>
          </div>
          <div className="mdl-card__supporting-text" style={{marginTop: -10, marginBottom: -10, fontSize: '0.7rem'}} >
            <span>Also, you can find the repository for this page and the ones for other projects</span>
          </div>
          <div className="mdl-card__supporting-text" style={{fontSize: '0.7rem'}} >
            <Square width="45%" backgroundColor='#F0F4C3' style={{marginRight: '8%'}} onClick={()=>{this.onGithubClick('mine')}}><div style={{textAlign: 'center', paddingTop: '40%'}}>Mine</div></Square>
            <Square width="45%" backgroundImage='images/github.png' onClick={()=>{this.onGithubClick('others')}}></Square>
          </div>
          <div className="mdl-card__menu">
            <i className="material-icons md-24 md-inactive" style={{color: '#e0e0e0'}}>reorder</i>
          </div>
        </Card>
      </div>
    );
  }


}

export default HomeView;
