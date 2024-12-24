import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/Components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import {
  AuthProvider,
  useAuth,
} from "@/Components/recipes-provider/context.tsx";
import { useNavigate } from "react-router";

function HomePage() {
  const navigate = useNavigate();
  const { recipes } = useAuth();
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const handleNavigate = (id: string) => {
    navigate(`/Recipes/${id}`);
  };

  return (
    <div className="flex flex-col gap-10 mt-10">
      <p className="text-center font-bold text-redSideBar text-2xl hover:animate-bounce hover:text-orange-500 transition duration-500 ease-in-out">
        "Welcome to a place where flavors meet! On our site, you’ll discover a
        wide variety of delicious, simple, and creative recipes that will
        capture your heart and fill your home with amazing aromas. Whether
        you're looking for quick meals or unique culinary experiences, here
        you'll find everything you need to create the perfect dish for any
        occasion."
      </p>

      <div className="mx-12 transition-all ease-in-out duration-1000 hover:scale-105">
        <img
          className="rounded-l transition-all ease-in-out duration-300 hover:scale-105"
          src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1273516682.jpg?c=original"
          alt="Meet photo"
        />
      </div>

      <div className="flex justify-center">
        <Carousel
          plugins={[autoplayPlugin.current]}
          className="w-full max-w-sm p-2"
          onMouseEnter={autoplayPlugin.current.stop}
          onMouseLeave={autoplayPlugin.current.reset}
        >
          <CarouselContent>
            {recipes.slice(-5).map((recipe) => (
              <CarouselItem
                key={recipe.id}
                onClick={() => handleNavigate(recipe.id)}
                className="cursor-pointer"
              >
                <div className="p-1">
                  <AuthProvider>
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img
                          src={recipe.image}
                          alt={recipe.name}
                          className="rounded-md"
                          style={{
                            maxWidth: "100%",
                            maxHeight: "150px",
                            objectFit: "cover",
                          }}
                        />
                        <span className="text-3xl font-semibold mt-2">
                          {recipe.name}
                        </span>
                      </CardContent>
                    </Card>
                  </AuthProvider>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default HomePage;
