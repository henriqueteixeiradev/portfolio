import { useEffect, useState } from "react";

export const useCountDate = (date: string) => {
  const postDate = new Date(date).getTime();
  const dataAtual = new Date().getTime();
  const days = Math.floor((dataAtual - postDate) / (1000 * 60 * 60 * 24));
  const [result, setResult] = useState("");

  useEffect(() => {
    if (days < 31) {
      return setResult(`há ${days} dias`);
    } else if (days > 31 && days < 365) {
      return setResult(`há ${Math.floor(days / 31)} meses`);
    } else if (days > 365) {
      return setResult(
        `há ${Math.floor(days / 365)} ano${days > 365 ? "s" : ""}`
      );
    }
  }, [days]);

  const Time = () => {
    return <small>Publicado - {result}</small>;
  };

  return {
    Time,
  };
};
