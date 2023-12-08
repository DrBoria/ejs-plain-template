var htmlText = require('../index.ejs');

const Component = () => {
    return <div dangerouslySetInnerHTML={{__html: htmlText.default}}></div>
}

export default Component;
