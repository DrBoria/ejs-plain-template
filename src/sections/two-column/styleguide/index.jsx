var htmlText = require('../index.ejs');

const TwoColumn = () => {
    return <div dangerouslySetInnerHTML={{__html: htmlText.default}}></div>
}

export default TwoColumn;
