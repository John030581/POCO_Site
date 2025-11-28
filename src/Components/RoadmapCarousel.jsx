import { useState } from 'react';
import './RoadmapCarousel.css';

const RoadmapCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [slideDirection, setSlideDirection] = useState('next');

    const roadmapData = [
        {
            quarter: 'Q4 2025',
            title: 'Website Launch: The official POCO',
            items: [
                'Token Contract Creation',
                'Establishment of Social Media Channels',
                'First Exchange Listing',
                'Marketing campaigns'
            ]
        },
        {
            quarter: 'Q1 2026',
            title: 'POCO\'s Call to Action',
            items: [
                'Audit and Public Disclosure of Smart Contract',
                'AMA Sessions on Twitter',
                'Second and Third Exchange Listing',
                'Community Building Campaigns'
            ]
        },
        {
            quarter: 'Q2 2026',
            title: 'POCO\'s Evolution',
            items: [
                'Bridge and Exchange Test Launch',
                'Fourth and Fifth Exchange Listing',
                'Extensive Marketing Campaigns',
                'POCO Exchange Platform Launch'
            ]
        },
        {
            quarter: 'Q3 2026',
            title: 'POCO\'s Ascent',
            items: [
                'Final AMA Sessions',
                'Community Staking Platform Release',
                'Ongoing Marketing and Mass Adoption Initiatives'
            ]
        }
    ];

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setSlideDirection('next');
        setCurrentIndex((prev) => (prev + 1) % roadmapData.length);
        setTimeout(() => setIsAnimating(false), 600);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setSlideDirection('prev');
        setCurrentIndex((prev) => (prev - 1 + roadmapData.length) % roadmapData.length);
        setTimeout(() => setIsAnimating(false), 600);
    };

    const getVisibleCards = () => {
        const currentCard = roadmapData[currentIndex];
        const nextIndex = (currentIndex + 1) % roadmapData.length;
        const nextCard = roadmapData[nextIndex];
        
        return [
            { ...currentCard, isSelected: true },
            { ...nextCard, isSelected: false }
        ];
    };

    return (
        <div className="roadmap-carousel-wrapper">
            <div className="roadmap-carousel-container">
                <div className={`roadmap-cards-container ${isAnimating ? 'animating' : ''} ${isAnimating ? `direction-${slideDirection}` : ''}`}>
                    {getVisibleCards().map((item, index) => (
                        <div
                            key={`${currentIndex}-${index}`}
                            className={`roadmap-card ${item.isSelected ? 'selected' : 'next'} ${isAnimating ? 'slide-animation' : ''}`}
                        >
                            <div className="roadmap-card-content">
                                <div className="roadmap-icon">
                                    <img 
                                        src="/assets/images/svg-icons/content-board.svg" 
                                        alt="roadmap card"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="roadmap-text">
                                    <h3 className="roadmap-quarter">{item.quarter}:</h3>
                                    <h4 className="roadmap-title">{item.title}</h4>
                                    <ul className="roadmap-items">
                                        {item.items.map((listItem, itemIndex) => (
                                            <li key={itemIndex}>• {listItem}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="roadmap-navigation">
                    <button 
                        className="roadmap-nav-btn prev-btn" 
                        onClick={prevSlide}
                        aria-label="Previous roadmap item"
                    >
                        <img 
                            src="/assets/images/svg-icons/left-arrow.svg" 
                            alt="Previous" 
                            loading="lazy"
                        />
                    </button>

                    <button 
                        className="roadmap-nav-btn next-btn" 
                        onClick={nextSlide}
                        aria-label="Next roadmap item"
                    >
                        <img 
                            src="/assets/images/svg-icons/right-arrow.svg" 
                            alt="Next" 
                            loading="lazy"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RoadmapCarousel;