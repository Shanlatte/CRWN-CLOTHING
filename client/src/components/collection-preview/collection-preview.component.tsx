import React from 'react'

import './collection-preview.styles.scss';

import { ICollectionPreviewProps } from '../../data-types/collection-preview-types';
import CollectionItem from './../collection-item/collection-item.component';
import { useHistory } from 'react-router-dom';


const CollectionPreview : React.FC<ICollectionPreviewProps> = ({ title, items, routeName }) => {
    const history = useHistory();

    return (
        <div className="collection-preview">
            <h1
                className="title"
                onClick={() => history.push(`shop/${routeName}`)} >{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .filter((item, index) => index < 4)
                    .map((item) => {
                        return (
                            <CollectionItem key={item.id} item={item} />
                        )
                    })}
            </div>
        </div>
    )
}

export default CollectionPreview;