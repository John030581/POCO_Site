import { useState } from 'react';
import './FAQAccordion.css';

const FAQAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqItems = [
        {
            id: 1,
            question: "Who is the God of frog?",
            answer: "Pepeto is the God of Frogs, embodying wisdom and power. His value comes from mastering \"Technology\" and \"Optimization,\" the key components Pepe missed. While Pepe stole four documents, he overlooked these crucial pieces, making him incomplete. Pepeto's bridge technology connects blockchains, ensuring secure and transparent transfers. He symbolizes innovation, fairness, and the future of decentralized systems, bringing what Pepe couldn't: the complete solution."
        },
        {
            id: 2,
            question: "When can I claim my Tokens?",
            answer: "The claiming process uses secure Web3Toolkit technology, allowing you to claim tokens after the presale ends. Simply reconnect your wallet, such as MetaMask, and click \"claim.\" Additionally, Web3Payments enables staking of your tokens once they've been claimed."
        },
        {
            id: 3,
            question: "What is Pepetoswap? Why is it better?",
            answer: "Pepeto Exchange is designed with several standout features that make it superior:\n\n1. Zero Fees\n2. Cross-Chain Bridge: Seamless interoperability between multiple blockchains ensures easy and flexible token transfers.\n3. Honest and Corruption-Free: As the God of Frogs, Pepeto guarantees a fair and transparent platform. Only deserving tokens are listed, ensuring no favoritism or corruption in the process.\n4. Security and Trust\n5. Supportive Environment: Pepeto offers assistance for new projects, fostering growth and success for all worthy participants.\n\nThis combination of fairness, innovation, and security makes Pepeto Exchange stand out."
        },
        {
            id: 4,
            question: "When will Pepeto be released?",
            answer: "Pepeto exchange and ecosystem will be released once the presale has ended! AKA the day of judgment."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-accordion">
            {faqItems.map((item, index) => (
                <div key={item.id} className="accordion-item">
                    <button
                        className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <span className="accordion-title">{item.question}</span>
                        <img
                            src="/assets/images/svg-icons/arrow-up.svg"
                            alt="arrow"
                            className="accordion-icon"
                            loading="lazy"
                        />
                    </button>
                    {activeIndex === index && (
                        <div className="accordion-body">
                            <div className="accordion-content">
                                {item.answer.split('\n\n').map((paragraph, idx) => (
                                    <p key={idx} className="para fw-normal">
                                        {paragraph.split('\n').map((line, lineIdx) => (
                                            <span key={lineIdx}>
                                                {line}
                                                {lineIdx < paragraph.split('\n').length - 1 && <br />}
                                            </span>
                                        ))}
                                    </p>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;
