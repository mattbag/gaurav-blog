import React from 'react';
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
const icon={
    size: 32,
    url:location && location.href
}
const Share = (props) => typeof window !== 'undefined' &&
    <ShareList>
        <li>
            <FacebookShareButton url={icon.url}>
                <FacebookIcon size={icon.size} />
            </FacebookShareButton>
        </li>
        <li>
            <TwitterShareButton url={icon.url}>
                <TwitterIcon size={icon.size} />
            </TwitterShareButton>
        </li>
        <li>
            <LinkedinShareButton url={icon.url}>
                <LinkedinIcon size={icon.size} />
            </LinkedinShareButton>
        </li>
        <li>
            <WhatsappShareButton url={icon.url}>
                <WhatsappIcon size={icon.size} />
            </WhatsappShareButton>
        </li>
        <li>
            <TelegramShareButton url={icon.url}>
                <TelegramIcon size={icon.size} />
            </TelegramShareButton>
        </li>
        <li>
            <GooglePlusShareButton url={icon.url}>
                <GooglePlusIcon size={icon.size} />
            </GooglePlusShareButton>
        </li>
        <li>
            <EmailShareButton url={icon.url}>
                <EmailIcon size={icon.size} />
            </EmailShareButton>
        </li>
        <li>
            <RedditShareButton url={icon.url}>
                <RedditIcon size={icon.size} />
            </RedditShareButton>
        </li>
        <li>
            <LivejournalShareButton url={icon.url}>
                <LivejournalIcon size={icon.size} />
            </LivejournalShareButton>
        </li>
        <li>
            <WorkplaceShareButton url={icon.url}>
                <WorkplaceIcon size={icon.size} />
            </WorkplaceShareButton>
        </li>
    </ShareList>


export default Share