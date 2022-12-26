import {Link} from "react-router-dom";

const ImageLink = `http://cdn.onlinewebfonts.com/svg/img_266735.png`;
const ExploreBlogsButton = () => {
    window.open("")

};

const HomePage = () => (
    <div className="container">
        <img id='home-page-icon' src={ImageLink} width='35' alt='mimic icon to ANOTHER' />
        <h1>Decentralized Blogging Platform</h1>
        <p>
            Hey fellows, this is where we post blogs that uses blockchain technology to
            decentralises itself, and give ownership to everybody on their blogs and
            uncensored flow in go. Decentralised blogging platforms have several advantages
            over traditional, centralised platforms. Because they are not controlled by
            a single company, they are less vulnerable to censorship or manipulation.
        </p>
        <p>
            A decentralised blogging platform is a type of online platform that allows
            users to create and publish blog posts, but is not controlled by a central
            authority. Instead, the platform is distributed across a network of computers,
            and decisions about the platform's content and operation are made by the community
            of users rather than a single entity.
        </p>
        <p>
            One example of a decentralised blogging platform is Steemit, which uses a
            blockchain-based system to store and manage content. Users on Steemit can
            earn cryptocurrency by creating and curating high-quality content,
            incentivizing the creation of engaging and informative blog posts. Other
            decentralised blogging platforms include Scuttlebutt and Mastodon, which
            use different underlying technologies but have similar decentralized structures.
        </p>

        <button><Link id= 'explore-link' to='/articles'>Explore Blogs</Link></button>
    </div>
);
export default HomePage;