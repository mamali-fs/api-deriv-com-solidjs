import checkmarkIcon from '../../assets/checkmark-icon.svg'

const WaysToEarn = () => (
    <div class="mobile:py-10 py-20 flex flex-wrap flex-col items-center justify-center mb-30px bg-gray-100 w-full">
        <div class="mobile:w-full flex flex-nowrap flex-col items-center justify-center w-4/5">
            <div class="flex flex-wrap items-center justify-around w-full">
                <div>
                    <h1 class="testerino mobile:text-2xl mobile:mb-0 mobile:w-9/10 text-center max-w-sm text-5xl text-color-general font-bold leading-snug mb-10">
                        Ways to earn with Deriv API
                    </h1>
                </div>
                <ul>
                    <li class="ways mobile:main-page-card-mobile leading-7">
                        <img class="w-8 h-8" src={checkmarkIcon} />
                        <p class="ml-4">Register your app with Deriv, and add a percentage markup to the contract prices to profit from every contract payout.</p>
                    </li>
                    <li class="ways mobile:main-page-card-mobile leading-7">
                        <img class="w-8 h-8" src={checkmarkIcon} />
                        <p class="ml-4">Sign up as an affiliate, build your app, and get commission on every signup and trade completed via your app.</p>
                    </li>
                    <li class="ways mobile:main-page-card-mobile leading-7">
                        <img class="w-8 h-8" src={checkmarkIcon} />
                        <p class="ml-4">Sign up as a payment agent , and use our API to build your own custom payment website to earn commission on every payment you process for Deriv’s clients.</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default WaysToEarn;
