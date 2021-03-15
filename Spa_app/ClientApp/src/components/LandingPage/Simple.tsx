import React, { Component } from 'react';
import {PreLoader} from './Preloader/PreLoader'
import {Header} from './Header/Header'
import Single_features from './Single_features'
import Single_Portfolio from './Single_Portfolio'
import Section from './Section/Section'
import  './assets/css/animate.css'
import  './assets/css/tiny-slider.css'
import  './assets/css/LineIcons.2.0.css'
import  './assets/css/bootstrap-5.0.5-alpha.min.css'
import  './assets/css/default.css'
import  './assets/css/style.css'
export class Simple extends Component {
  static displayName = Simple.name;
  state = { loading: true };
  sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };
  wait = async (milliseconds = 500) => {
    await this.sleep(milliseconds);
  }
  componentDidMount(){
      this.wait(500)
  }
  render () {
    const single_features =  [
      {
        id: 1,
        icon : 'lni-layers',
        title : 'Tung Ck',
        description : 'Đại ca đẹp trai'
      },
      {
        id: 2,
        icon : 'lni-layout',
        title : 'Trang NT 26',
        description : 'Tỉ tỉ xinh đẹp'
      },
      {
        id: 3,
        icon : 'lni-bolt',
        title : 'Long senpai',
        description : 'Tiểu đệ thông minh'
      }  
    ]
    const services =  [
      {
        id: 1,
        icon : 'lni-briefcase',
        title : 'Tung Ck',
        description : 'Đại ca đẹp trai'
      },
      {
        id: 2,
        icon : 'lni-clipboard',
        title : 'Trang NT 26',
        description : 'Tỉ tỉ xinh đẹp'
      },
      {
        id: 3,
        icon : 'lni-target-revenue',
        title : 'Long senpai',
        description : 'Tiểu đệ thông minh'
      },
      {
        id: 4,
        icon : 'lni-invention',
        title : 'Long senpai',
        description : 'Tiểu đệ thông minh'
      },
      {
        id: 5,
        icon : 'lni-bar-chart',
        title : 'Long senpai',
        description : 'Tiểu đệ thông minh'
      },
      {
        id: 6,
        icon : 'lni-calendar',
        title : 'Long senpai',
        description : 'Tiểu đệ thông minh'
      } 
    ]
    return (
      <div>
        <Header />
        <section id="features" className="features_area pt-120">
          <div className = "container">
          <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section_title text-center pb-25">
              <h4 className="title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Why Choose Us</h4>
              <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">Lorem ipsum dolor sit
                amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labor dolore.</p>
            </div> {/* section title */}
          </div>
        </div> {/* row */}
          <div className="row justify-content-center">
            {single_features.map((item,index) => 
              (<div className="col-lg-4 col-md-7" >
                <Single_features key ={index} test={item.id} mt = "mt-30" icon = {item.icon} title = {item.title}  description ={item.description}/>
                <p>{index}</p>
              </div>
              )
            )}
          </div>
        </div>
        </section>
        <section id="about" className="pt-130">
          <div className="about_area">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="about_content pt-120 pb-130">
                    <div className="section_title pb">
                      <h4 className="title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">About Our
                        Creative Proccess</h4>
                      <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">Lorem ipsum dolor
                        sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut
                        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et erebum</p>
                      <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.6s">Lorem ipsum dolor
                        sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore etdolore maali quyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores</p>
                    </div> {/* section title */}
                    <a href="#0" className="main-btn wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.7s">Learn More</a>
                  </div> {/* about content */}
                </div>
              </div> {/* row */}
            </div> {/* container */}
            <div className="about_image bg_cover wow fadeInLeft" data-wow-duration="1.3s" data-wow-delay="0.2s" style={{backgroundImage: 'url(images/about.jpg)'}}>
              <div className="image_content">
                <h4 className="experience"><span>5</span> Years of Experience</h4>
              </div>
            </div> {/* about image */}
          </div>
        </section>
        <section id="services" className="features_area pt-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section_title text-center pb-25">
                  <h4 className="title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Our Services</h4>
                  <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">Lorem ipsum dolor sit
                    amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labor dolore.</p>
                </div> {/* section title */}
              </div>
            </div> {/* row */}
            <div className="row">
            {services.map((item,index) => 
              (<div className="col-lg-4 col-md-6" >
                <Single_features key ={index}  mt = "mt-60" test={item.id} icon = {item.icon} title = {item.title}  description ={item.description}/>
                <p>{index}</p>
              </div>
              )
            )}
            </div> {/* row */}
          </div> {/* container */}
        </section>
        <section id="portfolio" className="portfolio_area pt-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section_title text-center pb-60">
                  <h4 className="title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.2s">Our Portfolio</h4>
                  <p className="wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.4s">Lorem ipsum dolor sit
                    amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt labor dolore.</p>
                </div> {/* section title */}
              </div>
            </div> {/* row */}
          </div> {/* container */}
          <div className="portfolio_wrapper d-flex flex-wrap">
            <Single_Portfolio image={'portfolio-1.jpg'} title = {'Logo And Branding'}/>
          </div> {/* row */}
        </section>
      </div>
    );
  }
}
