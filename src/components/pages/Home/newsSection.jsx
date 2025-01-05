import { Button } from "@/components/ui/button";
import { queryKeys } from "@/utils/constants/constants";
import { fetchData } from "@/utils/query/query";
import { ArrowLeft, ArrowRight, CalendarRange } from "lucide-react";
import Link from "next/link";
import React from "react";

const NewsSection = async () => {
  const newsData = await fetchData(`api/${queryKeys.news}`);
  return (
    <>
      <div className="px-10 py-5 ">
        <div className="bg-white px-8 py-4 flex flex-col gap-4">
          <div>
            <h1 className="text-xl lg:text-2xl font-bold">News</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData?.map((news) => {
              return (
                <div key={news.id} className="flex gap-4">
                  <div>
                    <img
                      src={news.image}
                      alt="error"
                      className="md:h-32 md:w-52 max-sm:w-38 max-sm:h-20 sm:48  object-cover "
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-sm font-medium">{news.title}</div>
                    <div className="flex gap-2">
                      <div className="flex gap-1 items-center">
                        <CalendarRange className="h-4 w-4" />
                      </div>
                      {new Date(news.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                    <div>
                      <Link href={`/news/${news.id}`}>
                        <Button
                          variant="link"
                          size="default"
                          className="text-primary "
                        >
                          Read More <ArrowRight />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
          <div className="flex justify-end">
            <Link href="/news">
              <Button
                variant="ghost"
                size="lg"
                className="bg-accent text-primary-foreground"
              >
                View More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsSection;
