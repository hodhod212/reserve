import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import Image1 from './images/hats.png';
import Image2 from './images/jackets.png';
import Image3 from './images/sneakers.png';
import Image4 from './images/womens.png';
import Image5 from './images/mens.png';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: Image1,
          id: 1,
          linkUrl:'hats'
        },
        {
          title: 'jackets',
          imageUrl: Image2,
          id: 2,
          linkUrl:''
        },
        {
          title: 'sneakers',
          imageUrl: Image3,
          id: 3,
          linkUrl:''
        },
        {
          title: 'womens',
          imageUrl: Image4,
          size: 'large',
          id: 4,
          linkUrl:''
        },
        {
          title: 'mens',
          imageUrl: Image5,
          size: 'large',
          id: 5,
          linkUrl:''
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps}  />
        ))}
      </div>
    );
  }
}

export default Directory;
