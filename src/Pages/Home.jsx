import { useWallet } from '../hooks/useWallet';
import { useState } from 'react';
import toast from 'react-hot-toast';
import ValueCarousel from '../Components/ValueCarousel';
import RoadmapCarousel from '../Components/RoadmapCarousel';
import FAQAccordion from '../Components/FAQAccordion';

const Home = () => {
    const { isConnected, address, formattedAddress, connectWallet, disconnectWallet, balance, chain } = useWallet();
    const [isConnecting, setIsConnecting] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('ETH'); // Default to ETH

    const handleConnectWallet = async () => {
        setIsConnecting(true);
        try {
            await connectWallet();
            toast.success('Wallet connected successfully!');
        } catch (error) {
            console.error('Connection error:', error);
            toast.error('Failed to connect wallet. Please try again.');
        } finally {
            setIsConnecting(false);
        }
    };

    const handleDisconnectWallet = async () => {
        try {
            await disconnectWallet();
            toast.success('Wallet disconnected');
        } catch (error) {
            console.error('Disconnect error:', error);
            toast.error('Failed to disconnect wallet');
        }
    };

    const handleTogglePaymentMethod = () => {
        // Toggle between ETH and BNB
        setSelectedPaymentMethod(prevMethod => {
            if (prevMethod === 'ETH') {
                return 'BNB';
            } else if (prevMethod === 'BNB') {
                return 'ETH';
            }
            // If USDT, switch to BNB
            return 'BNB';
        });
    };

    return (
        <app-language _nghost-ng-c1255992284 ngh={13}>
            <app-header _ngcontent-ng-c1255992284 _nghost-ng-c47258724 ngh={1}>
                <div _ngcontent-ng-c47258724 className="header d-none d-lg-block">
                    <div
                        _ngcontent-ng-c47258724
                        className="d-flex justify-content-between align-items-center w-100 menu-header"
                    >
                        <div _ngcontent-ng-c47258724 className="container">
                            <div
                                _ngcontent-ng-c47258724
                                className="d-flex justify-content-between align-items-center w-100"
                            >
                                <a
                                    _ngcontent-ng-c47258724
                                    className="cursor-pointer d-flex align-items-center p-0"
                                    href="/en"
                                >
                                    <img
                                        _ngcontent-ng-c47258724
                                        src="/assets/images/png/logo.webp"
                                        width="152px"
                                        height="53px"
                                        alt="logo"
                                        loading="eager"
                                        className="img-fluid"
                                    />
                                </a>
                                <div
                                    _ngcontent-ng-c47258724
                                    className="menu-item d-flex align-items-center"
                                >
                                    {/* <a _ngcontent-ng-c47258724 title="staking" href="/en/staking">
                                        Staking
                                    </a>
                                    <a _ngcontent-ng-c47258724 title="giveaway" href="/en/giveaway">
                                        Giveaway
                                    </a> */}
                                    {/* <a
                                        _ngcontent-ng-c47258724
                                        className="mx-2 text-center"
                                        title="media"
                                        href="/en#media"
                                    >
                                        Media{" "}
                                    </a>
                                    <a
                                        _ngcontent-ng-c47258724
                                        className="mx-2 text-center"
                                        title="bridge"
                                        href="/en#bridge"
                                    >
                                        Bridge{" "}
                                    </a>
                                    <a
                                        _ngcontent-ng-c47258724
                                        className="mx-2 text-center"
                                        title="tokenomics"
                                        href="/en#tokenomics"
                                    >
                                        Tokenomics{" "}
                                    </a>
                                    <a
                                        _ngcontent-ng-c47258724
                                        className="mx-2 text-center"
                                        title="how-to-buy"
                                        href="/en#how-to-buy"
                                    >
                                        How To Buy{" "}
                                    </a>
                                    <a
                                        _ngcontent-ng-c47258724
                                        className="mx-2 text-center"
                                        title="roadmap"
                                        href="/en#roadmap"
                                    >
                                        Roadmap{" "}
                                    </a> */}

                                    {/* <span _ngcontent-ng-c47258724 className="ms-3 social-container flex">
                                        <a
                                            _ngcontent-ng-c47258724
                                            target="_blank"
                                            className="link m-0"
                                            href="https://x.com/Pepetocoin"
                                        >
                                            <img
                                                _ngcontent-ng-c47258724
                                                loading="eager"
                                                src="assets/images/svg-icons/social-icons/twitter.svg"
                                                alt="twitter"
                                            />
                                        </a>
                                        <a
                                            _ngcontent-ng-c47258724
                                            target="_blank"
                                            className="link m-0"
                                            href="https://t.me/pepeto_channel"
                                        >
                                            <img
                                                _ngcontent-ng-c47258724
                                                loading="eager"
                                                src="assets/images/svg-icons/social-icons/telegram.svg"
                                                alt="telegram"
                                            />
                                        </a>
                                        <a
                                            _ngcontent-ng-c47258724
                                            target="_blank"
                                            className="link m-0"
                                            href="https://www.instagram.com/pepetocoin/"
                                        >
                                            <img
                                                _ngcontent-ng-c47258724
                                                loading="eager"
                                                src="assets/images/svg-icons/social-icons/instagram.svg"
                                                alt="instagram"
                                            />
                                        </a>
                                        <a
                                            _ngcontent-ng-c47258724
                                            target="_blank"
                                            className="link m-0"
                                            href="https://www.youtube.com/@Pepetocoin"
                                        >
                                            <img
                                                _ngcontent-ng-c47258724
                                                loading="eager"
                                                src="assets/images/svg-icons/social-icons/youtube.svg"
                                                alt="youtube"
                                            />
                                        </a>

                                    </span> */}
                                    {!isConnected ? (
                                        <button
                                            onClick={handleConnectWallet}
                                            disabled={isConnecting}
                                            className="btn btn-primary d-flex align-items-center font-16 ms-3 text-uppercase"
                                        >
                                            {isConnecting ? 'Connecting...' : 'Buy $POCO'}
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleDisconnectWallet}
                                            className="btn btn-primary d-flex align-items-center font-14 text-uppercase ms-3"
                                            title={address}
                                        >
                                            <span className="text-truncate" style={{ maxWidth: '100px' }}>
                                                {formattedAddress}
                                            </span>
                                        </button>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div _ngcontent-ng-c47258724 className="header d-block d-lg-none">
                    <div
                        _ngcontent-ng-c47258724
                        className="d-flex justify-content-between align-items-center flex-grow-1 w-100"
                    >
                        <div
                            _ngcontent-ng-c47258724
                            className="d-flex justify-content-start align-items-center"
                        >
                            <a
                                _ngcontent-ng-c47258724
                                className="cursor-pointer p-0"
                                href="/en"
                            >
                                <img
                                    _ngcontent-ng-c47258724
                                    src="/assets/images/png/token.webp"
                                    height={40}
                                    width={40}
                                    alt=""
                                    loading="eager"
                                />
                            </a>
                        </div>
                        <div _ngcontent-ng-c47258724 className="menu-btn">
                            <svg-icon _ngcontent-ng-c47258724 ngh={0}>
                                <svg
                                    width={32}
                                    height={26}
                                    viewBox="0 0 32 26"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    _ngcontent-ng-c47258724
                                    aria-hidden="true"
                                    style={{ width: "24px", height: "24px" }}
                                >
                                    <path
                                        d="M30.3086 1.79199H2.30859"
                                        stroke="#ffffff"
                                        strokeWidth="2.94737"
                                        strokeLinecap="square"
                                        _ngcontent-ng-c47258724
                                    />
                                    <path
                                        d="M30.3086 12.8447H2.30859"
                                        stroke="#ffffff"
                                        strokeWidth="2.94737"
                                        strokeLinecap="square"
                                        _ngcontent-ng-c47258724
                                    />
                                    <path
                                        d="M30.3086 23.8975H2.30859"
                                        stroke="#ffffff"
                                        strokeWidth="2.94737"
                                        strokeLinecap="square"
                                        _ngcontent-ng-c47258724
                                    />
                                </svg>
                            </svg-icon>
                        </div>
                    </div>

                </div>
            </app-header>
            <router-outlet _ngcontent-ng-c1255992284 />
            <app-home _nghost-ng-c1460779089 ngh={0}>
                <app-banner _ngcontent-ng-c14607790 ngh={3}>
                    <section

                        id="home"
                        className="banner position-relative"
                    >
                        <app-sticky-banner

                            _nghost-ng-c1353104898
                            ngh={0}
                        >
                            <div
                                _ngcontent-ng-c1353104898
                                className="top-bar justify-content-between align-items-center d-flex"
                            >
                                <div _ngcontent-ng-c1353104898 className="top-bar_left">
                                    <h3
                                        _ngcontent-ng-c1353104898
                                        translate
                                        className="text-white text-uppercase font-18 font-md-20 m-0"
                                    >
                                        BREAKING:
                                    </h3>
                                </div>
                                <marquee
                                    _ngcontent-ng-c1353104898
                                    onmouseover="this.stop();"
                                    onmouseout="this.start();"
                                    direction="left"
                                    className="top-bar_right marquee"
                                >
                                    <div _ngcontent-ng-c1353104898 className="track">
                                        <div
                                            _ngcontent-ng-c1353104898
                                            className="d-flex align-items-center"
                                        >
                                            <h4
                                                _ngcontent-ng-c1353104898
                                                className="text-white font-20 m-0"
                                            >
                                                <span _ngcontent-ng-c1353104898 className="px-4">
                                                    Pepeto releases its exchange
                                                </span>
                                            </h4>
                                            <h4
                                                _ngcontent-ng-c1353104898
                                                className="text-white font-20 m-0"
                                            >
                                                {" "}
                                                |
                                                <span _ngcontent-ng-c1353104898 className="px-4">
                                                    The God of frogs is ready to reveal the truth
                                                </span>
                                            </h4>
                                            <h4
                                                _ngcontent-ng-c1353104898
                                                className="text-white font-20 m-0"
                                            >
                                                {" "}
                                                |
                                                <span _ngcontent-ng-c1353104898 className="px-4">
                                                    Pepeto, takes the world of memecoins to the next level
                                                </span>
                                            </h4>
                                            <h4
                                                _ngcontent-ng-c1353104898
                                                className="text-white font-20 m-0"
                                            >
                                                {" "}
                                                |
                                                <span _ngcontent-ng-c1353104898 className="px-4">
                                                    Pepeto releases its exchange
                                                </span>
                                            </h4>
                                            <h4
                                                _ngcontent-ng-c1353104898
                                                className="text-white font-20 m-0"
                                            >
                                                {" "}
                                                |
                                                <span _ngcontent-ng-c1353104898 className="px-4">
                                                    The God of frogs is ready to reveal the truth
                                                </span>
                                            </h4>
                                            <h4
                                                _ngcontent-ng-c1353104898
                                                className="text-white font-20 m-0"
                                            >
                                                {" "}
                                                |
                                                <span _ngcontent-ng-c1353104898 className="px-4">
                                                    Pepeto, takes the world of memecoins to the next level
                                                </span>
                                            </h4>
                                            <h4
                                                _ngcontent-ng-c1353104898
                                                className="text-white font-20 m-0"
                                            >
                                                {" "}
                                                |
                                                <span _ngcontent-ng-c1353104898 className="px-4">
                                                    Pepeto releases its exchange
                                                </span>
                                            </h4>
                                            <h4
                                                _ngcontent-ng-c1353104898
                                                className="text-white font-20 m-0"
                                            >
                                                {" "}
                                                |
                                                <span _ngcontent-ng-c1353104898 className="px-4">
                                                    The God of frogs is ready to reveal the truth
                                                </span>
                                            </h4>
                                            <h4
                                                _ngcontent-ng-c1353104898
                                                className="text-white font-20 m-0"
                                            >
                                                {" "}
                                                |
                                                <span _ngcontent-ng-c1353104898 className="px-4">
                                                    Pepeto, takes the world of memecoins to the next level
                                                </span>
                                            </h4>
                                            <h4
                                                _ngcontent-ng-c1353104898
                                                className="text-white font-20 m-0"
                                            >
                                                {" "}
                                                |
                                                <span _ngcontent-ng-c1353104898 className="px-4">
                                                    Pepeto releases its exchange
                                                </span>
                                            </h4>
                                            <h4
                                                _ngcontent-ng-c1353104898
                                                className="text-white font-20 m-0"
                                            >
                                                {" "}
                                                |
                                                <span _ngcontent-ng-c1353104898 className="px-4">
                                                    The God of frogs is ready to reveal the truth
                                                </span>
                                            </h4>
                                            <h4
                                                _ngcontent-ng-c1353104898
                                                className="text-white font-20 m-0"
                                            >
                                                {" "}
                                                |
                                                <span _ngcontent-ng-c1353104898 className="px-4">
                                                    Pepeto, takes the world of memecoins to the next level
                                                </span>
                                            </h4>
                                            <h4
                                                _ngcontent-ng-c1353104898
                                                className="text-white font-20 m-0"
                                            >
                                                {" "}
                                                |
                                                <span _ngcontent-ng-c1353104898 className="px-4">
                                                    Pepeto releases its exchange
                                                </span>
                                            </h4>
                                            <h4
                                                _ngcontent-ng-c1353104898
                                                className="text-white font-20 m-0"
                                            >
                                                {" "}
                                                |
                                                <span _ngcontent-ng-c1353104898 className="px-4">
                                                    The God of frogs is ready to reveal the truth
                                                </span>
                                            </h4>
                                            <h4
                                                _ngcontent-ng-c1353104898
                                                className="text-white font-20 m-0"
                                            >
                                                {" "}
                                                |
                                                <span _ngcontent-ng-c1353104898 className="px-4">
                                                    Pepeto, takes the world of memecoins to the next level
                                                </span>
                                            </h4>
                                            <h4
                                                _ngcontent-ng-c1353104898
                                                className="text-white font-20 m-0"
                                            >
                                                {" "}
                                                |
                                                <span _ngcontent-ng-c1353104898 className="px-4">
                                                    Pepeto releases its exchange
                                                </span>
                                            </h4>
                                            <h4
                                                _ngcontent-ng-c1353104898
                                                className="text-white font-20 m-0"
                                            >
                                                {" "}
                                                |
                                                <span _ngcontent-ng-c1353104898 className="px-4">
                                                    The God of frogs is ready to reveal the truth
                                                </span>
                                            </h4>
                                            <h4
                                                _ngcontent-ng-c1353104898
                                                className="text-white font-20 m-0"
                                            >
                                                {" "}
                                                |
                                                <span _ngcontent-ng-c1353104898 className="px-4">
                                                    Pepeto, takes the world of memecoins to the next level
                                                </span>
                                            </h4>
                                            <h4
                                                _ngcontent-ng-c1353104898
                                                className="text-white font-20 m-0"
                                            >
                                                {" "}
                                                |
                                                <span _ngcontent-ng-c1353104898 className="px-4">
                                                    Pepeto releases its exchange
                                                </span>
                                            </h4>
                                            <h4
                                                _ngcontent-ng-c1353104898
                                                className="text-white font-20 m-0"
                                            >
                                                {" "}
                                                |
                                                <span _ngcontent-ng-c1353104898 className="px-4">
                                                    The God of frogs is ready to reveal the truth
                                                </span>
                                            </h4>
                                            <h4
                                                _ngcontent-ng-c1353104898
                                                className="text-white font-20 m-0"
                                            >
                                                {" "}
                                                |
                                                <span _ngcontent-ng-c1353104898 className="px-4">
                                                    Pepeto, takes the world of memecoins to the next level
                                                </span>
                                            </h4>
                                            <h4
                                                _ngcontent-ng-c1353104898
                                                className="text-white font-20 m-0"
                                            >
                                                {" "}
                                                |
                                                <span _ngcontent-ng-c1353104898 className="px-4">
                                                    POCO releases its exchange
                                                </span>
                                            </h4>
                                            <h4
                                                _ngcontent-ng-c1353104898
                                                className="text-white font-20 m-0"
                                            >
                                                {" "}
                                                |
                                                <span _ngcontent-ng-c1353104898 className="px-4">
                                                    The God of frogs is ready to reveal the truth
                                                </span>
                                            </h4>
                                            <h4
                                                _ngcontent-ng-c1353104898
                                                className="text-white font-20 m-0"
                                            >
                                                {" "}
                                                |
                                                <span _ngcontent-ng-c1353104898 className="px-4">
                                                    POCO, takes the world of memecoins to the next level
                                                </span>
                                            </h4>
                                        </div>
                                    </div>
                                </marquee>
                            </div>
                        </app-sticky-banner>
                        <div className="container mt-lg-5 mt-4 pr-32 pl-32">
                            <div className="bannerSec row">
                                <div className="col-12 col-md-7 leftSec">
                                    <div className="banner-content">
                                        <h1 className="banner-title">
                                            <span className="d-block">
                                                POCO
                                            </span>
                                            <span className="d-block">
                                                the god of frogs
                                            </span>
                                        </h1>
                                        <h5

                                            className="font-16 fw-normal banner-desc"
                                        >
                                            {" "}
                                            Congrats! You're early to the party! Buy and Stake now
                                            during Presale to max out your rewards before the price
                                            skyrockets!{" "}
                                        </h5>


                                        {/* <div
                                            
                                            className="info-doc d-none d-md-block text-center"
                                        >
                                            <p  className="content no-margin">
                                                {" "}
                                                % staking rewards
                                            </p>
                                            <span
                                                
                                                className="text-center font-14 text-primary d-block"
                                            >
                                                What did Pepe miss? Pepeto's about to drop a game-changing
                                                move
                                            </span>
                                        </div> */}
                                        <img

                                            src="/assets/images/svg-icons/banner-sun.svg"
                                            alt="bg-sun"
                                            loading="eager"
                                            className="img-fluid bg-sun position-absolute mt-5 pt-12"
                                        />
                                        <img

                                            src="/assets/images/gif/banner.gif"
                                            alt="banner-graphic"
                                            loading="eager"
                                            className="img-fluid graphic position-absolute"
                                        />
                                    </div>
                                </div>
                                <div

                                    className="col-12 col-md-5 rightSec align-self-center"
                                >
                                    <div className="walletBox">
                                        <div

                                            className="w-100 d-flex flex-column align-items-center justify-content-start text-center"
                                        >
                                            <p

                                                className="font-24 text-capitalize fw-normal mb-3 font-family-secondary"
                                            >
                                                Buy $POCO Tokens Now
                                            </p>

                                            <div

                                                className="d-flex align-items-center justify-content-center w-100 gap-2 counter"
                                            >
                                                <div
                                                    className="rounded-3 time-card text-center d-flex "
                                                >
                                                    <div className="value">
                                                        0
                                                    </div>
                                                    <div className="indicator">
                                                        Days
                                                    </div>
                                                </div>
                                                <div

                                                    className="rounded-3 time-card text-center"
                                                >
                                                    <div className="value">
                                                        0
                                                    </div>
                                                    <div className="indicator">
                                                        Hours
                                                    </div>
                                                </div>
                                                <div

                                                    className="rounded-3 time-card text-center "
                                                >
                                                    <div className="value">
                                                        0
                                                    </div>
                                                    <div className="indicator">
                                                        Minutes
                                                    </div>
                                                </div>
                                                <div

                                                    className="rounded-3 time-card text-center "
                                                >
                                                    <div className="value">
                                                        0
                                                    </div>
                                                    <div className="indicator">
                                                        Seconds
                                                    </div>
                                                </div>
                                            </div>

                                            <p

                                                className="my-3 fs-7 text-center "
                                            >
                                                <span className="text-uppercase">
                                                    USDT Raised:
                                                </span>
                                                <span

                                                    className="fw-normal font-family-secondary"
                                                >
                                                    {" "}
                                                    $0
                                                </span>
                                                <span

                                                    className="fw-normal text-light font-family-secondary"
                                                >
                                                    {" "}
                                                    / $0
                                                </span>
                                            </p>
                                            <div

                                                data-percent={0}
                                                className="progress "
                                            >
                                                <div className="bar" />
                                                <div className="status ">
                                                    UNTIL PRICE RISE
                                                </div>
                                            </div>

                                            {isConnected && (
                                                <div className="d-flex justify-content-center align-items-center text-center mb-2 font-12 px-3 mt-3">
                                                    <span className="text-uppercase text-success me-2">
                                                        ✓ Connected
                                                    </span>
                                                    <span className="text-light">
                                                        {formattedAddress}
                                                    </span>
                                                    {chain && (
                                                        <span className="text-light ms-2">
                                                            ({chain.name})
                                                        </span>
                                                    )}
                                                </div>
                                            )}

                                            <div

                                                className="d-flex justify-content-center align-items-center text-center mb-2 font-12 px-3 mt-3 "
                                            >
                                                <span className="text-uppercase">
                                                    Your purchased $POCO
                                                </span>
                                                <span className="text-light">
                                                    {" "}
                                                    = 0
                                                </span>
                                                <img

                                                    src="/assets/images/svg-icons/info-icon.svg"
                                                    alt="info-icon"
                                                    loading="eager"
                                                    className="img-fluid ms-2 cursor-pointer"
                                                />
                                            </div>
                                            {/* <div
                                                
                                                className="d-flex justify-content-center align-items-center text-center font-12 px-3 mb-3 "
                                            >
                                                <span  className="text-uppercase">
                                                    Your stakeable $Pepeto
                                                </span>
                                                <span
                                                    
                                                    className="fw-normal text-light"
                                                >
                                                    {" "}
                                                    = 0
                                                </span>
                                                <img
                                                    
                                                    src="/assets/images/svg-icons/info-icon.svg"
                                                    alt="info"
                                                    loading="eager"
                                                    className="img-fluid ms-2 cursor-pointer"
                                                />
                                            </div> */}

                                        </div>
                                        <div className="swapArea">
                                            <p

                                                className="text-center mb-3 font-14 dashTitle"
                                            >
                                                {" "}
                                                1 $POCO = $0.033700000{" "}
                                            </p>
                                            <div

                                                className="tab-container gap-2"
                                            >
                                                <button
                                                    onClick={() => setSelectedPaymentMethod(selectedPaymentMethod === 'BNB' ? 'BNB' : 'ETH')}
                                                    className={`btn text-uppercase gap-2 w-100 ${(selectedPaymentMethod === 'ETH' || selectedPaymentMethod === 'BNB') ? 'selected' : ''}`}
                                                >
                                                    <img
                                                        loading="eager"
                                                        src={selectedPaymentMethod === 'BNB' ? "/assets/images/svg-icons/BNB.svg" : "/assets/images/svg-icons/ETH.svg"}
                                                        alt={selectedPaymentMethod === 'BNB' ? "BNB" : "ETH"}
                                                        className="h-full"
                                                    />
                                                    <span className="fw-normal">
                                                        {selectedPaymentMethod === 'BNB' ? 'BNB' : 'ETH'}
                                                    </span>
                                                </button>
                                                <button
                                                    onClick={() => setSelectedPaymentMethod('USDT')}
                                                    className={`btn text-uppercase gap-2 w-100 ${selectedPaymentMethod === 'USDT' ? 'selected' : ''}`}
                                                >
                                                    <img
                                                        src="/assets/images/svg-icons/usdt.svg"
                                                        className="h-full"
                                                        alt="usdt"
                                                        loading="eager"
                                                    />
                                                    <span className="fw-semibold">
                                                        USDT
                                                    </span>
                                                </button>

                                                {/* card payment */}
                                                {/* <button
                                                    
                                                    className="btn text-uppercase gap-2 w-100"
                                                >
                                                    <img
                                                        
                                                        src="/assets/images/svg-icons/card.svg"
                                                        height={18}
                                                        alt="card"
                                                        loading="eager"
                                                        className="float-start"
                                                    />
                                                    <span  className="fw-semibold">
                                                        Card
                                                    </span>
                                                </button> */}
                                            </div>

                                            <app-swap

                                                _nghost-ng-c2567803703
                                                ngh={2}
                                            >
                                                <div
                                                    _ngcontent-ng-c2567803703
                                                    className="swapSection mt-4 mb-2"
                                                >


                                                    <div
                                                        _ngcontent-ng-c2567803703
                                                        className="body-section mt-2"
                                                    >
                                                        <div _ngcontent-ng-c2567803703 className="row my-2">
                                                            <div
                                                                _ngcontent-ng-c2567803703
                                                                className="col-md-6 pe-md-2"
                                                            >
                                                                <div
                                                                    _ngcontent-ng-c2567803703
                                                                    className="d-flex align-items-center justify-content-between mb-2"
                                                                >
                                                                    <label
                                                                        _ngcontent-ng-c2567803703
                                                                        className="d-block font-12 text-light"
                                                                    >
                                                                        Pay with {selectedPaymentMethod}
                                                                    </label>
                                                                    <div
                                                                        _ngcontent-ng-c2567803703
                                                                        className="text-secondary cursor-pointer font-12"
                                                                    >
                                                                        Max
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    _ngcontent-ng-c2567803703
                                                                    className="amountField d-flex align-items-start"
                                                                >
                                                                    <input
                                                                        _ngcontent-ng-c2567803703
                                                                        type="text"
                                                                        apptwodigitdecimalnumber
                                                                        placeholder={0}
                                                                        className="form-control text-truncate ng-untouched ng-pristine ng-valid"
                                                                        defaultValue={0}
                                                                    />
                                                                    <div
                                                                        _ngcontent-ng-c2567803703
                                                                        className="amountType"
                                                                    >
                                                                        {selectedPaymentMethod === 'ETH' ? (
                                                                            <svg-icon _ngcontent-ng-c2567803703 ngh={0}>
                                                                                <svg
                                                                                    width={50}
                                                                                    height={50}
                                                                                    viewBox="0 0 50 50"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    _ngcontent-ng-c2567803703
                                                                                    aria-hidden="true"
                                                                                    style={{ width: "28px", height: "28px" }}
                                                                                >
                                                                                    <path
                                                                                        d="M25.1435 49.5432C38.7831 49.5432 49.8401 38.4529 49.8401 24.7716C49.8401 11.0902 38.7831 0 25.1435 0C11.5039 0 0.446777 11.0902 0.446777 24.7716C0.446777 38.4529 11.5039 49.5432 25.1435 49.5432Z"
                                                                                        fill="#4793FF"
                                                                                        _ngcontent-ng-c2567803703
                                                                                    />
                                                                                    <path
                                                                                        d="M25.1436 0C38.7613 0 49.8402 11.1125 49.8402 24.7716C49.8402 38.4306 38.7613 49.5432 25.1436 49.5432V0Z"
                                                                                        fill="#5E69E2"
                                                                                        _ngcontent-ng-c2567803703
                                                                                    />
                                                                                    <path
                                                                                        d="M25.1432 43.3244C35.3586 43.3244 43.6399 35.0184 43.6399 24.7717C43.6399 14.5249 35.3586 6.21899 25.1432 6.21899C14.9277 6.21899 6.64648 14.5249 6.64648 24.7717C6.64648 35.0184 14.9277 43.3244 25.1432 43.3244Z"
                                                                                        fill="#2EBEEF"
                                                                                        _ngcontent-ng-c2567803703
                                                                                    />
                                                                                    <path
                                                                                        d="M25.1436 6.21899C35.3427 6.21899 43.6403 14.541 43.6403 24.7717C43.6403 35.0023 35.3427 43.3244 25.1436 43.3244V6.21899Z"
                                                                                        fill="#4793FF"
                                                                                        _ngcontent-ng-c2567803703
                                                                                    />
                                                                                    <path
                                                                                        d="M23.9395 12.3066L16.1896 23.9666C15.8655 24.4533 15.8655 25.0887 16.1896 25.5767L23.9395 37.2367C24.5122 38.0987 25.7747 38.0987 26.3475 37.2367L34.0973 25.5767C34.4215 25.0887 34.4215 24.4533 34.0973 23.9666L26.3475 12.3066C25.7747 11.4445 24.5123 11.4445 23.9395 12.3066Z"
                                                                                        fill="#76E5F6"
                                                                                        _ngcontent-ng-c2567803703
                                                                                    />
                                                                                    <path
                                                                                        d="M25.1436 26.6468V37.8832C25.6024 37.8832 26.0612 37.6677 26.3476 37.2367L34.0975 25.5767C34.2481 25.35 34.3279 25.0912 34.3384 24.8311L25.4273 26.6183C25.3337 26.6369 25.2386 26.6468 25.1436 26.6468Z"
                                                                                        fill="#2EBEEF"
                                                                                        _ngcontent-ng-c2567803703
                                                                                    />
                                                                                    <path
                                                                                        d="M25.143 11.66C24.6842 11.66 24.2254 11.8756 23.939 12.3066L16.1891 23.9666C16.0158 24.2279 15.9361 24.5301 15.9482 24.8311L24.8592 26.6183C24.9529 26.6369 25.048 26.6468 25.143 26.6468V11.66Z"
                                                                                        fill="#C2F4FB"
                                                                                        _ngcontent-ng-c2567803703
                                                                                    />
                                                                                </svg>
                                                                            </svg-icon>
                                                                        ) : selectedPaymentMethod === 'BNB' ? (
                                                                            <img
                                                                                src="/assets/images/svg-icons/BNB.svg"
                                                                                alt="BNB"
                                                                                loading="eager"
                                                                                style={{ width: "28px", height: "28px" }}
                                                                            />
                                                                        ) : (
                                                                            <img
                                                                                src="/assets/images/svg-icons/usdt.svg"
                                                                                alt="USDT"
                                                                                loading="eager"
                                                                                style={{ width: "28px", height: "28px" }}
                                                                            />
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                _ngcontent-ng-c2567803703
                                                                className="col-md-6 ps-md-2 mt-3 mt-md-0"
                                                            >
                                                                <div
                                                                    _ngcontent-ng-c2567803703
                                                                    className="d-flex align-items-center justify-content-between mb-2"
                                                                >
                                                                    <label
                                                                        _ngcontent-ng-c2567803703
                                                                        className="d-block font-12 text-truncate text-light"
                                                                    >
                                                                        Receive $Pepeto
                                                                    </label>
                                                                </div>
                                                                <div
                                                                    _ngcontent-ng-c2567803703
                                                                    className="amountField"
                                                                >
                                                                    <input
                                                                        _ngcontent-ng-c2567803703
                                                                        type="text"
                                                                        apptwodigitdecimalnumber
                                                                        min="minAmount"
                                                                        pattern="\d*"
                                                                        placeholder={0}
                                                                        className="form-control text-truncate ng-untouched ng-pristine ng-valid"
                                                                        defaultValue={0}
                                                                    />
                                                                    <div
                                                                        _ngcontent-ng-c2567803703
                                                                        className="amountType"
                                                                    >
                                                                        <img
                                                                            _ngcontent-ng-c2567803703
                                                                            src="/assets/images/png/token.webp"
                                                                            height={28}
                                                                            width={28}
                                                                            alt=""
                                                                            loading="eager"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                _ngcontent-ng-c2567803703
                                                                className="col-12 text-center fs-8"
                                                            >
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </app-swap>

                                            <div

                                                className="d-flex align-items-center justify-content-center gap-2 mt-4"
                                            >
                                                {!isConnected ? (
                                                    <>
                                                        <button
                                                            onClick={handleConnectWallet}
                                                            disabled={isConnecting}
                                                            className="btn btn-secondary w-50"
                                                        >
                                                            <span>{isConnecting ? 'Connecting...' : 'Connect Wallet'}</span>
                                                        </button>
                                                        <button
                                                            onClick={handleTogglePaymentMethod}
                                                            className="btn btn-secondary w-50 px-2"
                                                            disabled={!isConnected}
                                                        >
                                                            <img
                                                                alt={selectedPaymentMethod === 'BNB' ? 'ETH' : 'BNB'}
                                                                loading="eager"
                                                                className="me-2"
                                                                style={{ height: '16px' }}
                                                                src={selectedPaymentMethod === 'BNB' ? '/assets/images/svg-icons/ETH.svg' : '/assets/images/svg-icons/BNB.svg'}
                                                            />
                                                            <span>Buy with {selectedPaymentMethod === 'BNB' ? 'ETH' : 'BNB'}</span>
                                                        </button>
                                                    </>
                                                ) : (
                                                    <>
                                                        <button
                                                            className="btn btn-primary w-50"
                                                        >
                                                            <span>Buy $POCO</span>
                                                        </button>
                                                        <button
                                                            onClick={handleTogglePaymentMethod}
                                                            className="btn btn-secondary w-50 px-2"
                                                        >
                                                            <img
                                                                alt={selectedPaymentMethod === 'BNB' ? 'ETH' : 'BNB'}
                                                                loading="eager"
                                                                className="me-2"
                                                                style={{ height: '16px' }}
                                                                src={selectedPaymentMethod === 'BNB' ? '/assets/images/svg-icons/ETH.svg' : '/assets/images/svg-icons/BNB.svg'}
                                                            />
                                                            <span>Buy with {selectedPaymentMethod === 'BNB' ? 'ETH' : 'BNB'}</span>
                                                        </button>
                                                    </>
                                                )}
                                            </div>

                                            <div className="mt-3">
                                                <p

                                                    className="font-13 text-center mb-1"
                                                >


                                                </p>
                                                <a

                                                    href="https://metamask.io"
                                                    target="_blank"
                                                    className="m-2 d-block text-decoration-underline text-center mx-auto text-white fw-semibold font-14"
                                                >
                                                    Don't have a wallet?{" "}
                                                </a>

                                                <p

                                                    className="font-14 text-center fw-normal mb-0 flex justify-center align-items-center"
                                                >
                                                    <span >Powered by</span>
                                                    <a

                                                        href="https://web3paymentsolutions.io"
                                                        target="_blank"
                                                    >
                                                        <img

                                                            src="/assets/images/svg-icons/W3P_White.svg"
                                                            alt="W3P_White"
                                                            loading="eager"
                                                            className="poweredByIcon text-tertiary"
                                                        />
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div

                                className="buttons d-flex d-sm-none flex-column align-items-center justify-content-center"
                            >
                                <div className="btn-wrapper my-2">
                                    <span

                                        className="d-block text-center fw-bold mt-2 font-18"
                                    >
                                        Trust and Safety Audits
                                    </span>
                                    <div

                                        className="mb-2 d-flex align-items-center justify-content-between mt-2 mb-2"
                                    >
                                        <a

                                            href="https://coinsult.net/projects/pepeto/"
                                            target="_blank"
                                            className="px-2 w-50 mt-lg-0 mb-lg-0"
                                        >
                                            <img

                                                src="/assets/images/svg-icons/coinsult.svg"
                                                alt="coin-slut"
                                                loading="lazy"
                                                className="w-100"
                                            />
                                        </a>
                                        <a

                                            href="/assets/documents/audit-solidproof.pdf"
                                            target="_blank"
                                            className="px-2 w-50 mt-lg-0 mb-lg-0"
                                        >
                                            <img

                                                src="/assets/images/svg-icons/solidproof.svg"
                                                alt="solid-proof"
                                                loading="lazy"
                                                className="w-100"
                                            />
                                        </a>
                                    </div>
                                </div>
                                <a

                                    target="_blank"
                                    href="#"
                                    className="item exchange my-2"
                                >
                                    <svg-icon

                                        src="./assets/images/svg-icons/from.svg"
                                        className="icon ms-2"
                                        ngh={0}
                                    >
                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"

                                            aria-hidden="true"
                                            style={{ width: "24px", height: "24px" }}
                                        >
                                            <rect
                                                x={4}
                                                y={4}
                                                width={16}
                                                height={16}
                                                rx="3.5"
                                                stroke="#191700"
                                                strokeWidth={2}

                                            />
                                            <path
                                                d="M9 15L15 9M15 9H9M15 9V15"
                                                stroke="#191700"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"

                                            />
                                        </svg>
                                    </svg-icon>{" "}
                                    Exchange{" "}
                                </a>
                                <a

                                    target="_blank"
                                    href="https://etherscan.io/address/0x588B92b0B793A339A21eF89320EcfA49de249503"
                                    className="item contract my-2"
                                >
                                    <svg-icon

                                        src="./assets/images/svg-icons/from.svg"
                                        className="icon ms-2"
                                        ngh={0}
                                    >
                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"

                                            aria-hidden="true"
                                            style={{ width: "24px", height: "24px" }}
                                        >
                                            <rect
                                                x={4}
                                                y={4}
                                                width={16}
                                                height={16}
                                                rx="3.5"
                                                stroke="#191700"
                                                strokeWidth={2}

                                            />
                                            <path
                                                d="M9 15L15 9M15 9H9M15 9V15"
                                                stroke="#191700"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"

                                            />
                                        </svg>
                                    </svg-icon>{" "}
                                    Contract{" "}
                                </a>
                                <a

                                    title="giveaway"
                                    routerlinkactive="active"
                                    className="item contract my-2"
                                    href="/giveaway"
                                >
                                    <svg-icon

                                        src="./assets/images/svg-icons/from.svg"
                                        className="icon ms-2"
                                        ngh={0}
                                    >
                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"

                                            aria-hidden="true"
                                            style={{ width: "24px", height: "24px" }}
                                        >
                                            <rect
                                                x={4}
                                                y={4}
                                                width={16}
                                                height={16}
                                                rx="3.5"
                                                stroke="#191700"
                                                strokeWidth={2}

                                            />
                                            <path
                                                d="M9 15L15 9M15 9H9M15 9V15"
                                                stroke="#191700"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"

                                            />
                                        </svg>
                                    </svg-icon>{" "}
                                    Giveaway{" "}
                                </a>
                            </div>
                        </div>
                    </section>
                </app-banner>
                <app-feature _ngcontent-ng-c1460779089 _nghost-ng-c1205643418 ngh={4}>
                    <section _ngcontent-ng-c1205643418 className="feature-wrapper">
                        <h3
                            _ngcontent-ng-c1205643418
                            className="section-title text-center mt-2"
                        >
                            Featured In
                        </h3>
                        <div
                            _ngcontent-ng-c1205643418
                            className="container-fluid feature py-0 p-0 d-lg-block d-none"
                        >
                            <div _ngcontent-ng-c1205643418 className="marquee p-3">
                                <div _ngcontent-ng-c1205643418 className="track">
                                    <div _ngcontent-ng-c1205643418 className="content">
                                        &nbsp;{" "}
                                        <a
                                            _ngcontent-ng-c1205643418
                                            target="_blank"
                                            href="https://cryptopotato.com/pepeto-the-rising-memecoin-contender-set-to-rival-pepe-in-2025/"
                                        >
                                            <img
                                                _ngcontent-ng-c1205643418
                                                loading="lazy"
                                                alt="featured-img"
                                                src="./assets/images/featured/feature_1.svg"
                                            />
                                        </a>
                                        <a
                                            _ngcontent-ng-c1205643418
                                            target="_blank"
                                            href="https://cryptoslate.com/press-releases/pepeto-the-rising-memecoin-contender-set-to-rival-pepe-in-2025/"
                                        >
                                            <img
                                                _ngcontent-ng-c1205643418
                                                loading="lazy"
                                                alt="featured-img"
                                                src="./assets/images/featured/feature_2.svg"
                                            />
                                        </a>
                                        <a
                                            _ngcontent-ng-c1205643418
                                            target="_blank"
                                            href="https://cryptodaily.co.uk/2024/11/pepeto-the-rising-memecoin-contender-set-to-rival-pepe-in-2025"
                                        >
                                            <img
                                                _ngcontent-ng-c1205643418
                                                loading="lazy"
                                                alt="featured-img"
                                                src="./assets/images/featured/feature_3.svg"
                                            />
                                        </a>
                                        <a
                                            _ngcontent-ng-c1205643418
                                            target="_blank"
                                            href="https://www.cryptotimes.io/2024/11/14/pepeto-the-rising-memecoin-contender-set-to-rival-pepe-in-2025/"
                                        >
                                            <img
                                                _ngcontent-ng-c1205643418
                                                loading="lazy"
                                                alt="featured-img"
                                                src="./assets/images/featured/feature_4.svg"
                                            />
                                        </a>
                                        <a
                                            _ngcontent-ng-c1205643418
                                            target="_blank"
                                            href="https://coinpedia.org/press-release/pepeto-next-memecoin-to-surpass-pepe-in-2025/"
                                        >
                                            <img
                                                _ngcontent-ng-c1205643418
                                                loading="lazy"
                                                alt="featured-img"
                                                src="./assets/images/featured/feature_5.svg"
                                            />
                                        </a>
                                        <a
                                            _ngcontent-ng-c1205643418
                                            target="_blank"
                                            href="https://www.binance.com/en/square/post/15610461587521"
                                        >
                                            <img
                                                _ngcontent-ng-c1205643418
                                                loading="lazy"
                                                alt="featured-img"
                                                src="./assets/images/featured/feature_6.svg"
                                            />
                                        </a>

                                        <a
                                            _ngcontent-ng-c1205643418
                                            target="_blank"
                                            href="https://cryptopotato.com/pepeto-the-rising-memecoin-contender-set-to-rival-pepe-in-2025/"
                                        >
                                            <img
                                                _ngcontent-ng-c1205643418
                                                loading="lazy"
                                                alt="featured-img"
                                                src="./assets/images/featured/feature_1.svg"
                                            />
                                        </a>
                                        <a
                                            _ngcontent-ng-c1205643418
                                            target="_blank"
                                            href="https://cryptoslate.com/press-releases/pepeto-the-rising-memecoin-contender-set-to-rival-pepe-in-2025/"
                                        >
                                            <img
                                                _ngcontent-ng-c1205643418
                                                loading="lazy"
                                                alt="featured-img"
                                                src="./assets/images/featured/feature_2.svg"
                                            />
                                        </a>
                                        <a
                                            _ngcontent-ng-c1205643418
                                            target="_blank"
                                            href="https://cryptodaily.co.uk/2024/11/pepeto-the-rising-memecoin-contender-set-to-rival-pepe-in-2025"
                                        >
                                            <img
                                                _ngcontent-ng-c1205643418
                                                loading="lazy"
                                                alt="featured-img"
                                                src="./assets/images/featured/feature_3.svg"
                                            />
                                        </a>
                                        <a
                                            _ngcontent-ng-c1205643418
                                            target="_blank"
                                            href="https://www.cryptotimes.io/2024/11/14/pepeto-the-rising-memecoin-contender-set-to-rival-pepe-in-2025/"
                                        >
                                            <img
                                                _ngcontent-ng-c1205643418
                                                loading="lazy"
                                                alt="featured-img"
                                                src="./assets/images/featured/feature_4.svg"
                                            />
                                        </a>
                                        <a
                                            _ngcontent-ng-c1205643418
                                            target="_blank"
                                            href="https://coinpedia.org/press-release/pepeto-next-memecoin-to-surpass-pepe-in-2025/"
                                        >
                                            <img
                                                _ngcontent-ng-c1205643418
                                                loading="lazy"
                                                alt="featured-img"
                                                src="./assets/images/featured/feature_5.svg"
                                            />
                                        </a>
                                        <a
                                            _ngcontent-ng-c1205643418
                                            target="_blank"
                                            href="https://www.binance.com/en/square/post/15610461587521"
                                        >
                                            <img
                                                _ngcontent-ng-c1205643418
                                                loading="lazy"
                                                alt="featured-img"
                                                src="./assets/images/featured/feature_6.svg"
                                            />
                                        </a>

                                        <a
                                            _ngcontent-ng-c1205643418
                                            target="_blank"
                                            href="https://cryptopotato.com/pepeto-the-rising-memecoin-contender-set-to-rival-pepe-in-2025/"
                                        >
                                            <img
                                                _ngcontent-ng-c1205643418
                                                loading="lazy"
                                                alt="featured-img"
                                                src="./assets/images/featured/feature_1.svg"
                                            />
                                        </a>
                                        <a
                                            _ngcontent-ng-c1205643418
                                            target="_blank"
                                            href="https://cryptoslate.com/press-releases/pepeto-the-rising-memecoin-contender-set-to-rival-pepe-in-2025/"
                                        >
                                            <img
                                                _ngcontent-ng-c1205643418
                                                loading="lazy"
                                                alt="featured-img"
                                                src="./assets/images/featured/feature_2.svg"
                                            />
                                        </a>
                                        <a
                                            _ngcontent-ng-c1205643418
                                            target="_blank"
                                            href="https://cryptodaily.co.uk/2024/11/pepeto-the-rising-memecoin-contender-set-to-rival-pepe-in-2025"
                                        >
                                            <img
                                                _ngcontent-ng-c1205643418
                                                loading="lazy"
                                                alt="featured-img"
                                                src="./assets/images/featured/feature_3.svg"
                                            />
                                        </a>
                                        <a
                                            _ngcontent-ng-c1205643418
                                            target="_blank"
                                            href="https://www.cryptotimes.io/2024/11/14/pepeto-the-rising-memecoin-contender-set-to-rival-pepe-in-2025/"
                                        >
                                            <img
                                                _ngcontent-ng-c1205643418
                                                loading="lazy"
                                                alt="featured-img"
                                                src="./assets/images/featured/feature_4.svg"
                                            />
                                        </a>
                                        <a
                                            _ngcontent-ng-c1205643418
                                            target="_blank"
                                            href="https://coinpedia.org/press-release/pepeto-next-memecoin-to-surpass-pepe-in-2025/"
                                        >
                                            <img
                                                _ngcontent-ng-c1205643418
                                                loading="lazy"
                                                alt="featured-img"
                                                src="./assets/images/featured/feature_5.svg"
                                            />
                                        </a>
                                        <a
                                            _ngcontent-ng-c1205643418
                                            target="_blank"
                                            href="https://www.binance.com/en/square/post/15610461587521"
                                        >
                                            <img
                                                _ngcontent-ng-c1205643418
                                                loading="lazy"
                                                alt="featured-img"
                                                src="./assets/images/featured/feature_6.svg"
                                            />
                                        </a>

                                        <a
                                            _ngcontent-ng-c1205643418
                                            target="_blank"
                                            href="https://cryptopotato.com/pepeto-the-rising-memecoin-contender-set-to-rival-pepe-in-2025/"
                                        >
                                            <img
                                                _ngcontent-ng-c1205643418
                                                loading="lazy"
                                                alt="featured-img"
                                                src="./assets/images/featured/feature_1.svg"
                                            />
                                        </a>
                                        <a
                                            _ngcontent-ng-c1205643418
                                            target="_blank"
                                            href="https://cryptoslate.com/press-releases/pepeto-the-rising-memecoin-contender-set-to-rival-pepe-in-2025/"
                                        >
                                            <img
                                                _ngcontent-ng-c1205643418
                                                loading="lazy"
                                                alt="featured-img"
                                                src="./assets/images/featured/feature_2.svg"
                                            />
                                        </a>
                                        <a
                                            _ngcontent-ng-c1205643418
                                            target="_blank"
                                            href="https://cryptodaily.co.uk/2024/11/pepeto-the-rising-memecoin-contender-set-to-rival-pepe-in-2025"
                                        >
                                            <img
                                                _ngcontent-ng-c1205643418
                                                loading="lazy"
                                                alt="featured-img"
                                                src="./assets/images/featured/feature_3.svg"
                                            />
                                        </a>
                                        <a
                                            _ngcontent-ng-c1205643418
                                            target="_blank"
                                            href="https://www.cryptotimes.io/2024/11/14/pepeto-the-rising-memecoin-contender-set-to-rival-pepe-in-2025/"
                                        >
                                            <img
                                                _ngcontent-ng-c1205643418
                                                loading="lazy"
                                                alt="featured-img"
                                                src="./assets/images/featured/feature_4.svg"
                                            />
                                        </a>
                                        <a
                                            _ngcontent-ng-c1205643418
                                            target="_blank"
                                            href="https://coinpedia.org/press-release/pepeto-next-memecoin-to-surpass-pepe-in-2025/"
                                        >
                                            <img
                                                _ngcontent-ng-c1205643418
                                                loading="lazy"
                                                alt="featured-img"
                                                src="./assets/images/featured/feature_5.svg"
                                            />
                                        </a>
                                        <a
                                            _ngcontent-ng-c1205643418
                                            target="_blank"
                                            href="https://www.binance.com/en/square/post/15610461587521"
                                        >
                                            <img
                                                _ngcontent-ng-c1205643418
                                                loading="lazy"
                                                alt="featured-img"
                                                src="./assets/images/featured/feature_6.svg"
                                            />
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            _ngcontent-ng-c1205643418
                            className="feature py-0 d-lg-none d-block mt-4"
                        >

                        </div>
                    </section>
                </app-feature>
                <app-media _ngcontent-ng-c1460779089 _nghost-ng-c2966608895 ngh={5}>
                    <section _ngcontent-ng-c2966608895 id="media" className="media">
                        <div _ngcontent-ng-c2966608895 className="container">
                            <div _ngcontent-ng-c2966608895 className="row">
                                <div _ngcontent-ng-c2966608895 className="col-12 col-lg-6">
                                    <h2
                                        _ngcontent-ng-c2966608895
                                        className="font-lg-50 font-40 mt-lg-5 pt-lg-4 text-center text-lg-start"
                                    >
                                        media
                                    </h2>
                                    <div _ngcontent-ng-c2966608895 className="youtubeRow">
                                        <div _ngcontent-ng-c2966608895 className="row">
                                            <div _ngcontent-ng-c2966608895 className="col-6 col-md-4">
                                                <div _ngcontent-ng-c2966608895 className="videoThumb">
                                                    <img
                                                        _ngcontent-ng-c2966608895
                                                        alt="youtube_poster"
                                                        className="thumbnail"
                                                        src="http://img.youtube.com/vi/ojm0kEbtcR0/0.jpg"
                                                    />
                                                    <img
                                                        _ngcontent-ng-c2966608895
                                                        src="/assets/images/png/youtube-icon.png"
                                                        alt="youtube_poster"
                                                        className="youtube-icon"
                                                    />
                                                </div>
                                            </div>
                                            <div _ngcontent-ng-c2966608895 className="col-6 col-md-4">
                                                <div _ngcontent-ng-c2966608895 className="videoThumb">
                                                    <img
                                                        _ngcontent-ng-c2966608895
                                                        alt="youtube_poster"
                                                        className="thumbnail"
                                                        src="http://img.youtube.com/vi/XMiO5cEJ3As/0.jpg"
                                                    />
                                                    <img
                                                        _ngcontent-ng-c2966608895
                                                        src="/assets/images/png/youtube-icon.png"
                                                        alt="youtube_poster"
                                                        className="youtube-icon"
                                                    />
                                                </div>
                                            </div>
                                            <div _ngcontent-ng-c2966608895 className="col-6 col-md-4">
                                                <div _ngcontent-ng-c2966608895 className="videoThumb">
                                                    <img
                                                        _ngcontent-ng-c2966608895
                                                        alt="youtube_poster"
                                                        className="thumbnail"
                                                        src="http://img.youtube.com/vi/gxuiubF7mw8/0.jpg"
                                                    />
                                                    <img
                                                        _ngcontent-ng-c2966608895
                                                        src="/assets/images/png/youtube-icon.png"
                                                        alt="youtube_poster"
                                                        className="youtube-icon"
                                                    />
                                                </div>
                                            </div>
                                            <div _ngcontent-ng-c2966608895 className="col-6 col-md-4">
                                                <div _ngcontent-ng-c2966608895 className="videoThumb">
                                                    <img
                                                        _ngcontent-ng-c2966608895
                                                        alt="youtube_poster"
                                                        className="thumbnail"
                                                        src="http://img.youtube.com/vi/F9cTelXAAHc/0.jpg"
                                                    />
                                                    <img
                                                        _ngcontent-ng-c2966608895
                                                        src="/assets/images/png/youtube-icon.png"
                                                        alt="youtube_poster"
                                                        className="youtube-icon"
                                                    />
                                                </div>
                                            </div>
                                            <div _ngcontent-ng-c2966608895 className="col-6 col-md-4">
                                                <div _ngcontent-ng-c2966608895 className="videoThumb">
                                                    <img
                                                        _ngcontent-ng-c2966608895
                                                        alt="youtube_poster"
                                                        className="thumbnail"
                                                        src="http://img.youtube.com/vi/9QH1ch87J3M/0.jpg"
                                                    />
                                                    <img
                                                        _ngcontent-ng-c2966608895
                                                        src="/assets/images/png/youtube-icon.png"
                                                        alt="youtube_poster"
                                                        className="youtube-icon"
                                                    />
                                                </div>
                                            </div>
                                            <div _ngcontent-ng-c2966608895 className="col-6 col-md-4">
                                                <div _ngcontent-ng-c2966608895 className="videoThumb">
                                                    <img
                                                        _ngcontent-ng-c2966608895
                                                        alt="youtube_poster"
                                                        className="thumbnail"
                                                        src="http://img.youtube.com/vi/x7BE-FXYf6I/0.jpg"
                                                    />
                                                    <img
                                                        _ngcontent-ng-c2966608895
                                                        src="/assets/images/png/youtube-icon.png"
                                                        alt="youtube_poster"
                                                        className="youtube-icon"
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div
                                    _ngcontent-ng-c2966608895
                                    className="col-12 col-lg-6 align-self-end"
                                >
                                    <img
                                        _ngcontent-ng-c2966608895
                                        src="/assets/images/gif/paparazi.gif"
                                        alt="reporters"
                                        className="reporters mb-3 mb-sm-0"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </app-media>
                <app-about _ngcontent-ng-c1460779089 _nghost-ng-c1227115905 ngh={0}>
                    <section _ngcontent-ng-c1227115905 id="about" className="about">
                        <div _ngcontent-ng-c1227115905 className="container">
                            <div _ngcontent-ng-c1227115905 className="row">
                                <div _ngcontent-ng-c1227115905 className="col-12 col-lg-6">
                                    <h2
                                        _ngcontent-ng-c1227115905
                                        className="font-lg-50 font-40 mt-lg-5 pt-lg-4 text-center text-lg-start"
                                    >
                                        {" "}
                                        Who is the god of frogs{" "}
                                    </h2>
                                    <p
                                        _ngcontent-ng-c1227115905
                                        className="font-16 text-center text-lg-start"
                                    >
                                        {" "}
                                        Pepeto returns with true power—Technology and Optimization. He
                                        holds the missing pieces Pepe could never understand. Beyond
                                        strength, Pepeto brings wisdom and unity, creating an exchange
                                        that adopts all memecoins, giving them real value and a place
                                        to thrive. This is the revolution Pepe could never achieve.{" "}
                                    </p>
                                    <p
                                        _ngcontent-ng-c1227115905
                                        className="font-16 text-center text-lg-start"
                                    >
                                        {" "}
                                        Read the whitepaper to know the full story{" "}
                                    </p>
                                    <a
                                        _ngcontent-ng-c1227115905
                                        target="_blank"
                                        href="/assets/documents/whitepaper.pdf?v2=true"
                                        className="px-4 btn btn-white font-16"
                                    >
                                        <img
                                            _ngcontent-ng-c1227115905
                                            src="/assets/images/svg-icons/knowledge.svg"
                                            alt=""
                                            loading="lazy"
                                            className="book"
                                        />
                                        <span _ngcontent-ng-c1227115905 className="ps-2">
                                            Whitepaper
                                        </span>
                                    </a>
                                </div>
                                <div
                                    _ngcontent-ng-c1227115905
                                    className="col-12 col-lg-6 mt-0 mt-md-5 mt-lg-0"
                                >
                                    <img
                                        _ngcontent-ng-c1227115905
                                        src="/assets/images/gif/about-right.gif"
                                        alt="about-right"
                                        loading="lazy"
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            _ngcontent-ng-c1227115905
                            className="gradient position-absolute"
                        />
                    </section>
                </app-about>
                <app-token-value _ngcontent-ng-c1460779089 _nghost-ng-c2871691664 ngh={6}>
                    <section _ngcontent-ng-c2871691664 className="token">
                        <div
                            _ngcontent-ng-c2871691664
                            className="container position-relative"
                        >
                            <div _ngcontent-ng-c2871691664 className="row">
                                <div _ngcontent-ng-c2871691664 className="col-12 col-lg-7">
                                    <h2
                                        _ngcontent-ng-c2871691664
                                        className="section-title text-center text-lg-start"
                                    >
                                        {" "}
                                        Value of $POCO Token{" "}
                                    </h2>
                                    <p
                                        _ngcontent-ng-c2871691664
                                        className="font-16 text-center text-lg-start"
                                    >
                                        {" "}
                                        Under the watchful guidance of Pepeto, the god of frogs, the
                                        $PEPETO token stands as a symbol of trust and strength. Fully
                                        audited, with its smart contract code openly disclosed, it
                                        ensures complete transparency and security for all users. It’s
                                        the foundation of Pepeto’s vision of wisdom, safety, and unity
                                        for the crypto community.{" "}
                                    </p>
                                    <div _ngcontent-ng-c2871691664 className="col-12">
                                        <ValueCarousel />
                                    </div>
                                </div>
                                <div
                                    _ngcontent-ng-c2871691664
                                    className="col-12 col-lg-2 graphic-wrapper"
                                >
                                    <img
                                        _ngcontent-ng-c2871691664
                                        src="/assets/images/gif/value-graphic.gif"
                                        alt="value-graphic"
                                        className="animation-img d-none d-lg-block"
                                    />
                                </div>
                                <div
                                    _ngcontent-ng-c2871691664
                                    className="col-12 d-none d-lg-flex col-lg-3 mt-5 mt-lg-0"
                                >
                                    <div
                                        _ngcontent-ng-c2871691664
                                        className="buttons d-flex flex-column align-items-center justify-content-center"
                                    >
                                        <div _ngcontent-ng-c2871691664 className="btn-wrapper">
                                            <span
                                                _ngcontent-ng-c2871691664
                                                className="d-block text-center fw-bold mt-2 font-18"
                                            >
                                                Trust and Safety Audits
                                            </span>
                                            <div
                                                _ngcontent-ng-c2871691664
                                                className="d-flex align-items-center justify-content-between mt-2 mb-2"
                                            >
                                                <a
                                                    _ngcontent-ng-c2871691664
                                                    href="https://coinsult.net/projects/pepeto/"
                                                    target="_blank"
                                                    className="px-2 w-50 mt-lg-0 mb-lg-0"
                                                >
                                                    <img
                                                        _ngcontent-ng-c2871691664
                                                        src="/assets/images/svg-icons/coinsult.svg"
                                                        alt="coin-slut"
                                                        loading="lazy"
                                                        className="w-100"
                                                    />
                                                </a>
                                                <a
                                                    _ngcontent-ng-c2871691664
                                                    href="/assets/documents/audit-solidproof.pdf"
                                                    target="_blank"
                                                    className="px-2 w-50 mt-lg-0 mb-lg-0"
                                                >
                                                    <img
                                                        _ngcontent-ng-c2871691664
                                                        src="/assets/images/svg-icons/solidproof.svg"
                                                        alt="solid-proof"
                                                        loading="lazy"
                                                        className="w-100"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <a
                                            _ngcontent-ng-c2871691664
                                            target="_blank"
                                            href="#"
                                            className="item exchange"
                                        >
                                            <svg-icon
                                                _ngcontent-ng-c2871691664
                                                src="./assets/images/svg-icons/from.svg"
                                                className="icon ms-2"
                                                ngh={0}
                                            >
                                                {/* <svg
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    _ngcontent-ng-c2871691664
                                                    aria-hidden="true"
                                                    style={{ width: "24px", height: "24px" }}
                                                >
                                                    <rect
                                                        x={4}
                                                        y={4}
                                                        width={16}
                                                        height={16}
                                                        rx="3.5"
                                                        stroke="#191700"
                                                        strokeWidth={2}
                                                        _ngcontent-ng-c2871691664
                                                    />
                                                    <path
                                                        d="M9 15L15 9M15 9H9M15 9V15"
                                                        stroke="#191700"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        _ngcontent-ng-c2871691664
                                                    />
                                                </svg> */}
                                            </svg-icon>{" "}
                                            Exchange{" "}
                                        </a>
                                        <a
                                            _ngcontent-ng-c2871691664
                                            target="_blank"
                                            href="https://etherscan.io/address/0x588B92b0B793A339A21eF89320EcfA49de249503"
                                            className="item contract"
                                        >
                                            <svg-icon
                                                _ngcontent-ng-c2871691664
                                                src="./assets/images/svg-icons/from.svg"
                                                className="icon ms-2"
                                                ngh={0}
                                            >
                                                {/* <svg
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    _ngcontent-ng-c2871691664
                                                    aria-hidden="true"
                                                    style={{ width: "24px", height: "24px" }}
                                                >
                                                    <rect
                                                        x={4}
                                                        y={4}
                                                        width={16}
                                                        height={16}
                                                        rx="3.5"
                                                        stroke="#191700"
                                                        strokeWidth={2}
                                                        _ngcontent-ng-c2871691664
                                                    />
                                                    <path
                                                        d="M9 15L15 9M15 9H9M15 9V15"
                                                        stroke="#191700"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        _ngcontent-ng-c2871691664
                                                    />
                                                </svg> */}
                                            </svg-icon>{" "}
                                            Contract{" "}
                                        </a>
                                        <a
                                            _ngcontent-ng-c2871691664
                                            title="giveaway"
                                            routerlinkactive="active"
                                            className="item contract my-2"
                                            href="/giveaway"
                                        >
                                            <svg-icon
                                                _ngcontent-ng-c2871691664
                                                src="./assets/images/svg-icons/from.svg"
                                                className="icon ms-2"
                                                ngh={0}
                                            >
                                                {/* <svg
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    _ngcontent-ng-c2871691664
                                                    aria-hidden="true"
                                                    style={{ width: "24px", height: "24px" }}
                                                >
                                                    <rect
                                                        x={4}
                                                        y={4}
                                                        width={16}
                                                        height={16}
                                                        rx="3.5"
                                                        stroke="#191700"
                                                        strokeWidth={2}
                                                        _ngcontent-ng-c2871691664
                                                    />
                                                    <path
                                                        d="M9 15L15 9M15 9H9M15 9V15"
                                                        stroke="#191700"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        _ngcontent-ng-c2871691664
                                                    />
                                                </svg> */}
                                            </svg-icon>{" "}
                                            Giveaway{" "}
                                        </a>
                                    </div>
                                </div>
                                {/* <img
                                    _ngcontent-ng-c2871691664
                                    src="/assets/images/gif/value-graphic.gif"
                                    alt="value-graphic"
                                    className="animation-img d-block d-lg-none mx-auto"
                                /> */}

                            </div>
                        </div>
                    </section>
                </app-token-value>
                <app-bridge _ngcontent-ng-c1460779089 _nghost-ng-c63405296 ngh={0}>
                    <section _ngcontent-ng-c63405296 id="bridge" className="bridge">
                        <h2
                            _ngcontent-ng-c63405296
                            className="font-lg-50 font-40 text-center"
                        >
                            POCO bridge
                        </h2>
                        <p
                            _ngcontent-ng-c63405296
                            className="font-16 text-center text-center desc px-3 px-md-0"
                        >
                            Pepeto’s bridge isn’t just a tool; it embodies his wisdom and
                            unifying power, connecting different blockchain worlds. As part of
                            the Technology he mastered, the bridge allows assets to move
                            seamlessly using a lock and mint mechanism—locking tokens on one
                            chain while minting equivalents on another.{" "}
                        </p>
                        <div
                            _ngcontent-ng-c63405296
                            className="mt-5 d-flex justify-content-end align-items-center align-items-center flex-wrap flex-md-nowrap"
                        >
                            <div
                                _ngcontent-ng-c63405296
                                className="bridge-img align-self-end order-2 order-md-1"
                            >
                                <img
                                    _ngcontent-ng-c63405296
                                    src="/assets/images/gif/bridge.gif"
                                    alt="about-right"
                                    loading="lazy"
                                    className="img-fluid"
                                />
                            </div>
                            <div
                                _ngcontent-ng-c63405296
                                className="content-wrapper order-1 order-md-2 text-center text-md-start"
                            >
                                <div
                                    _ngcontent-ng-c63405296
                                    className="box green font-16 text-center text-md-start mb-4"
                                >
                                    <h4 _ngcontent-ng-c63405296 className="mb-0">
                                        <span _ngcontent-ng-c63405296 className="title d-block">
                                            Are you a token owner?
                                        </span>
                                        <span _ngcontent-ng-c63405296 className="title d-block">
                                            You believed in the God of frogs!
                                        </span>
                                    </h4>
                                    <p _ngcontent-ng-c63405296 className="desc font-16 my-2">
                                        Pepeto Exchange offers benefits:
                                    </p>
                                    <p _ngcontent-ng-c63405296 className="para">
                                        <span _ngcontent-ng-c63405296>Zero Fees</span> No listing
                                        costs, boosting liquidity.
                                    </p>
                                    <p _ngcontent-ng-c63405296 className="para">
                                        <span _ngcontent-ng-c63405296>Top Security</span> Enhanced
                                        asset protection.
                                    </p>
                                    <p _ngcontent-ng-c63405296 className="para">
                                        <span _ngcontent-ng-c63405296>Cross-Chain Bridge</span> Smooth
                                        blockchain integration.
                                    </p>
                                    <p _ngcontent-ng-c63405296 className="para mb-0">
                                        <span _ngcontent-ng-c63405296>Legitimacy</span> Scam-prone
                                        tokens are rejected, ensuring trust.
                                    </p>
                                </div>
                                <div
                                    _ngcontent-ng-c63405296
                                    className="box orange font-16 text-center text-md-start"
                                >
                                    <h4 _ngcontent-ng-c63405296 className="mb-0 title">
                                        No corruption{" "}
                                    </h4>
                                    <p _ngcontent-ng-c63405296 className="para mt-2">
                                        If your project merits a listing, it will be granted with FULL
                                        integrity. Should any support be needed, the God of Frogs will
                                        guide you.
                                    </p>
                                </div>
                                <a
                                    _ngcontent-ng-c63405296
                                    target="_blank"
                                    href="https://docs.google.com/forms/u/0/d/1hs-tE2_P4PDK3DCJGK2EXCfzxVV1w88ZoKhSTDT7Rjs/viewform?edit_requested=true"
                                    className="btn btn-secondary d-inline-block mt-4 py-4 px-5"
                                >
                                    {" "}
                                    Apply Now{" "}
                                </a>
                            </div>
                        </div>
                    </section>
                </app-bridge>
                <app-tokenomics _ngcontent-ng-c1460779089 _nghost-ng-c2552277527 ngh={7}>
                    <section
                        _ngcontent-ng-c2552277527
                        id="tokenomics"
                        className="tokenomics"
                    >
                        <div _ngcontent-ng-c2552277527 className="container">
                            <h2 _ngcontent-ng-c2552277527 className="text-center font-50 mb-5">
                                Tokenomics
                            </h2>
                            <img
                                _ngcontent-ng-c2552277527
                                src="/assets/images/gif/tokenomics-bg.gif"
                                alt="tokenomics-img"
                                loading="lazy"
                                className="img-fluid left-img"
                            />
                            <div
                                _ngcontent-ng-c2552277527
                                className="d-none d-lg-flex justify-content-end"
                            >
                                <div _ngcontent-ng-c2552277527 className="d-flex gap-3 boxx mt-5">
                                    <div _ngcontent-ng-c2552277527 className="boxs">
                                        <div _ngcontent-ng-c2552277527 className="progress mb-4">
                                            <div
                                                _ngcontent-ng-c2552277527
                                                className="bar"
                                                style={{ width: "40%" }}
                                            />
                                        </div>
                                        <h3 _ngcontent-ng-c2552277527 className="font-20">
                                            Presale: 30%
                                        </h3>
                                        <p
                                            _ngcontent-ng-c2552277527
                                            className="font-16 text-secondary"
                                        >
                                            Presale: 30% of the total supply will be allocated to the
                                            presale phase, ensuring enough liquidity and participation
                                            to jumpstart the project.
                                        </p>
                                    </div>
                                    <div _ngcontent-ng-c2552277527 className="boxs">
                                        <div _ngcontent-ng-c2552277527 className="progress mb-4">
                                            <div
                                                _ngcontent-ng-c2552277527
                                                className="bar"
                                                style={{ width: "40%" }}
                                            />
                                        </div>
                                        <h3 _ngcontent-ng-c2552277527 className="font-20">
                                            Staking: 30%
                                        </h3>
                                        <p
                                            _ngcontent-ng-c2552277527
                                            className="font-16 text-secondary"
                                        >
                                            Staking: 30% of the total supply will be reserved for
                                            staking rewards, incentivizing long-term holders and
                                            fostering a stable ecosystem.
                                        </p>
                                    </div>
                                    <div _ngcontent-ng-c2552277527 className="boxs">
                                        <div _ngcontent-ng-c2552277527 className="progress mb-4">
                                            <div
                                                _ngcontent-ng-c2552277527
                                                className="bar"
                                                style={{ width: "30%" }}
                                            />
                                        </div>
                                        <h3 _ngcontent-ng-c2552277527 className="font-20">
                                            Marketing: 20%
                                        </h3>
                                        <p
                                            _ngcontent-ng-c2552277527
                                            className="font-16 text-secondary"
                                        >
                                            Marketing: 20% will be dedicated to marketing efforts,
                                            including partnerships with influencers, social media
                                            promotions, and broader campaigns to drive mass adoption.
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div
                                _ngcontent-ng-c2552277527
                                className="d-none d-lg-flex justify-content-end"
                            >
                                <div
                                    _ngcontent-ng-c2552277527
                                    className="d-flex justify-content-end gap-3 boxx mt-5"
                                >
                                    <div _ngcontent-ng-c2552277527 className="boxs">
                                        <div _ngcontent-ng-c2552277527 className="progress mb-4">
                                            <div
                                                _ngcontent-ng-c2552277527
                                                className="bar"
                                                style={{ width: "5%" }}
                                            />
                                        </div>
                                        <h3 _ngcontent-ng-c2552277527 className="font-20">
                                            Project Development: 7.5%
                                        </h3>
                                        <p
                                            _ngcontent-ng-c2552277527
                                            className="font-16 text-secondary"
                                        >
                                            Project Development: 7.5% will be allocated for ongoing
                                            project development, ensuring that Pepeto continues to
                                            evolve and improve post-launch.
                                        </p>
                                    </div>
                                    <div _ngcontent-ng-c2552277527 className="boxs">
                                        <div _ngcontent-ng-c2552277527 className="progress mb-4">
                                            <div
                                                _ngcontent-ng-c2552277527
                                                className="bar"
                                                style={{ width: "10%" }}
                                            />
                                        </div>
                                        <h3 _ngcontent-ng-c2552277527 className="font-20">
                                            Liquidity: 12.5%
                                        </h3>
                                        <p
                                            _ngcontent-ng-c2552277527
                                            className="font-16 text-secondary"
                                        >
                                            Liquidity: 12.5% will be reserved to maintain healthy
                                            liquidity across exchanges, ensuring smooth trading and
                                            stability.
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </section>
                </app-tokenomics>
                <app-how-to-buy _ngcontent-ng-c1460779089 _nghost-ng-c1403131371 ngh={8}>
                    <section
                        _ngcontent-ng-c1403131371
                        id="how-to-buy"
                        className="how-to-buy"
                    >
                        <div _ngcontent-ng-c1403131371 className="container">
                            <h2
                                _ngcontent-ng-c1403131371
                                className="font-lg-50 font-40 pt-lg-4 section-title text-center text-lg-start mb-5"
                            >
                                How to buy $PEPETO
                            </h2>
                            <div _ngcontent-ng-c1403131371 className="row d-none d-lg-flex">
                                <div _ngcontent-ng-c1403131371 className="col-lg-8">
                                    <div _ngcontent-ng-c1403131371 className="row">
                                        <div _ngcontent-ng-c1403131371 className="col-lg-4">
                                            <div _ngcontent-ng-c1403131371 className="box">
                                                <h3 _ngcontent-ng-c1403131371 className="title">
                                                    1. Create your Metamask wallet
                                                </h3>
                                                <p _ngcontent-ng-c1403131371 className="mb-0">
                                                    If you already have a compatible wallet–go to step 2. If
                                                    not, we suggest Metamask for desktop. On mobile, we
                                                    recommend Best Wallet: Simply download the app to get
                                                    started!
                                                </p>
                                            </div>
                                        </div>
                                        <div _ngcontent-ng-c1403131371 className="col-lg-4">
                                            <div _ngcontent-ng-c1403131371 className="box">
                                                <h3 _ngcontent-ng-c1403131371 className="title">
                                                    2. Load Wallet With Crypto
                                                </h3>
                                                <p _ngcontent-ng-c1403131371 className="mb-0">
                                                    Paying by card? Go to step 3. If paying by crypto, load
                                                    your favourite crypto onto your wallet. ETH, USDT, and
                                                    BNB are accepted.
                                                </p>
                                            </div>
                                        </div>
                                        <div _ngcontent-ng-c1403131371 className="col-lg-4">
                                            <div _ngcontent-ng-c1403131371 className="box">
                                                <h3 _ngcontent-ng-c1403131371 className="title">
                                                    3. Buy and Stake $PEPETO
                                                </h3>
                                                <p _ngcontent-ng-c1403131371 className="mb-0">
                                                    Want more Gains? Connect your wallet to the website.
                                                    Choose a payment method. Choose the amount of $PEPETO
                                                    you want to buy–then Buy or Buy and Stake for max gains.
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div _ngcontent-ng-c1403131371 className="d-block d-lg-none w-100">

                        </div>
                        <img
                            _ngcontent-ng-c1403131371
                            src="/assets/images/gif/howtobuy.gif"
                            alt=""
                            className="img-fluid howTobuy-img"
                        />
                    </section>
                </app-how-to-buy>
                <app-roadmap _ngcontent-ng-c1460779089 _nghost-ng-c1117491813 ngh={9}>
                    <section _ngcontent-ng-c1117491813 id="roadmap" className="roadmap">
                        <div _ngcontent-ng-c1117491813 className="container">
                            <div _ngcontent-ng-c1117491813 className="row">
                                <h2
                                    _ngcontent-ng-c1117491813
                                    className="font-lg-50 font-40 mt-lg-2 pt-lg-4 section-title text-center mb-5"
                                >
                                    ROADMAP
                                </h2>
                                <div
                                    _ngcontent-ng-c1117491813
                                    className="col-12 col-lg-6 items align-self-center mt-md-5"
                                >
                                    <RoadmapCarousel />
                                </div>
                                <div
                                    _ngcontent-ng-c1117491813
                                    className="col-12 col-lg-6 gif-wrapper align-self-center"
                                >
                                    <div _ngcontent-ng-c1117491813 className="img-item">
                                        <img
                                            _ngcontent-ng-c1117491813
                                            src="/assets/images/gif/god.gif"
                                            alt="god"
                                            loading="lazy"
                                            className="img-fluid god"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </app-roadmap>
                <div _ngcontent-ng-c1460779089 className="image">
                    <app-faq _ngcontent-ng-c1460779089 _nghost-ng-c1475096245 ngh={11}>
                        <section
                            _ngcontent-ng-c1475096245
                            id="faq"
                            className="sectionGap faq"
                        >
                            <div _ngcontent-ng-c1475096245 className="container">
                                <div
                                    _ngcontent-ng-c1475096245
                                    className="row d-flex align-items-center justify-content-center"
                                >
                                    <div _ngcontent-ng-c1475096245 className="col-12 col-lg-5">
                                        <div _ngcontent-ng-c1475096245 className="graphic-wrap">
                                            <img
                                                _ngcontent-ng-c1475096245
                                                src="/assets/images/gif/faq2.gif"
                                                alt="thinking-pepeto"
                                                loading="lazy"
                                                className="img-fluid graphic"
                                            />
                                        </div>
                                        <h2
                                            _ngcontent-ng-c1475096245
                                            className="font-40 d-block d-lg-none fw-bold section-title"
                                        >
                                            FAQ
                                        </h2>
                                    </div>
                                    <div _ngcontent-ng-c1475096245 className="col-12 col-lg-7">
                                        <h2
                                            _ngcontent-ng-c1475096245
                                            className="d-none d-lg-block section-title mx-auto text-center"
                                        >
                                            <span _ngcontent-ng-c1475096245 className="text-white">
                                                FAQ
                                            </span>
                                        </h2>
                                        <div _ngcontent-ng-c1475096245 className="faq-wrapper pt-4">
                                            <FAQAccordion />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </app-faq>
                    <img
                        _ngcontent-ng-c1460779089
                        src="/assets/images/svg-icons/pepe-god.svg"
                        alt="pepe god"
                        loading="lazy"
                        className="img-fluid god d-none d-lg-block"
                    />
                    <app-footer _ngcontent-ng-c1460779089 _nghost-ng-c625574470 ngh={12}>
                        <section _ngcontent-ng-c625574470 id="footer" className="footer">
                            <div _ngcontent-ng-c625574470 className="container">
                                <div
                                    _ngcontent-ng-c625574470
                                    className="d-flex justify-content-center gap-3"
                                >
                                    <a
                                        _ngcontent-ng-c625574470
                                        target="_blank"
                                        className="link m-0"
                                        href="https://x.com/Pepetocoin"
                                    >
                                        <img
                                            _ngcontent-ng-c625574470
                                            loading="lazy"
                                            src="assets/images/svg-icons/social-icons/twitter.svg"
                                            alt="twitter"
                                        />
                                    </a>
                                    <a
                                        _ngcontent-ng-c625574470
                                        target="_blank"
                                        className="link m-0"
                                        href="https://t.me/pepeto_channel"
                                    >
                                        <img
                                            _ngcontent-ng-c625574470
                                            loading="lazy"
                                            src="assets/images/svg-icons/social-icons/telegram.svg"
                                            alt="telegram"
                                        />
                                    </a>
                                    <a
                                        _ngcontent-ng-c625574470
                                        target="_blank"
                                        className="link m-0"
                                        href="https://www.instagram.com/pepetocoin/"
                                    >
                                        <img
                                            _ngcontent-ng-c625574470
                                            loading="lazy"
                                            src="assets/images/svg-icons/social-icons/instagram.svg"
                                            alt="instagram"
                                        />
                                    </a>
                                    <a
                                        _ngcontent-ng-c625574470
                                        target="_blank"
                                        className="link m-0"
                                        href="https://www.youtube.com/@Pepetocoin"
                                    >
                                        <img
                                            _ngcontent-ng-c625574470
                                            loading="lazy"
                                            src="assets/images/svg-icons/social-icons/youtube.svg"
                                            alt="youtube"
                                        />
                                    </a>

                                </div>
                                <div
                                    _ngcontent-ng-c625574470
                                    className="d-flex justify-content-center routes py-lg-5 pt-5"
                                >
                                    <a
                                        _ngcontent-ng-c625574470
                                        className="mx-2 font-18"
                                        title="about"
                                        href="/en#about"
                                    >
                                        Who Is PEPETO?{" "}
                                    </a>
                                    <a
                                        _ngcontent-ng-c625574470
                                        className="mx-2 font-18"
                                        title="how-to-buy"
                                        href="/en#how-to-buy"
                                    >
                                        How To Buy{" "}
                                    </a>
                                    <a
                                        _ngcontent-ng-c625574470
                                        className="mx-2 font-18"
                                        title="tokenomics"
                                        href="/en#tokenomics"
                                    >
                                        Tokenomics{" "}
                                    </a>
                                    <a
                                        _ngcontent-ng-c625574470
                                        className="mx-2 font-18"
                                        title="roadmap"
                                        href="/en#roadmap"
                                    >
                                        Roadmap{" "}
                                    </a>
                                    <a
                                        _ngcontent-ng-c625574470
                                        className="mx-2 font-18"
                                        title="faq"
                                        href="/en#faq"
                                    >
                                        FAQS
                                    </a>

                                </div>
                                <div
                                    _ngcontent-ng-c625574470
                                    className="d-flex justify-content-center flex-column"
                                >
                                    <img
                                        _ngcontent-ng-c625574470
                                        src="/assets/images/png/logo.webp"
                                        width="152px"
                                        height="53px"
                                        alt="logo"
                                        loading="lazy"
                                        className="img-fluid mx-auto"
                                    />
                                    <p
                                        _ngcontent-ng-c625574470
                                        className="font-16 text-center copyright"
                                    >
                                        PEPETO © 2025. All rights reserved.
                                    </p>
                                    <p
                                        _ngcontent-ng-c625574470
                                        className="font-16 pt-4 no-margin text-center disclaimer"
                                    >
                                        The crypto market can be volatile. Be aware of tax
                                        obligations, as profits may be subject to capital gains or
                                        other taxes depending on your location.
                                    </p>
                                    <p
                                        _ngcontent-ng-c625574470
                                        className="font-16 text-center disclaimer"
                                    >
                                        Regulations differ across regions, so it's essential to
                                        understand the rules that apply to you. Do thorough research
                                        and only invest what you can afford to lose.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </app-footer>
                </div>
            </app-home>
            {/**/}
        </app-language>
    );
};

export default Home;