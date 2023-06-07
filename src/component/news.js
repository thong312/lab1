import React, { useState, useContext } from 'react';
import { Icon, Card } from 'react-materialize';
import { ThemeContext } from './ThemeContext';
export default function News() {
    const [activeTab, setActiveTab] = useState(0);
    const { theme } = useContext(ThemeContext);
    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="news-container">
            <h2>Movie News</h2>

            <ul className="tabs" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                <li
                    className={`tab ${activeTab === 0 ? 'active' : ''}`}
                    onClick={() => handleTabChange(0)}
                >
                    <Icon>lens</Icon>
                </li>
                <li
                    className={`tab ${activeTab === 1 ? 'active' : ''}`}
                    onClick={() => handleTabChange(1)}
                >
                    <Icon>lens</Icon>
                </li>
                <li
                    className={`tab ${activeTab === 2 ? 'active' : ''}`}
                    onClick={() => handleTabChange(2)}
                >
                    <Icon>lens</Icon>
                </li>
            </ul>



            <div className="tab-content">
                {activeTab === 0 && (
                    <Card style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                        <h3>China Box Office: ‘Spider-Man: Across The Spider-Verse’ Opens to So-So $17.2M</h3>
                        <h4>The film has received rave reviews in China, but it appears to be playing more like a fan film than a blockbuster there.</h4>
                        <img src='picture/1/news1.jpg' alt='' />
                        <div className='news-content'>
                            <h5>Sony’s critically acclaimed Spider-Man: Across The Spider-Verse opened to $17.2 million in China over the weekend — a respectable
                                start but a fraction of its barnstorming $120.5 million opening in North America.
                                As in the U.S., the film has been very well received by Chinese critics and filmgoers alike. It currently scores 9.4 on ticketing
                                apps Maoyan and Tao Piao Piao, and 8.8 on fan site Douban — which is significantly better than any other Hollywood film currently
                                on release in the country. But Maoyan only projects it to earn about $35 million in total in the country, a major step down from Spider-Man:
                                Into the Spider-Verse‘s $62.8 million haul in 2019.
                            </h5>
                        </div>

                    </Card>
                )}

                {activeTab === 1 && (
                    <Card style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>

                        <h3>Studio Ghibli to Release Hayao Miyazaki’s Final Film ‘How Do You Live?’ With No Trailer, No Promotional Marketing</h3>
                        <h4>In a very Ghibli-esque move, the legendary anime house is asking fans to go see the film with no preconceptions: "Deep down, I think this
                            is what moviegoers latently desire," says producer Toshio Suzuki.</h4>
                        <img src='picture/1/news2.jpg' alt='' />
                        <div className='news-content'>
                            <h5>Japan’s Studio Ghibli says it will release no trailer and no promotional materials whatsoever ahead of the release of Hayao Miyazaki’s final
                                film, How Do You Live?
                                The forthcoming film, which opens in Japan on July 14, is easily the most anticipated movie coming to Japanese theaters in years — and exceedingly
                                little is known about it. (U.S. and international release dates for the film have not yet been set.)
                                Ghibli previously described the film as “a grand fantasy” loosely inspired by Japanese author Genzaburo Yoshino’s 1937 novel How Do You Live?, a coming-of-age
                                story about the emotional and philosophical development of a young boy after the death of his father. And the studio released one inscrutable poster for the film
                                in December (see it below), but it has said nothing else about the movie since — no plot summary, no voice cast, nothing about the film’s setting or characters.
                                In an interview with Japanese magazine Bungei Shunji on Friday, Ghibli’s longtime lead producer Toshio Suzuki, considered Miyazaki’s right-hand man, said nothing
                                more will be revealed about the film before it hits theaters.
                                Explaining the absence of marketing for the upcoming movie, which has already become conspicuous in Japan, Suzuki said: “As part of company operations, over the years
                                Ghibli has wanted people to come see the movies we’ve made. So we’ve thought about that and done a lot of different things for that purpose — but this time we were like,
                                ‘Eh, we don’t need to do that.'”
                                He added: “Doing the same thing you’ve done before, over and over, you get tired of it. So we wanted to do something different.”
                                Fans of the legendary anime house, which has long prioritized a pure experience of its works over commercial considerations, will recognize the decision as a very Studio
                                Ghibli-esque move. For years, Ghibli restricted the amount of merchandise that could be licensed and made from its characters, for fear that they might become over-exposed
                                and lose some of their magic. And when the company launched its first long-gestating theme park last year, it limited advanced media access to the park, worried that widespread
                                coverage would make the attraction too popular, which would undercut the gentle appreciation of nature it was designed to generate for visitors.
                            </h5>
                            <h5> Studio Ghibli’s only poster for How Do You Live? is below.</h5>
                        </div>
                        <div className='news-pic'>
                            <img src='picture/1/news2,5.jpg' alt='' />
                        </div>


                    </Card>
                )}

                {activeTab === 2 && (
                    <card style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>

                        <h3>Gkids, Studio Ghibli Ink Home Entertainment Deal</h3>
                        <h4>The first releases will include 'Princess Mononoke' and Oscar winner 'Spirited Away.'</h4>
                        <img src='picture/1/news3.jpg' alt='' />
                        <div className='news-content'>
                            <h5>Indie distributor Gkids is partnering with Studio Ghibli to handle the famed Japanese animation studio’s catalog in North America.
                                Beginning Oct. 17, Gkids will begin reissuing new Blu-ray and DVD editions of Studio Ghibli’s films, with six initial titles from Academy Award-winning director and studio founder
                                Hayao Miyazaki. They are: Howl’s Moving Castle, Kiki’s Delivery Service, My Neighbor Totoro, Ponyo, Princess Mononoke and Oscar-winning Spirited Away.
                                These will be followed by Castle in the Sky and Nausicaä of the Valley of the Wind on Oct. 31. The remaining titles will arrive in the following months.
                                Gkids has handled theatrical rights for the Studio Ghibli catalog since 2010, and released the studio’s recent From Up on Poppy Hill and the Oscar-nominated titles The Tale of the
                                Princess Kaguya and When Marnie Was There.
                                As previously announced, Gkids also has partnered with Fathom Events to bring six Ghibli titles back to U.S. theaters with Studio Ghibli Fest 2017. Kiki’s Delivery Service will play
                                for two shows on July 23 and 24 in both dubbed and subtitled versions at approximately 600 theaters.
                            </h5>
                        </div>


                    </card>
                )}
            </div>

            <ul className="tabs" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                <li
                    className={`tab ${activeTab === 0 ? 'active' : ''}`}
                    onClick={() => handleTabChange(0)}
                >
                    <Icon>lens</Icon>
                </li>
                <li
                    className={`tab ${activeTab === 1 ? 'active' : ''}`}
                    onClick={() => handleTabChange(1)}
                >
                    <Icon>lens</Icon>
                </li>
                <li
                    className={`tab ${activeTab === 2 ? 'active' : ''}`}
                    onClick={() => handleTabChange(2)}
                >
                    <Icon>lens</Icon>
                </li>
            </ul>
        </div>

    );
}
