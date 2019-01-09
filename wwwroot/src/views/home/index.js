import React from 'react';
import styles from './index.scss';
import Cookies from 'js-cookie';

import { getAll }  from '../../api/posts';

import Button from '../../components/button';
import NavBar from '../../components/navbar';
import { config } from '../../config';

// import { bgImg } from 'node-modules/daemonite-material'

function getPosts(){
  return GetAllPosts();
}
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log('Home extends React.Component: ', props);
    // this.getPosts = this.getPosts.bind(this);
  }
  componentDidMount(){
    if(config.user){
      console.log(config.user);
    }

    console.log(Cookies.get('token'));
    // document.
  }
  // getPosts(){
  //   GetAllPosts().then(r => console.log(r));
  //   //  console.log(GetAllPosts());
  // }
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
        { config.user ? (<h1>{config.user.useranme }</h1>) : null }
          <Button value="Balls" onClick={() => getAll().then(r => console.log(r)) }/>
        {/* <header className="masthead" style={{ backgroundImage: `url(${ bgImg })` }}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Clean Blog</h1>
                  <span className="subheading">A Blog Theme by Start Bootstrap</span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="about container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="post-preview">
                <a href="post.html">
                  <h2 className="post-title">
                    Man must explore, and this is exploration at its greatest
            </h2>
                  <h3 className="post-subtitle">
                    Problems look mighty small from 150 miles up
            </h3>
                </a>
                <p className="post-meta">Posted by
            <a href="#">Start Bootstrap</a>
                  on September 24, 2018</p>
              </div>
              <hr />
              <div className="post-preview">
                <a href="post.html">
                  <h2 className="post-title">
                    I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.
            </h2>
                </a>
                <p className="post-meta">Posted by
            <a href="#">Start Bootstrap</a>
                  on September 18, 2018</p>
              </div>
              <hr />
              <div className="post-preview">
                <a href="post.html">
                  <h2 className="post-title">
                    Science has not yet mastered prophecy
            </h2>
                  <h3 className="post-subtitle">
                    We predict too much for the next year and yet far too little for the next ten.
            </h3>
                </a>
                <p className="post-meta">Posted by
            <a href="#">Start Bootstrap</a>
                  on August 24, 2018</p>
              </div>
              <hr />
              <div className="post-preview">
                <a href="post.html">
                  <h2 className="post-title">
                    Failure is not an option
            </h2>
                  <h3 className="post-subtitle">
                    Many say exploration is part of our destiny, but it’s actually our duty to future generations.
            </h3>
                </a>
                <p className="post-meta">Posted by
            <a href="#">Start Bootstrap</a>
                  on July 8, 2018</p>
              </div>
              <hr />

              <div className="clearfix">
                <a className="btn btn-primary float-right" href="#">Older Posts →</a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      </div>
    );
  }
}
