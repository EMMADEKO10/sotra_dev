import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

const OneProjet = () => {

    const collectedAmount = 500; // Montant collecté
    const targetAmount = 1000; // Objectif
    return (
        <div className="flex shadow-sm gap-5 lg:ml-24 lg:mr-24">
            <div className="w-[60%] p-4 shadow">
                <div className=' shadow-lg'>
                    <div className="mb-[100px]">
                        <img src="assets/img/media/2-students-in-World-Bank-ACEESD.jpg" alt="" />
                    </div>

                    <div>
                        
                        <ShareInfo />
                        <ArticleHeader />
                        <hr className="block h-0.5 my-2 mt-2 bg-gray-200 border-none" />
                        <UserProfile />
                    </div>
                </div>

            </div>
            <div className="w-[35%] shadow-sm">


                <FundingProgressBar />

                <div className="container mx-auto p-4">
                    <h1 className="text-2xl mb-4">Progression du projet</h1>
                    <div className="flex items-center justify-center bg-gray-50">
                        <ProgressBar collected={collectedAmount} target={targetAmount} />
                    </div>
                </div>

                <FundingInfo />

            </div>
        </div>
    )
}

export default OneProjet


function ArticleHeader() {
    return (
        <p className="font-bold text-gray-600 text-lg sm:text-base mt-1 pr-4 pl-4">
            Article
        </p>
    );
}



function ProgressBar({ collected, target }) {
    const percentage = Math.min((collected / target) * 100, 100);

    return (
        <div className="w-full p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-1">
                <span className="text-gray-700 font-medium">Montant Collecté</span>
                <span className="text-gray-700 font-medium">{`${percentage.toFixed(2)}%`}</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4">
                <div
                    className="bg-green-500 h-4 rounded-full"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <div className="flex justify-between items-center mt-1 text-sm text-gray-600">
                <span>{`Objectif: ${target}€`}</span>
                <span>{`${collected}€ collecté`}</span>
            </div>
        </div>
    );
}


ProgressBar.propTypes = {
    collected: PropTypes.number.isRequired, // percentage doit être un nombre et est requis
    target: PropTypes.number.isRequired, // amountGiven doit être un nombre et est requis
};















function FundingProgressBar() {
    const collected = 80;
    const target = 5000;
    const percentage = (collected / target) * 100;
    const daysLeft = 26;

    return (
        <div className="mt-1 md:mt-32 bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="text-xs text-center mb-2">Montant collecté</p>
            <div className="text-center mb-2">
                <span className="text-lg font-semibold">{collected}&nbsp;$US</span>
            </div>
            <progress className="progress w-full h-4 bg-gray-300 rounded-full overflow-hidden" max="100" value={percentage} />
            <div className="flex justify-between items-center text-xs mt-2">
                <div>{percentage.toFixed(1)}%</div>
                <div className="text-right font-semibold">Objectif&nbsp;{target.toLocaleString()}&nbsp;$US</div>
            </div>
            <p className="text-center mt-6 mb-6 text-sm">
                <span className="text-gray-600">Jours restants</span>
                <span className="ml-2 font-bold">{daysLeft} jours</span>
            </p>
            <div className="bg-white p-2 rounded-lg mb-4">
                <a className="button w-full bg-[#00d1b2] text-white py-2 rounded-md flex items-center justify-center mb-4 mt-4">
                    <span className="icon mr-2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dollar-sign" className="svg-inline--fa fa-dollar-sign w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path fill="currentColor" d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"></path>
                        </svg>
                    </span>
                    <span>Soutien</span>
                </a>
                <div className="text-center text-xs font-bold mb-4">
                    <picture className="inline-flex items-center">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAWCAYAAAChWZ5EAAAAAXNSR0IArs4c6QAAAShJREFUSA3llsFRwzAQRf8Kc8YlcGcGhwrQnRmTlEAF0AElEDoIFRAnBRBXgA0NmA7MPfGy8iEjx7oRr5lBB83uX43frjRai+DG+2sMc/IIZguiSasNNTEXICyQ3D47BLVwMm+Dgw8LYiwxSWeEMptLHveHcRWfcGfAZFVgIQhjagA+D8WUtDjCaWTRNLESsIvZbquu8B89QpHVcgXPRio+MyPCXc2x3IJxRxTES4OQnanaWMOuNT8F1x1BDCWQ4zJdeN/eoFxNxb/2tKOZ/SNgTvC5tnvCx3owuGPIv2DFe5i+kfd3QDmJP5AA40u5aB9XSyNC4SvK9sag2T3IU+xbGSyvAJRI0rnB1awCN67Z5HpJ8At4Zx2PelC/B/SCvxSMqXFx0znyHxNzSAmI4o4xAAAAAElFTkSuQmCC" alt="payment methods" className="h-4 w-4 mr-1" />
                        Vous pouvez utiliser ces méthodes de paiement
                    </picture>
                    <div className="flex justify-center mt-2">
                        <img src="/_nuxt/img/img_credit_card_visa_58px.fb8b4b3.png" alt="Visa" className="h-9 w-auto mr-2" />
                        <img src="/_nuxt/img/img_credit_card_master_58px.d87dd31.png" alt="MasterCard" className="h-9 w-auto mr-2" />
                        <img src="/_nuxt/img/img_credit_card_american_express_58px.16891b3.png" alt="American Express" className="h-9 w-auto mr-2" />
                        <img src="/_nuxt/img/img_crypto_58px.4bfe876.png" alt="Crypto" className="h-9 w-auto" />
                    </div>
                </div>
            </div>
            
            <ShareButton />

            <div className="bg-gray-100 p-3 rounded-lg mt-6 md:hidden">
                <div className="flex items-center mb-2">
                    <img src="/_nuxt/img/ic_airtripp_funding_icon_24px.5d9f230.png" alt="Airfunding" className="h-6 w-6" />
                    <p className="font-bold ml-2">Qu est-ce que Airfunding?</p>
                </div>
                <p className="text-xs">
                    Ceci est une plate-forme de crowdfunding utilisé par près de 200 pays. Tout le monde peut facilement créer un projet!
                </p>
            </div>
        </div>
    );
}






