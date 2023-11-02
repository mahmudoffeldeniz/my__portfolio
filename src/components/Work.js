import React, { useState } from 'react';
import Img1 from '../assets/portfolio/1.webp';
import Img2 from '../assets/portfolio/2.webp';
import Img3 from '../assets/portfolio/3.webp';
import Img4 from '../assets/portfolio/4.webp';
import Img5 from '../assets/portfolio/5.webp';
import Img6 from '../assets/portfolio/6.webp';

const certificates = [
    {
        id: 1,
        title: 'Web Site',
        image: Img1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aperiam asperiores atque debitis fugiat quam sequi tenetur vero!\n',
    },
    {
        id: 2,
        title: 'Web Site',
        image: Img2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aperiam asperiores atque debitis fugiat quam sequi tenetur vero!\n',
    },
    {
        id: 3,
        title: 'Web Site',
        image: Img3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aperiam asperiores atque debitis fugiat quam sequi tenetur vero!\n',
    },
    {
        id: 4,
        title: 'Web Site',
        image: Img4,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aperiam asperiores atque debitis fugiat quam sequi tenetur vero!\n',
    },
    {
        id: 5,
        title: 'Web Site',
        image: Img5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aperiam asperiores atque debitis fugiat quam sequi tenetur vero!\n',
    },
    {
        id: 6,
        title: 'Web Site',
        image: Img6,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aperiam asperiores atque debitis fugiat quam sequi tenetur vero!\n',
    },
];

function Work() {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const openCertificateModal = (certificate) => {
        setSelectedCertificate(certificate);
    };

    const closeCertificateModal = () => {
        setSelectedCertificate(null);
    };

    return (
        <div className="container overflow-hidden mx-auto mt-24" id="portfolio">
            <h2 className="h2 text-accent text-center mb-4" id='work'>My Portfolio</h2>
            <h3 className="text-accent text-center font-secondary font-medium h3">Last Websites I Created</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {certificates.map((certificate) => (
                    <div
                        key={certificate.id}
                        className="relative cursor-pointer"
                        onClick={() => openCertificateModal(certificate)}
                    >
                        <div className="overflow-hidden rounded-lg ">
                            <img
                                src={certificate.image}
                                alt={certificate.title}
                                className="w-full h-auto rounded-lg object-cover transform scale-100 overflow-hidden  transition-transform hover:scale-105"
                            />
                        </div>
                        <div className="absolute duration-300 top-0 left-0 w-full h-full opacity-0 bg-black rounded-lg overflow-hidden  transition-opacity lg:hover:opacity-60">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                <h2 className="text-white  hover:text-accent cursor-pointer">Learn More</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedCertificate && (
                <div className="fixed overflow-hidden top-0 left-0 w-full z-50 h-full flex items-center justify-center">
                    <div className="bg-white p-4 shadow-lg rounded-lg">
                        <img src={selectedCertificate.image} alt={selectedCertificate.title} className="w-full h-64 rounded-lg border-2 object-cover mb-4" />
                        <h2 className="text-xl text-accent font-semibold mb-2">{selectedCertificate.title}</h2>
                        <p className="text-gray-600 lg:w-[400px] mb-4">{selectedCertificate.description}</p>
                        <button
                            onClick={closeCertificateModal}
                            className="btn text-white px-4 py-2 rounded-lg bg-accent hover:bg-blue-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Work;
