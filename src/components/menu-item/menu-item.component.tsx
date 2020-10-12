import React from 'react';
import { ImenuItemProps } from '../../data-types/menu-item-types';
import './menu-item.styles.scss';
import { useHistory } from 'react-router'

const MenuItem: React.FC<ImenuItemProps> = ({ title, imageUrl, size, linkUrl }) => {
    const history = useHistory();

    return (
        <div className={`${size} menu-item`} onClick={() => history.push(linkUrl)}>
            <div
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
                className='background-image'
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;