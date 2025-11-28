import { useState } from 'react';
import './ValueCarousel.css';

const ValueCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            icon: '/assets/images/svg-icons/efficiency.svg',
            title: 'Efficiency',
            subtitle: 'Maximize Gains, Minimize waste',
            description: 'Efficiency focuses resources to get maximum returns. Investors can trust in a system designed to deliver high-value outcomes at low cost, with a sophisticated model that rewards early investors.'
        },
        {
            icon: '/assets/images/svg-icons/technology.svg',
            title: 'Technology',
            subtitle: 'Real innovation for true value',
            description: 'Technology is the backbone of $POCO, bringing scalability and powerful exchange for investors. Unlike others, which lack real technological strength, POCO has built a solid foundation to support long-term value.'
        },
        {
            icon: '/assets/images/svg-icons/optimisation.svg',
            title: 'Optimisation',
            subtitle: 'Future proof growth',
            description: 'Optimization ensures peak performance, maximizing returns and preventing price dumps. POCO is designed for stability and sustainable community growth, safeguarding investor confidence.'
        },
        {
            icon: '/assets/images/svg-icons/power.svg',
            title: 'Power',
            subtitle: 'Harness community strength',
            description: 'Power drives POCO forward through collective participation. As an investor, you\'re part of a growing force that builds impact together.'
        },
        {
            icon: '/assets/images/svg-icons/energy.svg',
            title: 'Energy',
            subtitle: 'Fuel for continuous Growth',
            description: 'Energy keeps the ecosystem alive and always moving forward. Investors benefit from a dynamic project that\'s always in action, driving new opportunities.',
            note: 'Check roadmap for further updates'
        },
        {
            icon: '/assets/images/svg-icons/power.svg',
            title: 'Precision',
            subtitle: 'Every move counts',
            description: 'Precision means strategic, calculated decisions to optimize benefits and reduce risks. Every step is taken to provide value to investors.',
            note: 'All will be shared & discussed through POCO\'s social'
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    const getVisibleCards = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % cards.length;
            visible.push(cards[index]);
        }
        return visible;
    };

    return (
        <div className="value-carousel-wrapper">
            <div className="carousel-container">
                <div className='flex flex-col items-center mb-4 w-full'>
                    <div className="carousel-track w-full" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {getVisibleCards().map((card, index) => {
                            const isActive = index === 1; // center card
                            const cardStyle = {
                                // use a unified card background image (value-card.webp)
                                backgroundImage: `url('/assets/images/png/value-card.webp')`,
                                backgroundSize: '100% 80%', // Show original image without cropping
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',

                                // scale active card up and shrink the sides
                                transform: isActive ? 'scale(1.18)' : 'scale(0.86)',
                                transition: 'transform 280ms ease, margin 280ms ease, z-index 0ms',

                                // overlap the cards: left card will be covered ~25% by the center, right too
                                marginRight: index === 0 ? '-10%' : undefined,
                                marginLeft: index === 2 ? '-10%' : undefined,

                                // ensure center is on top
                                zIndex: isActive ? 1 : (index === 0 ? 1 : 0),

                                // fixed card sizing so overlap behaves predictably
                                width: isActive ? 340 : 260,
                                height: 420,
                                boxSizing: 'border-box',
                                padding: 20,
                                borderRadius: 12,
                                overflow: 'visible', // Changed from hidden to visible to show full icon

                                // make this a positioning context for the overlapping icon
                                position: 'relative',
                            };

                            return (
                                <div
                                    key={`${currentIndex}-${index}`}
                                    className={`carousel-card ${isActive ? 'active' : ''} item-center`}
                                    style={cardStyle}
                                    aria-hidden={isActive ? 'false' : 'true'}
                                >
                                    {/* Icon now rendered as an absolutely positioned element that overlaps the top edge */}
                                    <img
                                        src={card.icon}
                                        alt={`${card.title} icon`}
                                        loading="lazy"
                                        style={{
                                            position: 'absolute',
                                            left: '50%',
                                            top: 0,
                                            // Same overlap ratio for both selected and unselected cards (50% overlap)
                                            transform: 'translate(-50%, -50%)',
                                            // size the icon larger for active card
                                            width: isActive ? 100 : 80,
                                            height: 'auto',
                                            pointerEvents: 'none',
                                            zIndex: 1,
                                            transition: 'transform 280ms ease, width 280ms ease'
                                        }}
                                    />

                                    {/* Keep content in a semi-opaque overlay so text remains readable over the background image */}
                                    <div className="card-inner" style={{
                                        width: '100%',
                                        height: '100%',
                                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.45) 70%)',
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        borderRadius: 12,
                                        padding: '18px',
                                        paddingTop: '60px'
                                    }}>
                                        <div className="card-content" style={{ color: '#fff' }}>
                                            <h3 className="card-title" style={{ margin: 0, paddingTop: '16px' }}>{card.title}</h3>
                                            <p className="card-subtitle" style={{ margin: '6px 0', opacity: 0.95 }}>{card.subtitle}</p>
                                            <p className="card-description" style={{ marginTop: 8, fontSize: 14 }}>{card.description}</p>
                                            {card.note && <p className="card-note" style={{ marginTop: 8, fontSize: 13, opacity: 0.9 }}>{card.note}</p>}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="carousel-controls mt-4 flex items-center justify-center gap-4">
                        <button
                            className="carousel-nav-btn prev-btn"
                            onClick={prevSlide}
                            aria-label="Previous slide"
                        >
                            <img
                                src="/assets/images/png/left-slider.webp"
                                alt="Previous"
                                loading="lazy"
                            />
                        </button>

                        <button
                            className="carousel-nav-btn next-btn"
                            onClick={nextSlide}
                            aria-label="Next slide"
                        >
                            <img
                                src="/assets/images/png/right-slider.webp"
                                alt="Next"
                                loading="lazy"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ValueCarousel;
