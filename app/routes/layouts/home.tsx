import { Outlet } from "react-router";
import Hero from "~/components/Hero";
import { faker } from '@faker-js/faker';

const HomeLayout = () => {
  return (
    <>
    <Hero name={faker.person.firstName()} />
      <section className="max-w-6xl mx-auto px-6 my-8">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
