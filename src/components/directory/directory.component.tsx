import React from 'react';
import { sections } from '../../data/directory.data';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const Directory: React.FC = () => {
    return (
        <div className="directory-menu">
            {
                sections.map(({ title, id, imageUrl, size }) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                ))
            }
        </div>
    )
}

export default Directory;