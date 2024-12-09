import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import getQueryClient from "@/react-query/query-client";
import {client} from "@/api";
import LandingPage from "@/app/landing-page";

export default async function LandingPageRoute() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['landingPage'],
    queryFn: async () => {
      return client.GET('/landing-page', {
        params: {
          query: {
            populate: 'whyChooseUs.keyPoints.image'
          }
        }
      }).then((response) => response.data?.data)
    }
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <LandingPage />
    </HydrationBoundary>
  );
}
