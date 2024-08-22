import React from 'react';
import './solution.css';
import solutionImage1 from '../../assets/solution1.png';
import solutionImage2 from '../../assets/solution2.jpg';
import benchmarkingImage from '../../assets/benchmarking.jpg';
import satisfaction1 from '../../assets/satisfaction1.png';

const Solutions = () => {
    return (
        <div className="solutions-container">
            <section className="hero">
                <h1 className="hero-title">Our Solutions</h1>
                <p className="hero-description">
                    Explore our range of solutions designed to optimize your social media performance.
                </p>
            </section>
            <section className="solution">
                <div className="solution-item">
                    <img src={solutionImage1} alt="Analytics & Reporting" className="solution-image" />
                    <div className="solution-details">
                        <h2 className="solution-title">Analytics & Reporting</h2>
                        <p className="solution-description">
                            Gain valuable insights with advanced analytics and reporting tools.
                        </p>
                    </div>
                </div>
                <div className="solution-item">
                    <img src={solutionImage2} alt="Community Management" className="solution-image" />
                    <div className="solution-details">
                        <h2 className="solution-title">Community Management</h2>
                        <p className="solution-description">
                            Streamline community interactions with a centralized management system.
                        </p>
                    </div>
                </div>
                <div className="solution-item">
                    <img src={benchmarkingImage} alt="Performance Analysis" className="solution-image" />
                    <div className="solution-details">
                        <h2 className="solution-title">Performance Analysis</h2>
                        <p className="solution-description">
                            Compare your social media performance against competitors and industry standards.
                        </p>
                    </div>
                </div>

                <div className="solution-item">
                    <img src={satisfaction1} alt="Satisfaction" className="solution-image" />
                    <div className="solution-details">
                        <h2 className="solution-title">Customer Satisfaction Assessment</h2>
                        <p className="solution-description">
                        Identify new growth opportunities and develop strategies to enter new markets or segments.
                        </p>
                    </div>
                </div>
            </section>
            <section className="cta">
                <p className="cta-text">
                    Ready to boost your social media performance? <a href="/signup">Sign Up</a> for 360° MarkBanch today.
                </p>
            </section>
        </div>
    );
};

export default Solutions;