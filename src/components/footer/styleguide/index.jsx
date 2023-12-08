var htmlText = require('../index.ejs');

const Component = () => {
    console.log('htmlText', htmlText);
    return <div dangerouslySetInnerHTML={{__html: htmlText.default}}></div>
}

export default Component;
