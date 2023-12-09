var htmlText = require('../index.ejs');

const SocialLink = () => {
    return <div dangerouslySetInnerHTML={{__html: htmlText.default}}></div>
}

export default SocialLink;
