import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        console.log('ImageCard this.imageRef',this.imageRef.current.clientHeight);
    }

    render() {
        console.log('ImageCard',this.props)
        const { description, urls } = this.props.image;
        return (
            <div>
                <img 
                  ref={this.imageRef}
                  alt={description}
                  src={urls.regular} 
                />
            </div>
        )

    }
}

export default ImageCard;