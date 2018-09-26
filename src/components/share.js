import React, {Component} from 'react';
import styled from 'styled-components'
import {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    RedditShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    MailruShareButton,
    ViberShareButton,
    WorkplaceShareButton,
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
    GooglePlusIcon,
    LinkedinIcon,
    PinterestIcon,
    VKIcon,
    OKIcon,
    RedditIcon,
    TumblrIcon,
    LivejournalIcon,
    MailruIcon,
    ViberIcon,
    WorkplaceIcon,
    EmailIcon,
} from 'react-share';

const ShareList = styled.ul`
    display:flex;
    padding: 1em 0;
    li{
        &:hover{
            transform: translateY(-2px) scale(1.1)
        }
    }
`
const icon = {
    size: 32
}

class Share extends Component {
    state = { isClient: false }

    componentDidMount() {
            this.setState({isClient:true})
    }

    render() {
        return (
            this.state.isClient &&
            <ShareList>
                <li>
                    <FacebookShareButton url={location && location.href}>
                        <FacebookIcon size={icon.size} />
                    </FacebookShareButton>
                </li>
                <li>
                    <TwitterShareButton url={location && location.href}>
                        <TwitterIcon size={icon.size} />
                    </TwitterShareButton>
                </li>
                <li>
                    <LinkedinShareButton url={location && location.href}>
                        <LinkedinIcon size={icon.size} />
                    </LinkedinShareButton>
                </li>
                <li>
                    <WhatsappShareButton url={location && location.href}>
                        <WhatsappIcon size={icon.size} />
                    </WhatsappShareButton>
                </li>
                <li>
                    <TelegramShareButton url={location && location.href}>
                        <TelegramIcon size={icon.size} />
                    </TelegramShareButton>
                </li>
                <li>
                    <GooglePlusShareButton url={location && location.href}>
                        <GooglePlusIcon size={icon.size} />
                    </GooglePlusShareButton>
                </li>
                <li>
                    <EmailShareButton url={location && location.href}>
                        <EmailIcon size={icon.size} />
                    </EmailShareButton>
                </li>
                <li>
                    <RedditShareButton url={location && location.href}>
                        <RedditIcon size={icon.size} />
                    </RedditShareButton>
                </li>
                <li>
                    <LivejournalShareButton url={location && location.href}>
                        <LivejournalIcon size={icon.size} />
                    </LivejournalShareButton>
                </li>
                <li>
                    <WorkplaceShareButton url={location && location.href}>
                        <WorkplaceIcon size={icon.size} />
                    </WorkplaceShareButton>
                </li>
            </ShareList>
        );
    }
}

// Share.propTypes = {

// };

export default Share;