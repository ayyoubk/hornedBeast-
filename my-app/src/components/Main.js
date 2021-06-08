import React from 'react';
import HornedBeast from './HornedBeasts';
import beastsData from '../data.json';

class Main extends React.Component {

  render() {
    return (
      <main>
        {
          beastsData.map((beast) => {
            return (
              <HornedBeast
                title={beast.title}
                img={beast.image_url}
                info={beast.description}
              />
            );
          })
        }
      </main>
    );
  }
}

export default Main;
