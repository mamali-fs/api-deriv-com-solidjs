const Community = () => (
    <div class="community-container mobile:flex-col padding-bottom-footer text-white flex flex-row flex-wrap align-middle justify-center w-full min-h-52">
        <div class="mobile:w-full mobile:flex-col flex flex-nowrap w-4/5 align-middle justify-center">
            <div class="mobile:h-auto single-container">
                <h2 class="text-h2-community">Get connected</h2>
                <p class="text-community">Discuss ideas and share solutions with developers worldwide.</p>
                <a class="community-btn font-bold leading-5 rounded text-xs" target="_blank" href="https://binary.vanillacommunity.com/">Join our community</a>
            </div>
            <div class="mobile:h-auto single-container">
                <h2 class="text-h2-community text-sm">We're here to help</h2>
                <p class="text-community">
                    Email us at <a class="community-mail" href="mailto: api-support@deriv.com">api-support@deriv.com</a>
                    <br/>
                    if you have any questions
                </p>
            </div>
        </div>
    </div>
);

export default Community;