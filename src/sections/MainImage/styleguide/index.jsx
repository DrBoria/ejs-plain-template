var htmlText = require('../index.ejs');

const MainImage = () => {
    return <div>
        <div dangerouslySetInnerHTML={{__html: htmlText.default}}></div></div>
}

export default MainImage;
