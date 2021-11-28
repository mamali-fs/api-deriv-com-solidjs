import heroUrl from '../../assets/hero.png';

const Hero = () => (
    <div class="bg-cover bg-center h-full pb-44  w-screen" style={`background-image: url(${heroUrl})`}>
        <div class="h-48"></div>
        <h1 class="text-white text-center text-6xl font-bold">
            Deriv API
        </h1>
        <div class="h-4"></div>
        <div class="flex flex-row justify-center">
            <div class="w-1/3"></div>
            <div class="text-white  text-2xl text-center">
                Use our powerful, flexible,
                and free API to build a custom trading platform
                – for yourself or for your business.
            </div>
            <div class="w-1/3"></div>
        </div>
    </div>
);

export default Hero;
