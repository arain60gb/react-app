import React from 'react'
import Pic from '../product-copywrting-tech.png'


class CountText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
        this.handleKeypress = this.handleKeypress.bind(this);
    }

    handleKeypress(event) {
        // console.log('*****', event.target.value);
        this.setState({ value: event.target.value });
    }
    render() {
        let count = 0,
            length = this.state.value ? this.state.value.length : 0;
        return (
            <div className="row">
                <div className="col-8">
                    <textarea onChange={(event) => this.handleKeypress(event)}>{this.state.value}</textarea>
                    <div>Count: {length}</div>
                    {/* <div>this.state.value: {this.state.value}</div> */}
                    {/* <TextArea
                        value={value}
                        onChange={this.onChange}
                        placeholder="Enter Text"
                        autoSize={{ minRows: 14, maxRows: 14 }}
                    /> */}
                    <p className="paragraph">
                        Do you often wonder whether your content is of the exact word count before posting in on social media platforms? Well, you are not alone, and every content marketer has pondered on this question at least once in their lifetime. If you find that your posts' long word counts are still not getting you enough attention, then this post is for people like you!<br />
                    A longer word count does not necessarily mean quality content, so it does not assure you a good rank.<br /><br />
                    Here is the exact word count you need to maintain for your posts across diverse marketing channels to understand better.
                    </p>
                    <ul className="social-links"><li>Facebook</li></ul>
                    <p className="paragraph">Do you know that as per a popular survey, the ideal character count for a Facebook post should be only 40 or roughly 20 words? If you stick to this limit, you might be able to enjoy an 86% engagement rate, further explained in the research article. On the contrary, if the posts' character count is near to 80, the engagement rate has been found to drop down to 66%.</p>
                    <ul className="social-links"><li>Instagram</li></ul>
                    <p className="paragraph">Contrary to popular belief, Instagram is not only about rich visuals; even textual content plays a pivotal role. Ideally, only 125 characters appear in the feed of users, you should fit your caption somewhere within this limit. Since hashtags are also becoming immensely popular lately, you can reserve about 30 characters or 15 words for it. But apart from sticking to this word limit, you can also put some decorative emojis at the end to trigger engagement. Regardless of how you incorporate the emojis and hashtags, ensure that the bio is less than 75 words.</p>
                    <ul className="social-links"><li>Twitter</li></ul>
                    <p className="paragraph">If you consider posting in this marketing channel, you might get a bit of liberty to stretch the word limit. You have got the complete freedom to post articles of less than or equal to 1000 words! Your article's tone should be professional, and the headline of your every post should not exceed 50 words! If you are updating status on LinkedIn, then the optimal word count will be no more than 300 words. But if you are posting lengthy articles, add a few catchy images or, even better, a visually rich infographic along with it.</p>
                    <ul className="social-links"><li>Blog post</li></ul>
                    <p className="paragraph">As mentioned earlier, a longer blog post will not fetch you more attention from your users if your content quality is not up to the mark! If you are trying to increase your page views from the scratch, then posting an article of 150 words will garner you satisfactory results, provided your content has some depth to it. But if you are willing to go for SEO branding, you can play a bit more with words and phrases to increase the count to 300-500 words. While doing so, make sure that you discuss a specific topic and spread relevant keywords throughout the article. However, if you have found your loyal community of readers and you want to instill engagement among them, then raise the word limit to 1000 or more words.</p>
                    <ul className="social-links"><li>Snapchat</li></ul>
                    <p className="paragraph">If your business's target audience is youngsters, then you better not ignore the potential of Snapchat as a marketing channel anymore! The ones who are active on Snapchat know that the platform is only about highly engaging visuals and videos. But an image or a video with no catchy caption will be lost among thousands of such images. Remember not to post lengthy captions as it will distract the users from your visual content, and they might decide to skip your post to check out the next one in their feed!</p>
                    <ul className="social-links"><li>Youtube</li></ul>
                    <p className="paragraph">If you think that Youtube is all about videos with high-end audiovisuals, you need to change your opinion for good! While posting a freshly shot video, you need to mention a basic overview of it in the description box. While it is not recommended to post a two-liner in the description box, you should not also go beyond 500 words for the description. The few lines mention the most prominent feature about your product or service and then add the Call-to-Action phrase somewhere in it.</p>
                    <ul className="social-links"><li>Emails</li></ul>
                    <p className="paragraph">Now that other marketing channels have emerged, we should not forget about a good old friend, emails! The subject line of your email should not exceed more than 14-15 words at any cost! Your priority should be to send concise and in-depth emails to your clients so that they don't unsubscribe from the newsletter. However, if you need to write longer emails to address some issues in certain instances, go there and do it! <br />
                    Character limits have been set to ensure that users don't get bored while consuming your content. Articles with an optimal word count sport a simplistic look, and thus the text is easily understandable to a broad set of readers.
                    </p>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img className="card-img-top" src={Pic} alt="Card image cap" />
                        <div className="card-body">
                            <button type="button" class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CountText;