import React from 'react';
import SHOP_DATA from './shopdata'
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx'

class ShopPage extends React.Component {
    constructor() {
        super()
        this.state = {
            collections: SHOP_DATA
        }
    }


    render() {
        return(
            <div>
                { this.state.collections.map(({id, title, ...items}) => (
                    <CollectionPreview key={id} title={title} {...items}/>
                ))
                }
                
            </div>
        )
    }
}

export default ShopPage