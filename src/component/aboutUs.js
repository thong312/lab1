import React from 'react';
import { Collapsible, CollapsibleItem, Container, Icon } from 'react-materialize';

export default function About() {
    return (
        <Container>
            <div className='about-container'>
                <h3>About Us</h3>
                <Collapsible accordion>
                    <CollapsibleItem header={<span><Icon>group</Icon> Our website</span>}>
                        <p>
                            Our website is your go-to destination for all things film. Whether you're a casual moviegoer or a dedicated cinephile, we invite you to immerse yourself in the captivating world of cinema on our platform. Discover new films, revisit old classics, and connect with a community of fellow film enthusiasts. Start exploring today and embark on a cinematic journey like no other!
                        </p>
                    </CollapsibleItem>

                    <CollapsibleItem header={<span><Icon>notifications</Icon> Daily News</span>}>
                        There are many lists of top movies of all time. One such list is the Top 250 Movies list on IMDb which is ranked by a formula that includes the number of ratings each movie received from users and value of ratings received from regular users1. Another list is 100 Best Movies of All Time by Time Out which is ranked by their film editors2. You can also check out Top 100 Greatest Movies of All Time on IMDb which are ranked according to their success (awards & nominations), popularity, and cinematic greatness from a directing/writing perspective3.
                    </CollapsibleItem>
                    <CollapsibleItem header={<span><Icon>location_on</Icon> Nation</span>}>
                        <ul>
                            <li>America</li>
                            <li>England</li>
                            <li>VietNam</li>
                        </ul>
                    </CollapsibleItem>
                </Collapsible>
            </div>
        </Container>
    );
}