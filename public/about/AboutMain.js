import React from 'react';

class AboutMain extends React.Component {
  constructor(props) {
    super(props);

    this.postIt = this.postIt.bind(this);
  }

  postIt() {
    console.log('post this fucking thing');
    $.post( "http://localhost:3001/api/blocks", { name: "test-block", content: "<div>hell ya</div>", lastUpdate: new Date() })
      .done(function( data ) {
        alert( "Data Loaded: " + data );
      }).
    catch(function( error ) {
      console.log('no go', error);
    });
  }

  render() {
    return (
      <div>
        <div>About Mission Soccer</div>
        <button onClick={this.postIt}>Post It</button>
      </div>
    );
  }
};

export default AboutMain;
