import { Collection } from "@/components/shared/Collection";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { getAllImages } from "@/lib/actions/image.actions";
import React from "react";

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || "";
  const images = await getAllImages({ page, searchQuery });

  const links = [
    {
      id: 1,
      name: "Home",
      route: "/",
      image: "/assets/icons/home.svg",
    },
    {
      id: 2,
      name: "Image Restore",
      route: "/transformations/add/restore",
      image: "/assets/icons/image.svg",
    },
    {
      id: 3,
      name: "Generative Fill",
      route: "/transformations/add/fill",
      image: "/assets/icons/stars.svg",
    },
    {
      id: 4,
      name: "Object Remove",
      route: "/transformations/add/remove",
      image: "/assets/icons/scan.svg",
    },
    {
      id: 5,
      name: "Object Recolor",
      route: "/transformations/add/recolor",
      image: "/assets/icons/filter.svg",
    },
  ];

  return (
    <>
      <section className="home">
        <h1 className="home-heading">
          Empowering Creativity, One Pixel at a Time.
        </h1>
        <ul className="flex-center w-full gap-20">
          <AnimatedTooltip items={links} />
        </ul>
      </section>
      <section className="sm:mt-12">
        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section>
    </>
  );
};

export default Home;
