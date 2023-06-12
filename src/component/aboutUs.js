import React, { useContext } from 'react';
import { Collapsible, CollapsibleItem, Container, Icon } from 'react-materialize';
import { ThemeContext } from './ThemeContext';

export default function About() {
  const { theme2, theme } = useContext(ThemeContext);

  return (
    <Container>
      <div className='about-container'>
        <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
          <h2>About Us</h2>
          <Collapsible accordion>
            <CollapsibleItem header={<span><Icon>group</Icon> Our website</span>} style={{ backgroundColor: theme2.backgroundColor, color: theme2.color }}>
              <p>
                Our website is your go-to destination for all things film. Whether you're a casual moviegoer or a dedicated cinephile, we invite you to immerse yourself in the captivating world of cinema on our platform. Discover new films, revisit old classics, and connect with a community of fellow film enthusiasts. Start exploring today and embark on a cinematic journey like no other!
              </p>
            </CollapsibleItem>

            <CollapsibleItem header={<span><Icon>notifications</Icon> Daily News</span>} style={{ backgroundColor: theme2.backgroundColor, color: theme2.color }}>
              <p>
                There are many lists of top movies of all time. One such list is the Top 250 Movies list on IMDb which is ranked by a formula that includes the number of ratings each movie received from users and value of ratings received from regular users1. Another list is 100 Best Movies of All Time by Time Out which is ranked by their film editors2. You can also check out Top 100 Greatest Movies of All Time on IMDb which are ranked according to their success (awards & nominations), popularity, and cinematic greatness from a directing/writing perspective3.
              </p>
            </CollapsibleItem>
            <CollapsibleItem header={<span><Icon>group</Icon> Our team</span>} style={{ backgroundColor: theme2.backgroundColor, color: theme2.color }}>
              <ul>
                <li>Desginer: Ly Minh Thong</li>
                <li>Content: Ly Minh Thong</li>
              </ul>
            </CollapsibleItem>
            <CollapsibleItem header={<span><Icon>location_on</Icon> Our address</span>} style={{ backgroundColor: theme2.backgroundColor, color: theme2.color }}>
              <p>Miss Davis 73 Apple Road Bournemouth BH8 6BL UK</p>
            </CollapsibleItem>
            <CollapsibleItem header={<span><Icon>group_add</Icon>Recruit</span>} style={{ backgroundColor: theme2.backgroundColor, color: theme2.color }}>
              <p>If you are interested in creating content on our platform, please contact us:</p><br />
              <ul>
                <li><Icon>local_phone</Icon> Phone: 0123456</li>
                <li><Icon>mail</Icon> Email: FilmsSite@gmail.com</li>
                <li><Icon>home</Icon> Post Address: Mr.Minh Thong
                  123 Main Street
                  Anytown
                  Midshire
                  AB12 3CD
                  United Kingdom</li>
              </ul>

            </CollapsibleItem>
          </Collapsible>
        </div>
      </div>
    </Container>
  );
}
