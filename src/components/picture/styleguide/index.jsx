var htmlText = require('../index.ejs');

const Picture = () => {
    return <>
        <div dangerouslySetInnerHTML={{__html: htmlText.default}}></div>
    </>
}

export default Picture;
