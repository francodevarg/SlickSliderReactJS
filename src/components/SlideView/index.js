import React, { Component } from "react";
import styled from 'styled-components';
import Slider from "react-slick";


//Dos etiquetas para configurar el slider
//Wrapper 
const Wrapper = styled.div`width:100%;
                           padding:10px;`;
//Page
const Page = styled.div`width:100%`;


class SlideView extends Component {
  
  
  render() {
    
    //Settings del slider
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1    };

  return (
      
      <div>
        <Wrapper>
          <Slider {...settings}>
            {/*Elemento del silder*/}
            <div>
              <Page>
                <div className="card mx-3 shadow">
                    <div className="card-body">

                      <p class="h4 text-center"> Silde  -> </p>
                    </div>
                </div>
              </Page>
            </div>
            {/*Elemento del silder*/}
            <div>
              <Page>
                <div className="card mx-3 shadow">
                    <div className="card-body">
                        <p className="card-text text-center">
                            Nunca
                        </p>
                    </div>
                </div>
              </Page>
            </div>
            {/*Elemento del silder*/}
            <div>
              <Page>
                <div className="card mx-3 shadow">
                    <div className="card-body">
                        <p className="card-text text-center">
                            pares 
                        </p>
                    </div>
                </div>
              </Page>
            </div>
            {/*Elemento del silder*/}
            <div>
              <Page>
                <div className="card mx-3 shadow">
                    <div className="card-body">
                        <p className="card-text text-center">
                            de aprender
                        </p>
                    </div>
                </div>
              </Page>
            </div>
        </Slider>
        </Wrapper>
      
      </div>
    );
  }
  //fin de función render

}//fin de la clase SlideView



export default SlideView;