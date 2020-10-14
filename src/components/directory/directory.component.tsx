import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/root-reducer';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';


const Directory: React.FC = () => {
    const sections = useSelector((state: RootState) => state.directory.sections)

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