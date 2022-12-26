const GitHubIcon = `https://cdn-icons-png.flaticon.com/512/25/25231.png`;
const HauraFunction = () => {
    let GithubCardEl = document.getElementById('github-card-el');
};

const AboutPage = function () {
    return (
        <div className='container'>
            <h1 onClick={ HauraFunction}>Want to know about me ?</h1>
            <div id ='github-card-el' className='card'>
                <a id='github-card-link' href='https://github.com/sarkartanmay393' target='_blank'>
                    <div className='row'>
                        <img id='github-icon-on-card' src={GitHubIcon} width='38' alt='github icon' />
                        <h2>/sarkartanmay393</h2>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default AboutPage;