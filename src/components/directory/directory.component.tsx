import React from 'react';
import { sections } from '../../data/directory.data';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';


const Directory: React.FC = () => {
    return (
        <div className="directory-menu">
            {
                sections.map(({ id, ...otherSectionsProps }) => (
                    <MenuItem key={id} {...otherSectionsProps} />
                ))
            }
        </div>
    )
}

export default Directory;