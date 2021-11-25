import jsLibraryUrl from '../../assets/js-library.svg';


const ComprehensiveRow = () => (
    <div class="bg-gray-100 flex flex-col items-center justify-center">
        <div class="h-20"></div>
        <div class="flex flex-col items-center justify-center">
            <img src={jsLibraryUrl} alt="js library" class="h-16 w-16" />
            <div class="h-4"></div>
            <h2 class="desktop:text-4xl w-30 text-center text-wrap text-2xl font-bold">
                Comprehensive all-in-one Javascript client library
            </h2>
            <div class="h-3"></div>
            <div class="flex flex-row justify-center">
            <div class="w-1/3"></div>
            <p class="desktop:text-lg text-center text-md text-color-grey-200">
            Simplify your development processes and get your app up and running
            faster with our all-in-one client library
            </p>
            <div class="w-1/3"></div>
        </div>
            <div class='h-6'>

            </div>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Take me to the library
            </button>
        </div>
        <div class="h-20"></div>
    </div>
);

export default ComprehensiveRow;