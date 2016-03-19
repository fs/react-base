import React from 'react';
import Router from 'react-router';

export default class AboutText extends React.Component {
  state = {
    id: ''
  }

  componentDidMount() {
    this.setAboutId(this.props.params);
  }

  setAboutId(params) {
    if (typeof params !== 'undefined' && typeof params.id !== 'undefined') {
      this.setState({ id: params.id });
    }
  }

  render() {
    return (
      <article>
        <p>
          <b>Current Id: { this.state.id }</b>
          <br/>
          Chia mixtape DIY, meggings Bushwick Intelligentsia keytar.
          Cred photo booth bicycle rights flannel street art, art party pork belly bespoke sustainable.
          Gastropub Etsy stumptown literally street art freegan.
          Bushwick Helvetica distillery, ennui Godard church-key umami cronut cold-pressed
          migas trust fund bicycle rights Kickstarter craft beer.
          Meggings cold-pressed Austin fap 3 wolf moon, cardigan polaroid Portland literally.
          Chia literally McSweeney's Wes Anderson American Apparel four loko. Readymade stumptown ethical VHS.
          <br/><br/>
          Williamsburg keytar lomo you probably haven't heard of them quinoa, Banksy tilde.
          Selfies photo booth Echo Park single-origin coffee, flannel chia PBR.
          Distillery church-key selfies, Pitchfork keffiyeh semiotics four dollar toast scenester authentic mumblecore
          Portland you probably haven't heard of them asymmetrical fanny pack.
          Hoodie farm-to-table mixtape, Truffaut paleo hashtag banh mi.
          Portland ugh farm-to-table McSweeney's Carles fap health goth, crucifix twee.
          Migas typewriter direct trade, mixtape pop-up PBR&B pug.
          Aesthetic kitsch art party umami Vice next level.
          <br/><br/>
          Swag slow-carb Portland kitsch, tousled Intelligentsia American Apparel.
          Crucifix kitsch selvage bespoke, trust fund salvia narwhal Marfa stumptown normcore
          Blue Bottle fingerstache skateboard semiotics.
          Post-ironic American Apparel pug put a bird on it pour-over, YOLO XOXO bitters tattooed fixie Godard.
          Roof party trust fund wolf Kickstarter tofu.
          Gastropub Thundercats cred single-origin coffee Austin Blue Bottle.
          Polaroid gastropub literally health goth, letterpress listicle Pinterest.
          Pug try-hard deep v small batch vegan blog, stumptown seitan.
        </p>
      </article>
    );
  }
}
