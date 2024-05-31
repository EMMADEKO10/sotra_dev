import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/Navbars/NavBar';
import { useState, useEffect } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const OneProjet = () => {
    const collectedAmount = 500; // Montant collecté
    const targetAmount = 1000; // Objectif

    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageURL, setSelectedImageURL] = useState(null);

    const handleImageUpload = ({ file }) => {
        if (file) {
            setSelectedImage(file); // Update the state with the selected file
        }
    };

    useEffect(() => {
        if (selectedImage) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setSelectedImageURL(event.target.result); // Set the base64 URL in state
            };
            reader.readAsDataURL(selectedImage);
        }
    }, [selectedImage]);

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4 lg:flex lg:gap-5 lg:ml-24 lg:mr-24">
                <div className="lg:w-3/5 p-4 shadow-lg mb-8 lg:mb-0">
                    <div className="relative mb-10">
                        <img src="assets/img/media/2-students-in-World-Bank-ACEESD.jpg" alt="Project" className="w-full h-auto rounded-lg shadow-md" />
                        <Upload accept=".jpg,.jpeg,.png" onChange={handleImageUpload} className="absolute top-2 right-2">
                            <Button icon={<UploadOutlined />}>Edit Background</Button>
                        </Upload>
                    </div>

                    {selectedImageURL && <img src={selectedImageURL} alt="Selected" className="w-full h-auto mb-4 rounded-lg shadow-md" />}

                    <div>
                        <ShareInfo />
                        <ArticleHeader />
                        <hr className="block h-0.5 my-2 bg-gray-200 border-none" />
                        <UserProfile />
                    </div>
                </div>

                <div className="lg:w-2/5 shadow-sm p-4 bg-white rounded-lg">
                    <FundingProgressBar />

                    <div className="mt-8">
                        <h1 className="text-2xl mb-4 font-semibold text-gray-700">Progression du projet</h1>
                        <div className="flex items-center justify-center bg-gray-50 p-4 rounded-lg shadow-md">
                            <ProgressBar collected={collectedAmount} target={targetAmount} />
                        </div>
                    </div>

                    <FundingInfo />
                </div>
            </div>
        </div>
    );
}

export default OneProjet;

function ArticleHeader() {
    return (
        <p className="font-bold text-gray-700 text-lg mt-4">
            Article
        </p>
    );
}

function ProgressBar({ collected, target }) {
    const percentage = Math.min((collected / target) * 100, 100);

    return (
        <div className="w-full p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700 font-medium">Montant Collecté</span>
                <span className="text-gray-700 font-medium">{`${percentage.toFixed(2)}%`}</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4">
                <div
                    className="bg-green-500 h-4 rounded-full"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                <span>{`Objectif: ${target}€`}</span>
                <span>{`${collected}€ collecté`}</span>
            </div>
        </div>
    );
}

ProgressBar.propTypes = {
    collected: PropTypes.number.isRequired,
    target: PropTypes.number.isRequired,
};

function FundingProgressBar() {
    const collected = 80;
    const target = 5000;
    const percentage = (collected / target) * 100;
    const daysLeft = 26;

    return (
        <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="text-xs text-center mb-2">Montant collecté</p>
            <div className="text-center mb-2">
                <span className="text-lg font-semibold">{collected}&nbsp;$US</span>
            </div>
            <progress className="progress w-full h-4 bg-gray-300 rounded-full overflow-hidden" max="100" value={percentage} />
            <div className="flex justify-between items-center text-xs mt-2">
                <div>{percentage.toFixed(1)}%</div>
                <div className="text-right font-semibold">Objectif&nbsp;{target.toLocaleString()}&nbsp;$US</div>
            </div>
            <p className="text-center mt-6 text-sm">
                <span className="text-gray-600">Jours restants</span>
                <span className="ml-2 font-bold">{daysLeft} jours</span>
            </p>
            <div className="bg-white p-2 rounded-lg mt-6">
                <a className="button w-full bg-[#00d1b2] text-white py-2 rounded-md flex items-center justify-center mb-4 mt-4">
                    <span className="icon mr-2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dollar-sign" className="svg-inline--fa fa-dollar-sign w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path fill="currentColor" d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.4-1.1-19.8c-1.6-3.5-4.8-7.5-10.8-11.3c-17.2-11.3-42.7-18.3-75.8-27.5l-2.9-.8c-28.4-7.6-63-17.4-88.5-33.9c-14.5-9-28.1-21.3-36.6-38.7c-8.4-16.9-10.1-36.1-6.5-56.6c7-40.4 35.5-67.7 67.8-82.2c13.6-6.1 28.3-10.5 44.1-13.1V32c0-17.7 14.3-32 32-32z"></path>
                        </svg>
                    </span>
                    <span>Financer</span>
                </a>
            </div>
        </div>
    );
}

function UserProfile() {
    return (
        <div className="flex items-center mt-4 mb-4">
            <img src="assets/img/brand/favicon.png" alt="User Avatar" className="w-12 h-12 rounded-full shadow-lg" />
            <div className="ml-2">
                <p className="text-gray-700 font-semibold">Samir OMAR</p>
                <p className="text-sm text-gray-500">samir.omar@univ-thies.sn</p>
            </div>
        </div>
    );
}

function ShareInfo() {
    return (
        <div className="flex items-center justify-end mb-4">
            <FontAwesomeIcon icon={faShareNodes} className="text-gray-600 text-lg" />
            <span className="ml-2 text-sm font-medium text-gray-600">Partager</span>
        </div>
    );
}

function FundingInfo() {
    return (
        <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl mb-4 font-semibold text-gray-700">Funding Info</h2>
            <p className="text-gray-600">Détails sur le financement du projet...</p>
        </div>
    );
}
