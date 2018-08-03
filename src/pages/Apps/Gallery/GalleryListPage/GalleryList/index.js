import React from 'react'
import { Upload, message, Button, Icon, Carousel } from 'antd'
import './style.scss'
import data from './data.json'

class GalleryList extends React.Component {
  state = {}

  componentWillMount() {
    this.setState({})
  }

  render() {
    return (
      <div>
        <section className="card" style={{ height: 300 }}>
          <div className="card-header">
            <div className="utils__title">
              <strong>Top Articles</strong>
            </div>
          </div>
          <div className="card-body" style={{ backgroundColor: "#364d79" }}>
            <Carousel autoplay>
              <div style={{ backgroundImage: null }}>
                <h3>1</h3>
              </div>
              <div style={{ backgroundImage: null }}>
                <h3>2</h3>
              </div>
              <div style={{ backgroundImage: null }}>
                <h3>3</h3>
              </div>
              <div style={{ backgroundImage: null }}>
                <h3>4</h3>
              </div>
            </Carousel>
          </div>
        </section>
        <section className="card" style={{ height: 300 }}>
          <div className="card-header">
            <div className="utils__title">
              <strong>Top Articles</strong>
            </div>
          </div>
          <div className="card-body" style={{ backgroundColor: "#364d79" }}>
            <Carousel autoplay >
              <div>
                <div >
          
                 </div>
                </div>
          
              <div >
                <h3>2</h3>
              </div>
              <div style={{ backgroundImage: null }}>
                <h3>3</h3>
              </div>
              <div style={{ backgroundImage: null }}>
                <h3>4</h3>
              </div>
            </Carousel>
          </div>
        </section>
        <section className="card" style={{ height: 300 }}>
          <div className="card-header">
            <div className="utils__title">
              <strong>Top Articles</strong>
            </div>
          </div>
          <div className="card-body" style={{ backgroundColor: "#364d79" }}>
            <Carousel autoplay>
              <div style={{ backgroundImage: null }}>
                <h3>1</h3>
              </div>
              <div style={{ backgroundImage: null }}>
                <h3>2</h3>
              </div>
              <div style={{ backgroundImage: null }}>
                <h3>3</h3>
              </div>
              <div style={{ backgroundImage: null }}>
                <h3>4</h3>
              </div>
            </Carousel>
          </div>
        </section>
      </div>
    )
  }
}

export default GalleryList
