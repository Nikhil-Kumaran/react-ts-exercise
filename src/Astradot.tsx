import * as React from "react";

export interface ResponseProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const useFetch = (
  url: string,
  refreshInterval_Secs: number
): [ResponseProps | undefined, ResponseProps | undefined, boolean] => {
  const [response, setResponse] = React.useState();
  const [error, setError] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async (
      url: string,
      options?: RequestInit | undefined
    ) => {
      try {
        const res = await fetch(url, options);
        if (res.status >= 200 && res.status <= 299) {
          const json = await res.json();
          setResponse(json);
        } else {
          const err = await res.json();
          setError(err);
        }
      } catch (err) {
        console.log("Network error", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    fetchData(url);

    const intervalId = setInterval(() => {
      fetchData(url);
    }, refreshInterval_Secs * 1000);

    return () => clearInterval(intervalId);
  }, [url]);

  return [response, error, isLoading];
};

const DEV_SVR = "https://dev.dummy-svr.com";
const METRIC_ENDPOINT = "/metrics";
function genQuery(
  timeRange: string,
  componentName: string,
  seed: number,
  id?: number
) {
  console.log(timeRange, componentName, seed);
  return `https://jsonplaceholder.typicode.com/todos/${id}`;
}

function Loading() {
  return <h2>Loading</h2>;
}
export interface IProps {
  timeRange: string;
  id?: number;
}
export function C1(props: IProps) {
  const refreshInterval_Secs = 60;
  const query = genQuery(props.timeRange, "c1", Math.random(), props.id);

  const [data, error, loading] = useFetch(query, refreshInterval_Secs);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error</div>;
  }
  return <div>Hi {data?.title}</div>;
}

export function C2(props: IProps) {
  const refreshInterval_Secs = 10;
  const query = genQuery(props.timeRange, "c2", Math.random(), props.id);
  const [data, error, loading] = useFetch(query, refreshInterval_Secs);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error</div>;
  }
  return <div>Hello there {data?.title}</div>;
}
export function C3(props: IProps) {
  const refreshInterval_Secs = 15;
  const query = genQuery(props.timeRange, "c3", Math.random(), props.id);
  const [data, error, loading] = useFetch(query, refreshInterval_Secs);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error</div>;
  }
  return <div>Charlie {data?.title} Tango</div>;
}
export function C4(props: IProps) {
  const refreshInterval_Secs = 42;
  const query = genQuery(props.timeRange, "c4", Math.random(), props.id);
  const [data, error, loading] = useFetch(query, refreshInterval_Secs);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error</div>;
  }
  return <div>A fox jumped {data?.title}</div>;
}
export function C5(props: IProps) {
  const refreshInterval_Secs = 30;
  const query = genQuery(props.timeRange, "c5", Math.random(), props.id);
  const [data, error, loading] = useFetch(query, refreshInterval_Secs);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error</div>;
  }
  return <div>{data?.title} is king</div>;
}
