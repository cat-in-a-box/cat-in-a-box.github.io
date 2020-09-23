import React from "react";

export default class GalleryComponent extends React.Component {
  state = {
    viewImage: null
  };

  setViewImage = (viewImage = null) => {
    this.setState({
      viewImage
    });
  };

  renderImage() {
    return (
      <div className="row-container" draggable="false">
          <img onClick={() => this.setViewImage(require('../files/pic1.jpeg'))} src={require('../files/pic1.jpeg')} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage(require('../files/pic2.jpeg'))} src={require('../files/pic2.jpeg')} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage(require('../files/pic3.jpeg'))} src={require('../files/pic3.jpeg')} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage(require('../files/pic4.jpeg'))} src={require('../files/pic4.jpeg')} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage(require('../files/pic5.jpeg'))} src={require('../files/pic5.jpeg')} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage(require('../files/pic6.jpeg'))} src={require('../files/pic6.jpeg')} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage(require('../files/pic7.jpeg'))} src={require('../files/pic7.jpeg')} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage(require('../files/pic8.jpeg'))} src={require('../files/pic8.jpeg')} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage(require('../files/pic9.jpeg'))} src={require('../files/pic9.jpeg')} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage(require('../files/pic10.jpeg'))} src={require('../files/pic10.jpeg')} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage(require('../files/pic11.jpeg'))} src={require('../files/pic11.jpeg')} draggable="false" className="thumbnail" alt=""/>
          <img onClick={() => this.setViewImage(require('../files/pic12.jpeg'))} src={require('../files/pic12.jpeg')} draggable="false" className="thumbnail" alt=""/>
      </div>
    );
  }

  render() {
    if (this.state.viewImage) {
      return (
        <div className="viewContainer" onClick={() => this.setViewImage(null)} draggable="false">
          <img src={this.state.viewImage} draggable="false" className="viewImage" alt=""/>
          <div className="Text">Нажми еще раз на картинку чтобы скрыть её</div>
        </div>
      );
    }

    return <div>{this.renderImage()}</div>;
  }
}
