var htmlText = require('../index.ejs');

const Picture = () => {
    console.log('htmlText', htmlText);
    return <div dangerouslySetInnerHTML={{__html: htmlText.default}}></div>
}

export default Picture;
