import { useQuery } from "@tanstack/react-query";
import Container from "../components/ui/Container";
import useAxios from "../hooks/useAxios";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const axios = useAxios();

  const getServices = async () => {
    const res = await axios.get("/services");
    return res;
  };
  const {
    data: services,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["service"],
    queryFn: getServices,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong: {error}</p>;
  }

  return (
    <>
      <Container>
        <h1 className="text-3xl text-center font-bold mt-10 mb-5">
          All Services: {services?.data?.length}
        </h1>
        <div className="grid grid-cols-3 gap-5">
          {services?.data?.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Services;