function ShareInfo() {
    return (
        <div className="p-4 shadow-sm">
            <div>
                <p className="text-lg font-bold text-gray-600 md:px-16">
                    Personnes qui ont partagé
                    <span className="text-lg ml-3">0</span>
                </p>
                <hr className="mt-4 mb-0" />
            </div>
            <div className="mb-8">
                <div className="text-center text-gray-600 mt-4 md:mt-6 md:px-16">
                    <p className="text-base mt-4 mb-2">
                        Soyez le premier à apporter votre aide !
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                        Davantage de personnes sont susceptibles d avoir connaissance du projet et de le soutenir si vous le partagez.
                    </p>
                    <div className="mt-6">
                        <img
                            alt=""
                            className="inline-block"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAT5JREFUOBGtUtFNwzAQfW5Rf+kIYQJgAmoWoHxChCgbsAFhgnaDVoKKT7qB0w06AmxQfiOQeZczSpxESj+wlJzv3d2z7/wMDl3uLQF+LjR9uIW9+ZC9UaDn714mTH3nN9ZMvwf8NexdPugpDflmURULJESDuewOIzDmVJKj5XEi/lEENp3y6npSM8TmV4JVBG6d0b/iJ33mwU5p2S62LNjRql8WFwsJ6RC1+EmAaHl8wphH2NtNhNccvYHHpPM9LtOkltu51SEa7Duj7vW+E6+Bfy2csb+ctziuxcLW5xzCM/DNGYxUSKagkB7KQ5VAUt1yDIymTKYdbliQwA8ykgb1iXjqQjIWNt1VBOG8lnHrGbFlCwdfxabn/UKy6YrtfbUIgpD6CaQyiCYiaQkpijadIuN8OB7MyogKidg/rF8nxU4vLvsMBQAAAABJRU5ErkJggg=="
                        />
                        <span>
                            <a className="underline text-blue-600 ml-2 cursor-pointer">
                                Aide par le partage
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}





function ShareButton() {
    return (
        <a
            href="#"
            className="flex items-center justify-center w-full px-4 py-2 text-lg font-medium text-[#12af9a] bg-white border border-[#12af9a] rounded shadow-sm hover:bg-[#12af9a] hover:text-white transition-colors"
        >
            <span className="mr-4">
                <FontAwesomeIcon icon={faShareNodes} />
            </span>
            <span>Aide par le partage</span>
        </a>
    );
}










const FundingInfo = () => {
    return (
        <div className="p-4">
            <div className="bg-green-50 p-4 mb-4 hidden md:block">
                <div className="flex items-center mb-2">
                    <img
                        src="/_nuxt/img/ic_airtripp_funding_icon_24px.5d9f230.png"
                        alt="Airfunding Icon"
                    />
                    <p className="font-bold ml-2">Qu est-ce que Airfunding?</p>
                </div>
                <p className="text-sm">
                    Ceci est une plate-forme de crowdfunding utilisée par près de 200
                    pays. Tout le monde peut facilement créer un projet!
                </p>
            </div>
            <p className="text-lg md:text-base font-bold text-gray-600 mx-4 md:mx-0">
                <span>Délai imparti</span> <span className="ml-3">3</span>
            </p>
            <hr className="mt-4 mb-0" />

            <div>
                <div className="mb-4">
                    <div className="flex items-center mb-2">
                        <img
                            src="/_nuxt/img/ic_user_grey300_40px.80e324f.png"
                            alt="User Icon"
                            className="rounded-full w-8 h-8"
                        />
                        <div className="ml-2">
                            <span>Anonyme</span>
                            <div>
                                <span className="text-sm mr-2">Montant du soutien</span>
                                <span className="text-base font-semibold">$40 US</span>
                            </div>
                        </div>
                    </div>
                    <div className="mx-4 -my-3">
                        <p className="text-sm text-left mt-2">
                            <a href="#" className="hidden">
                                Afficher le texte original
                            </a>
                            <span className="text-xs float-right">il y a 2 jours</span>
                        </p>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex items-center mb-2">
                        <img
                            src="/_nuxt/img/ic_user_grey300_40px.80e324f.png"
                            alt="User Icon"
                            className="rounded-full w-8 h-8"
                        />
                        <div className="ml-2">
                            <span>Eloise Stoltz</span>
                            <div>
                                <span className="text-sm mr-2">Montant du soutien</span>
                                <span className="text-base font-semibold">$20 US</span>
                            </div>
                        </div>
                    </div>
                    <div className="mx-4 -my-3">
                        <p className="text-sm text-left mt-2">
                            J espère que vous recevrez le soutien nécessaire pour maintenir
                            votre maison en activité.
                        </p>
                        <p className="text-sm text-left mt-2">
                            <a href="#" className="text-xs">
                                Afficher le texte original
                            </a>
                            <span className="text-xs float-right">il y a 4 jours</span>
                        </p>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex items-center mb-2">
                        <img
                            src="/_nuxt/img/ic_user_grey300_40px.80e324f.png"
                            alt="User Icon"
                            className="rounded-full w-8 h-8"
                        />
                        <div className="ml-2">
                            <span>Anonyme</span>
                            <div>
                                <span className="text-sm mr-2">Montant du soutien</span>
                                <span className="text-base font-semibold">$20 US</span>
                            </div>
                        </div>
                    </div>
                    <div className="mx-4 -my-3">
                        <p className="text-sm text-left mt-2">
                            <a href="#" className="hidden">
                                Afficher le texte original
                            </a>
                            <span className="text-xs float-right">il y a 4 jours</span>
                        </p>
                    </div>
                </div>
            </div>

            <p className="text-center mt-4 md:mt-6 mb-4 mx-4 md:mx-0" style={{ display: 'none' }}>
                <a
                    id="load-button"
                    className="button is-rounded is-outlined is-primary w-full h-12"
                >
                    Afficher les prochains 3
                </a>
            </p>
        </div>
    );
};









function UserProfile() {
    return (
        <div className="flex flex-wrap -mx-3 my-3">
            <div className="w-1/6 px-3">
                <div className="text-center">
                    <figure className="w-8 h-8 md:w-14 md:h-14 mx-auto rounded-full overflow-hidden">
                        <img
                            src="https://static2.tap-trip.com/uploads/production/user/image/14975347/square_unnamed.jpg"
                            alt="User"
                            className="rounded-full"
                        />
                    </figure>
                </div>
                <div className="flex justify-center mt-4 mb-8">
                    {/* Add additional elements if needed */}
                </div>
                <div className="flex flex-wrap -mx-1">
                    <a
                        href="https://www.facebook.com/null"
                        className="hidden column sns-container"
                    >
                        <img
                            alt="Facebook Icon"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAABGdBTUEAALGPC/xhBQAAAGlQTFRFPFqZO1ubQGCfPFqYPFqZPFmZO1qYO1mZPFqZPFqlPFqZO1qYPFqYPFqZQlqcPFmYPl2bO1qYRl2iTWaZPVuYSVukPFmYO1qYPFmZO1ybO1mZR2OcO1qYPFqZPVqcPFmZPFqZAAAAO1mYnQW+JAAAACJ0Uk5TuzgQuO+MsO3NEZ7YofcfqyHxCwptDvNSPEXLErW2Np2UAM2fdkoAAABZSURBVBjTtcxHDoAwEEPR0HvvpIBz/0MisWEySOz4yyfLQluWEvYVpSQom86h2AewUwozcBKAlxYVpRyI2P0BnA6NpgVqY+aHNtxNZLXIHhjk+v31F2lO6gJ0dihNHK7alAAAAABJRU5ErkJggg=="
                            className="img"
                        />
                    </a>
                    <a
                        href="https://twitter.com/null"
                        className="hidden column sns-container"
                    >
                        <img
                            alt="Twitter Icon"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAPCAMAAADeWG8gAAAABGdBTUEAALGPC/xhBQAAANJQTFRFVa3wV67vVq3uVbDuWbPyV6/xZsz/VazuVazwVbvuVazvVq3vVa3uVq3uVazuVq3vVq3wVbjxW632VbHxV67yVa/xVa3vVq3uYK/vWrTwVq3vV6/wVazuVa/vVbP2Vq3vVqzvVq3uVa7uVa3vVqzuVa3vVb//Vq3v////Vq3vVa3wVa3uVqzuVa7vVq3vVa3wVazuVq3vVq3vVq3wgP//Vf//VazvVqzvVazuVazvVa3vV63xVa3uVq7wV67vVq3vVbDzVazuVa3vAAAAVazuTVg/dwAAAEV0Uk5TVFLELRRJBdR1D7Ot7sbT9qxEEhwkJjbg5RARjCO5MBvo+oiKnKbMDOsBf1fjlz+eZvCSQYUCA/n9ae3vNfJoL80qyP4AuJjILgAAAJhJREFUGNNV0NUOwzAMBVCPmZmZmbeuvJv//6UlTaS298XRkR3JJnSgslsahUSSYlRt1aWcGc9Pi8apydoVIc8L8ywVoRovcwdwmIwJQlk83OtdUR/U6H1ZMCtQdxKSPfjgLEQnQZutFqCbICwMX1x4NPT/f1mSMJquFX2gyBpIeJveZqRn86rF1uWyhEw6VyyN7cPxoS7yBxuGPs4CRJ6JAAAAAElFTkSuQmCC"
                            className="img"
                        />
                    </a>
                </div>
            </div>
            <div className="w-4/6 px-3 text-left">
                <div className="flex items-center">
                    <img
                        alt="Country Flag"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAMAAABcOc2zAAAABGdBTUEAALGPC/xhBQAAAIdQTFRFLJFs6szJudvP752aSaGA8bm2bbOaf5cvfpcu6oB8udjMA3xQlci2P5t5XKqOXHO8uNrPBX1R3z434UhCn828fbyl2ezlv8vjgZPLprPbFDWeByqYBXtMn50mWD4GJYNEoXkPD4JYPYg/AgEAdFIIXI84jmcKv97T3+/pAAAAAHpN3jgxACOVMJkIiwAAAGdJREFUCNdj0FLk4tRGAgzyWtw8zMgCCkpaWmysQggBZTVVLS0WRmG4gKamCruWFgOTOhQABTTlZGW04ACbgAqHlhavmAYUQAzlE5fSgQKwtaKS0jpwAXktQREJHQRg0FIU4Efi6wAA39kb4ygFQKkAAAAASUVORK5CYII="
                        className="w-4 h-4 mr-2"
                    />
                    <span className="font-medium text-gray-700">Rhyno Olckers</span>
                </div>
                <div className="flex items-center mt-2">
                    <img
                        alt="Verified Icon"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQCAMAAAAVv241AAAABGdBTUEAALGPC/xhBQAAAGlQTFRFAMClAMClAMCmAMKlAMGnAMClAMGnAMClAMCmAMClAMCmAL+mAMCmAMi2AMKnAL+lAMOlAMCmAL+mAL+oAMCmAL+lAL+mAL+mAMClAL+nAMClAP+qAMClAP//AMCmAL+oAL+lAAAAAL+lVtPzSQAAACJ0Uk5Tos32R07yMfr54/vkrg5LxDPz8Cy/4Cj8qiBVA8cBmziAACqccAMAAABzSURBVAjXTY7ZDoMwDASXQlso932lhOz/f2Rjg6ArWZ59sQdOMs+64MdO4zhZKetiqDHLip5XevAvV9n2u2xfKQ8+3yd/EDCMYmWmAE3+UmaGwn/IlVnAlWSiXHqdqj7u1ZW42Ua4sYdo25Fde1o7Nwy6fhZTFfWN8tQbAAAAAElFTkSuQmCC"
                        className="w-3 h-3 mr-1"
                    />
                    <span className="text-sm text-gray-600">Identifié comme vérifié</span>
                </div>
            </div>
        </div>
    );
}