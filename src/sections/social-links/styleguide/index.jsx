var htmlText = require('../index.ejs');

const SocialLinks = () => {
    return <div dangerouslySetInnerHTML={{__html: htmlText.default}}></div>
}

export default SocialLinks;
