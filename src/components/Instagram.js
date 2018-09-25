import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';


class Instagram extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    var th = this;
    this.serverRequest = 
      axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=16326964.1677ed0.02481cd88c5346f0a95d02058586bf82')
        .then(function(result) {    

          console.log('result: ', result);

          th.setState({
            data: result.data.data
          });
        })
  }

  render() {
    return (
      <section id="Instagram" className="Instagram">
        <div className="Instagram-container">
          <h3>do it for the gram</h3>
          <div className="Instagram-all">
            {this.state.data.length > 0 &&
              this.state.data.slice(0, 9).map((gram) => {
                return (
                  <div className="Instagram-single" key={gram.id}>
                    <a href={gram.link} target="_blank">
                      
                      {gram.videos &&

                        <video controls="" loop muted autoplay="" name="media"><source src={gram.videos.low_resolution.url} type="video/mp4"/></video>
                      }
                      {!gram.videos &&
                        <img src={gram.images.low_resolution.url}/>
                      }

                      <div className="Instagram-overlay gradient-opacity"></div>
                      
                    </a>
                  </div>
                 
                )
              })

            }
          </div>
        </div>
        
      </section>
    );
  }
}

export default Instagram;