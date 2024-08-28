import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./components/ui/carousel"
import { Card, CardContent } from "./components/ui/card"
import SantoriniImage from "./images/Santorini.jpg"
import { Button } from "./components/ui/button";

function App() {
  const imagesArray1 = ["https://i.gyazo.com/3dcc68c35b57726c906210177ca91774.jpg", "https://i.gyazo.com/72af38a8fff07a0df75468c02a14c483.jpg", "https://i.gyazo.com/44c9b2be83b59580ab4420dd350f6270.png"];
  const imagesArray2 = ["https://i.gyazo.com/1c58de08c6d082240f8f56159dd7c360.png", "https://i.gyazo.com/bdb3e87e2bedb3eeb5486dfcc93b882b.png", "https://i.gyazo.com/d0c542bc3924a5a45c65ec7d4773d07e.png"];
  const imagesArray3 = ["https://i.gyazo.com/8207fb511828c7efba82eb8aa184284c.png", "https://i.gyazo.com/4ea77563d34058b149fea98234b8e5b7.png", "https://i.gyazo.com/1d9a0f5863ad8f05492b7ed978774190.jpg"];
  const imagesArray4 = ["https://i.gyazo.com/3ae808dfc76c39465328c9d22f091889.png", "https://i.gyazo.com/5ed2fa5c75dfcaa3d7a577015eeb8a7a.png", "https://i.gyazo.com/18a556ae2fbccf715fd4e493d154d11e.png", "https://i.gyazo.com/0abbe95796e950a7fcc8e5432ade7de0.png"];
  const imagesArray5 = ["https://i.gyazo.com/0d2ee6fe15d62f84055f4f2acc715fb0.png", "https://i.gyazo.com/23c09a5718c82748603c152eeedef002.png", "https://i.gyazo.com/e64dceb451edcda7210f66e6b852ff72.png", "https://i.gyazo.com/441356e7f275d3761101df99c30966d9.png"];

  return (
    <div className="flex flex-col items-end mt-12 mx-4 sm:mr-44 gap-4 sm:gap-16">
      <div className="flex flex-col max-w-md sm:fixed left-8 top-12 gap-6">
        <div className="relative w-full sm:w-80 sm:h-64 overflow-hidden rounded-full">
          <img
            src={SantoriniImage}
            alt="Description"
            className="absolute inset-0 w-full h-full object-cover transform scale-150"
            style={{ transformOrigin: 'center' }}  
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-semibold">Sid Rico Björk</h1>
          <p className="mt-12">
            Hi, I'm Sid, a 21-year-old software developer from Stockholm, Sweden. I'm passionate about coding and have been dedicated to it daily since late last year. <br/><br/> My skills include JavaScript, TypeScript, React, Next.js, SQLite, and Prisma, with a growing knowledge of Azure and AWS.
            <br/><br/>
            When I'm not coding, you'll find me at the gym, traveling, or staying on top of the latest tech.<br/><br/> Fluent in English, Spanish, and Swedish, I thrive in diverse environments and am eager to tackle new challenges.
          </p>
          <br/>
          <p className="font-semibold">Contact Me <br/> Phone: 070-061 49 67 | Email: sidricobjork@gmail.com</p>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mt-8 mx-auto">Paid Projects For Customers</h2>
      <Card className="shadow-lg rounded-lg border-t-0 flex flex-col h-full w-full md:w-2/3 lg:w-1/2">
        <CardContent className="flex-1 p-0">
          <div className="mx-auto">
            <p className="text-center text-2xl font-semibold border-b pb-8 hover:underline"><a href="https://www.jhc-platbyggab.com/" >JHC Plåt & Bygg AB</a></p>
            <Carousel className="w-full">
              <CarouselContent>
                {imagesArray1.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full pb-[66.66%]">
                      <img
                        className="absolute top-0 left-0 w-full h-full object-cover roundebd-md"
                        src={image}
                        alt={`Carousel image ${index + 1}`}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-8" />
              <CarouselNext className="mr-8" />
            </Carousel>
          </div>
          <hr/>
          <div className="py-4">
            <p className="text-center text-2xl mt-4">JHC Plåt & Bygg AB</p>
            <p className="p-4">
              JHC Plåt & Bygg AB is a straightforward website designed to provide essential information about roofing services. It features a clean and simple layout with easy access to email support and a user-friendly price request form. Customers can also reach out for service inquiries through a dedicated customer service form. The site includes automated email confirmations and a fully functioning support system to streamline communication. 
              <br/> <br/>
              Feel free to try it out but please write "TEST" in the description since the website is in production.
            </p>
            <p className="p-4"><span className="font-bold">Technologies/Stack:</span> React, Express, Tanstack/react-query, Axios, TailwindCSS, Typescript, ShadCN, react-i18next </p>
            <div className="flex justify-evenly mt-4">
              <Button asChild size={"sm"}>
                <a href="https://www.jhc-platbyggab.com/" target="_blank" rel="noopener noreferrer" className="block w-full text-center">Live Website</a>
              </Button>
              <Button asChild size={"sm"}>
                <a href="https://github.com/SuphaNinja/JHC-Client/tree/main/client" target="_blank" rel="noopener noreferrer" className="block w-full text-center">Github Code (client)</a>
              </Button>
              <Button asChild size={"sm"}>
                <a href="https://github.com/SuphaNinja/JHC-Client/tree/main/server" target="_blank" rel="noopener noreferrer" className="block w-full text-center">Github Code (server)</a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Projects Section */}
      <h2 className="text-2xl font-semibold mt-8 mx-auto">Personal Projects</h2>

      {/* AI News Project */}
      <Card className="shadow-lg rounded-lg border-t-0 flex flex-col h-full w-full md:w-2/3 lg:w-1/2">
        <CardContent className="flex-1 p-0">
          <div className="mx-auto">
            <p className="text-center text-2xl font-semibold border-b pb-8 hover:underline"><a href="https://blog-app-client-blue.vercel.app/" >AI News</a></p>
            <Carousel className="w-full">
              <CarouselContent>
                {imagesArray2.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full pb-[66.66%]">
                      <img
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                        src={image}
                        alt={`AI News Carousel image ${index + 1}`}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-8" />
              <CarouselNext className="mr-8" />
            </Carousel>
          </div>
          <div className="py-4">
            <p className="text-center text-2xl mt-4">AI News</p>
            <p className="p-4">AI News is a straightforward news site where administrators can upload and manage articles easily. Users can read articles, like and comment on them, and receive notifications about their activity on the site. The platform features a simple, responsive design for various devices and includes basic security measures to protect user data.
            <br/><br/>
              <span className="font-bold">Demo Account</span> Mail: demo123@gmail.com | Password: Demo123
            </p>
            <p className="p-4"><span className="font-bold">Technologies/Stack:</span> React, Express, Tanstack/react-query, Axios, TailwindCSS, Typescript, ShadCN, ZOD, lodash, SQLite, Prisma, JWT, bcrypt</p>
            <div className="flex justify-evenly mt-4">
              <Button asChild size={"sm"}>
                <a href="https://blog-app-client-blue.vercel.app/" target="_blank" rel="noopener noreferrer" className="block w-full text-center">Live Website</a>
              </Button>
              <Button asChild size={"sm"}>
                <a href="https://github.com/SuphaNinja/BLOG_APP_CLIENT" target="_blank" rel="noopener noreferrer" className="block w-full text-center">Github Code (client)</a>
              </Button>
              <Button asChild size={"sm"}>
                <a href="https://github.com/SuphaNinja/BLOG_APP_SERVER" target="_blank" rel="noopener noreferrer" className="block w-full text-center">Github Code (server)</a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* League Memory Game Project */}
      <Card className="shadow-lg rounded-lg flex flex-col border-t-0 h-full w-full md:w-2/3 lg:w-1/2">
        <CardContent className="flex-1 p-0">
          <div className="mx-auto">
            <p className="text-center text-2xl font-semibold border-b pb-8 hover:underline"><a href="https://lol-memory-game-ten.vercel.app/" >League Of Memory</a></p>
            <Carousel className="w-full">
              <CarouselContent>
                {imagesArray3.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full pb-[66.66%]">
                      <img
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                        src={image}
                        alt={`League Game Carousel image ${index + 1}`}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-8" />
              <CarouselNext className="mr-8" />
            </Carousel>
          </div>
          <div className="py-4">
            <p className="text-center text-2xl mt-4">League Memory Game</p>
            <p className="p-4">League of Memory is a WebSocket-based card memory game where you can challenge friends to 1 vs 1 matches. Inspired by League of Legends, it features real-time gameplay, allowing you to invite friends, track match history, and play against them live. The game is built using NextJS, Tanstack/react-query, Axios, TailwindCSS, TypeScript, ShadCN, SQLite, Prisma, Socket.io, AuthJS, and bcrypt, providing a smooth, interactive experience with secure user management and efficient data handling.
              <br/> <br/>
              You will need to Sign up with github to play the game.
            </p>
            <p className="p-4"> <span className="font-bold"></span>Technologies/Stack: NextJS, Tanstack/react-query, Axios, TailwindCSS, Typescript, ShadCN, SQLite, Prisma, Socket.io, AuthJS, bcrypt</p>
            <div className="flex justify-evenly gap-4 mt-4">
              <Button asChild size={"sm"}>
                <a href="https://lol-memory-game-ten.vercel.app/" target="_blank" rel="noopener noreferrer" className="block w-full text-center">Live Website</a>
              </Button>
              <Button asChild size={"sm"}>
                <a href="https://github.com/SuphaNinja/LOL_MEMORY_GAME" target="_blank" rel="noopener noreferrer" className="block w-full text-center">Github Code</a>
              </Button>
              
            </div>
          </div>
        </CardContent>
      </Card>

      {/* GoalFitPro Project */}
      <Card className="shadow-lg rounded-lg flex flex-col border-t-0 h-full w-full md:w-2/3 lg:w-1/2">
        <CardContent className="flex-1 p-0">
          <div className="mx-auto">
            <p className="text-center text-2xl font-semibold border-b pb-8 hover:underline"><a href="https://aigymapp-client-wvix.vercel.app/" >AI Gym App</a></p>
            <Carousel className="w-full">
              <CarouselContent>
                {imagesArray4.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full pb-[66.66%]">
                      <img
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                        src={image}
                        alt={`GoalFitPro Carousel image ${index + 1}`}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-8" />
              <CarouselNext className="mr-8" />
            </Carousel>
          </div>
          <div className="py-4">
            <p className="text-center text-2xl mt-4">GoalFitPro</p>
            <p className="p-4">GoalFitPro is an AI-powered platform that generates a personalized 7-day fitness and meal plan based on user input. Utilizing NextJS and TypeScript, it offers a seamless experience where clients fill out a form to receive tailored workout and meal recommendations. The platform supports "trainer" and "client" accounts, allowing clients to select a trainer and engage in a live chat. Built with Tanstack/react-query and Axios for data management, TailwindCSS for styling, and SQLite with Prisma for efficient data storage, GoalFitPro ensures a smooth, interactive experience with secure authentication managed by AuthJS and bcrypt.
              <br/> <br/>
              <span className="font-bold">Demo Account</span> Mail: demo123@gmail.com | Password: Demo123
            </p>
            <p className="p-4"> <span className="font-bold">Technologies/Stack: </span>React, Express, Tanstack/react-query, Axios, TailwindCSS, Typescript, ShadCN, OpenAI API, bcrypt, SQLite, Prisma</p>
            <div className="flex justify-evenly mt-4">
              <Button asChild size={"sm"}>
                <a href="https://aigymapp-client-wvix.vercel.app/" target="_blank" rel="noopener noreferrer" className="block w-full text-center">Live Website</a>
              </Button>
              <Button asChild size={"sm"}>
                <a href="https://github.com/SuphaNinja/AIGYMAPP-CLIENT" target="_blank" rel="noopener noreferrer" className="block w-full text-center">Github Code (client)</a>
              </Button>
              <Button asChild size={"sm"}>
                <a href="https://github.com/SuphaNinja/AIGYMAPP-SERVER" target="_blank" rel="noopener noreferrer" className="block w-full text-center">Github Code (server)</a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ElectroBuy Project */}
      <Card className="shadow-lg rounded-lg flex border-t-0 flex-col h-full w-full md:w-2/3 lg:w-1/2">
        <CardContent className="flex-1 p-0">
          <div className="mx-auto">
            <p className="text-center text-4xl font-semibold border-b pb-8 hover:underline"><a href="https://ecommerce-app-three-zeta.vercel.app/" >ElectroBuy</a></p>
            <Carousel className="w-full">
              <CarouselContent>
                {imagesArray5.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full pb-[66.66%]">
                      <img
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                        src={image}
                        alt={`ElectroBuy Carousel image ${index + 1}`}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-8" />
              <CarouselNext className="mr-8" />
            </Carousel>
          </div>
          <div className="py-4">
            <p className="text-center text-2xl mt-4">ElectroBuy</p>
            <p className="p-4">
ElectroBuy is a sleek e-commerce platform designed for browsing, adding products to your cart, and checking out seamlessly. Built with NextJS and TypeScript, ElectroBuy offers a clean and intuitive interface where users can easily add items to their cart and wishlist. The app leverages Tanstack/react-query and Axios for efficient data management, while TailwindCSS and ShadCN provide a stylish and responsive design. Data is managed with SQLite and Prisma, and secure user authentication is handled using AuthJS and bcrypt. Validation is implemented with ZOD to ensure a reliable shopping experience.
              <br/> <br/>
              <span className="font-bold">Demo Account</span> Mail: demo123@gmail.com | Password: Demo123
            </p>
            <p className="p-4"> <span className="font-bold">Technologies/Stack:</span> NextJS, Tanstack/react-query, Axios, TailwindCSS, Typescript, ShadCN, SQLite, Prisma, AuthJS, bcrypt, ZOD</p>
            <div className="flex justify-evenly mt-4">
              <Button asChild size={"sm"}>
                <a href="https://ecommerce-app-three-zeta.vercel.app/" target="_blank" rel="noopener noreferrer" className="block w-full text-center">Live Website</a>
              </Button>
              <Button asChild size={"sm"}>
                <a href="https://github.com/SuphaNinja/ECOMMERCE_APP" target="_blank" rel="noopener noreferrer" className="block w-full text-center">Github Code (client)</a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;