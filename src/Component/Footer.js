import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import "../Styles/footer.css"
import logo from '../Assert/BlueVenus.png';

export default function App() {
  return (
    <MDBFooter class="footer" className='text-center text-lg-start text-muted bg-opacity-95'>
      <section className='section1'>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-5'>
            <div class="logo" className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='mb-4'>
                <img src={logo} alt="logo"/>
              </h6>
              <p class="comdes">
              The best NFT marketplace website in <br/> the world and feel your experience in <br/> selling or buy our work
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6>About</h6>
              <p class="comdes">
                <a href='#!' className='text-reset'>
                  Product
                </a>
              </p>
              <p class="comdes">
                <a href='#!' className='text-reset'>
                  Resource
                </a>
              </p>
              <p class="comdes">
                <a href='#!' className='text-reset'>
                  Term & Condition
                </a>
              </p>
              <p class="comdes">
                <a href='#!' className='text-reset'>
                  FAQ
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6>Company</h6>
              <p class="comdes">
                <a href='#!' className='text-reset'>
                Our Team
                </a>
              </p>
              <p class="comdes">
                <a href='#!' className='text-reset'>
                Partner with Us
                </a>
              </p>
              <p class="comdes">
                <a href='#!' className='text-reset'>
                Privacy & Policy
                </a>
              </p>
              <p class="comdes">
                <a href='#!' className='text-reset'>
                  Features
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6>Contact</h6>
              <p class="comdes">
                <i className='fas fa-home me-3'></i>+94 777 387 643
              </p>
              <p class="comdes">
                <i className='fas fa-envelope me-3'></i>
                dasun@nirvanaclouds.com
              </p>
              <div class="icon">
                <a href="" class="me-5 text-reset">
                    <i class="fab fa-youtube"></i>
                </a>
                <a href="" class="me-5 text-reset">
                    <i class="fab fa-discord"></i>
                </a>
                <a href="" class="me-5 text-reset">
                    <i class="fab fa-instagram"></i>
                </a>
                </div>
            </div>
          </div>
        </div>
      </section>

      <div class="copyright">   
      <div className='text-center p-4'>
      Created by &nbsp;  
      <span class="link">
        <a className='text-reset fw-bold' href='https://nirvanaclouds.com/'>
         NirvanaClouds
        </a>
        </span>
            &nbsp;| All Right Reserved!
        </div>
        </div> 
    </MDBFooter>
  );
}