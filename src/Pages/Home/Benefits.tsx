import automationsvg from '../../assets/automation.svg'
import integrationsvg from '../../assets/integration.svg'
import executionsvg from '../../assets/execution.svg'
import businessimg from '../../assets/build-business.png'
import personalisationimg from '../../assets/personalisation.png'

const Benefits = () => (
    <div class="flex flex-col justify-center pt-20">
        <h1 class="text-black text-center text-5xl font-bold m-4">
            Benefits of using Deriv API
        </h1>
        <div class="flex justify-center mb-20">
 
            <div class="text-black text-2xl">
                <img width="72" height="72" src={automationsvg} />
                Automation
            </div>
            <div class="text-black text-2xl">
                <img width="72" height="72" src={integrationsvg} />
                Easy integration
            </div>
            <div class="text-black text-2xl">
                <img width="72" height="72" src={executionsvg} />
                Fast execution
           </div>
        </div>
        <div class="md:container md:mx-auto flex flex-row justify-evenly">
            <div class="w-1/3">
                <h3 class="text-black text-2xl font-bold">
                    Personalisation
                </h3>
                <p class="text-2xl mb-24">
                    Personalise your trading applications to match your needs. Create charts and views just the way you like them. Develop your trading applications using any common programming language and extend your trading opportunity.
                </p>
                <img width="486" height="260" src={businessimg} alt="build business
                " />
            </div>
            <div class="w-1/3">
                <img width="486" height="260" src={personalisationimg} alt="personalisation" />
                <h3 class="text-black text-2xl font-bold mt-8 ">
                    Build a business and earn more
                </h3>
                <p class="text-2xl">
                    Create your own trading apps by taking advantage of the power of Deriv's trading services. Share your apps with fellow traders or customers, and have a chance to earn more or build your own business.
                </p>
            </div>
        </div>

    </div>

);

export default Benefits;